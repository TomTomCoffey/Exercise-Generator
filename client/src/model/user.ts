import type { Workout } from "./workout";
import type { Cardio } from "./cardio";
import * as myFetch from "./myFetch";
import type { DataEnvelope, DataListEnvelope } from "./myFetch";
import { computed, reactive } from "vue";
import easyWorkouts from "../data/easyWorkouts.json";
import intermediateWorkouts from "../data/intermediateWorkouts.json";
import advancedWorkouts from "../data/advancedWorkouts.json";
import { useRouter } from "vue-router";




const session = reactive({
    user: null as User | null,
    isLoading: false,
    messages: [] as {
        msg: string,
        type: "success" | "danger" | "warning" | "info",
    }[],
    
})

export function useSession() {
    return session;
}


export interface User{
   
    id: number;
    name: string;
    age: number;
    email: string;
    password: string;
    isAdmin: boolean;
    workouts: Workout[][];
    cardios: Cardio[][];
    height: number;
    weight: number;
    workout: Workout[];
    cardio: Cardio[];
    workoutPointer: number;
    totalWorkouts: number;
    totalWorkout: number;
    token?: string;


}


export function api(url: string, data?: any, method?: string, headers?: any) {
    session.isLoading = true;
    return myFetch.api(url, data, method, headers)
        .catch(err => {
            console.error({err});
            session.messages.push({
                msg: err.message  ?? JSON.stringify(err),
                type: "danger",
            })
        })
        .finally(() => {
            session.isLoading = false;
        })
}

export function getUsers(): Promise<DataListEnvelope<User>> {

    return api('users')

}

export function getUser(id: number): Promise<DataEnvelope<User>> {

    return api(`users/${id}`)

}


export function createUser(user: User): Promise<DataEnvelope<User>> {

    return api('users', user)
}



export function updateUser(user: User): Promise<DataEnvelope<User>> {

    return api(`users/`, user, 'PUT')

}

export function getEasyWorkouts(): Promise<DataListEnvelope<Workout>> {

    return api('easyWorkouts')

}

export function getintermediateWorkouts(): Promise<DataListEnvelope<Workout>> {

    return api('intermediateWorkouts')
}

export function getAdvancedWorkouts(): Promise<DataListEnvelope<Workout>> {

    return api('advancedWorkouts')
}

export async function loginWithServer(email: string, password: string): Promise<User> {
      
    
    const person = await api('users/login', {email, password}, 'POST');

    session.user = person.data.user;

    if(session.user) {
    const router = useRouter();
    session.user.token = person.data.token;
    addMessage("Login Successful", "success");
    // router.push('/');
    }

    return person.data.user;
    

}

       
export function addMessage(msg: string, type: "success" | "danger" | "warning" | "info") {
    console.log({msg, type});
    session.messages.push({
        msg,
        type,
    })
}

export function deleteMessage(index: number) {
    session.messages.splice(index, 1);

}

export function login(){
    session.user = userArray[0];

}

export function loginWithUser(user: User){
    session.user = user;
}

export function logout(){
    session.user = null;
}


export function getWorkoutPointer(){
    return session.user?.workoutPointer;
}

export function increment(){
   if(session.user?.workoutPointer! < session.user?.workouts.length! - 1)
    { 
        session.user!.workoutPointer++;    
        session.user!.totalWorkout += session.user!.workouts[session.user!.workoutPointer!].length;
        session.user!.totalWorkouts++;
    }
    else
    {
        session.user!.workoutPointer = 0;
        session.user!.totalWorkout += session.user!.workouts[session.user!.workoutPointer!].length;
        session.user!.totalWorkouts++;
    }

}

export function todaysWorkout(){
    return session.user?.workouts[session.user?.workoutPointer!];
}

export function getYesterdaysWorkout() {
    if(session.user?.workoutPointer! > 0)
    {
        return session.user?.workouts[session.user?.workoutPointer! - 1] as Workout[];
        
    }
    else
    {
        return session.user?.workouts[session.user?.workouts.length! - 1] as Workout[];
    }
}

export function setWorkouts(workout: Workout[][]){
    session.user!.workouts = workout;
    console.log(session.user!.workouts);

}


export function setCardios(Cardio: Cardio[][]){
    session.user!.cardios = Cardio;
}

export function getWorkouts(){
    return session.user?.workouts;
}

export function getCardios(){
    return session.user?.cardios;
}

export function getWorkout(){
    return session.user?.workout;
}
















    



























 export const userArray: User[] = [
    {
        "id": 1,
        "name": "Scott Doe", 
        "age": 22,
        "email": "scott@scott",
        "password": "scott",
        "isAdmin": true,
        "workouts": [
            [
                {
                    "id": 1,
                    "name": "Leg Extensions",
                    "photo": "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Leg-Extension_41d91d3f-4b9c-4374-82e2-1d697ce35fe4_600x600.png?v=1612138862",
                    "sets": 4,
                    "reps": 10,
                    "weight": 100,
                    "date": "2020-03-03"
                },
                {
                    "id": 2,
                    "name": "Calf Extensions",
                    "photo": "https://fitnessvolt.com/wp-content/uploads/2021/02/dumbbell-standing-calf-raise-.jpg",
                    "sets": 3,
                    "reps": 15,
                    "weight": 100,
                    "date": "2020-03-03"
                },
                {
                    "id": 3,
                    "name": "Seated Curls",
                    "photo": "data:image/png;base64,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",
                    "sets": 5,
                    "reps": 8,
                    "weight": 100,
                    "date": "2020-03-03"
                }
            ],
            [
                {
                    "id": 1,
                    "name": "Bench Press",
                    "photo": "https://s3.amazonaws.com/prod.skimble/assets/2289486/image_iphone.jpg",
                    "sets": 3,
                    "reps": 10,
                    "weight": 100,
                    "date": "2020-03-03"
                },
                {
                    "id": 2,
                    "name": "Squat",
                    "photo": "https://static.strengthlevel.com/images/illustrations/squat-1000x1000.jpg",
                    "sets": 3,
                    "reps": 8,
                    "weight": 250,
                    "date": "2020-03-03"
                },
                {
                    "id": 3,
                    "name": "Deadlift",
                    "photo": "https://static.strengthlevel.com/images/illustrations/deadlift-1000x1000.jpg",
                    "sets": 3,
                    "reps": 6,
                    "weight": 385,
                    "date": "2020-03-03"
                }
            ]
        ],
        "cardios": [
            [
                {
                    "id": 1,
                    "name": "Running",
                    "distance": 3,
                    "duration": 30,
                    "date": "2020-03-03"
                },
                {
                    "id": 2,
                    "name": "Running",
                    "distance": 3,
                    "duration": 30,
                    "date": "2020-03-03"
                },
                {
                    "id": 3,
                    "name": "Running",
                    "distance": 3,
                    "duration": 30,
                    "date": "2020-03-03"
                }
            ],
            [
                {
                    "id": 1,
                    "name": "Running",
                    "distance": 3,
                    "duration": 30,
                    "date": "2020-03-03"
                },
                {
                    "id": 2,
                    "name": "Running",
                    "distance": 3,
                    "duration": 30,
                    "date": "2020-03-03"
                },
                {
                    "id": 3,
                    "name": "Running",
                    "distance": 3,
                    "duration": 30,
                    "date": "2020-03-03"
                }
            ]
        ],
        "height": 68,
        "weight": 170,
        "workout": [
            {
                "id":1,
                "name": "Bench Press",
                "photo": "client/src/assets/images/BenchPress.jpg",
                "sets": 3,
                "reps": 10,
                "weight": 225,
                "date": "2020-03-03"
            },
            {
                "id": 2,
                "name": "Squat",
                "photo": "client/src/assets/images/Squat.jpg",
                "sets": 3,
                "reps": 10,
                "weight": 275,
                "date": "2020-03-03"
            },
            {
                "id": 3,
                "name": "Deadlift",
                "photo": "client/src/assets/images/Deadlift.jpg",
                "sets": 3,
                "reps": 10,
                "weight": 385,
                "date": "2020-03-03"
            }
        ],
        "cardio": [
            {
                "id": 1,
                "name": "Running",
                "distance": 3,
                "duration": 30,
                "date": "2020-03-03"
            },
            {
                "id": 2,
                "name": "Running",
                "distance": 3,
                "duration": 30,
                "date": "2020-03-03"
            },
            {
                "id": 3,
                "name": "Running",
                "distance": 3,
                "duration": 30,
                "date": "2020-03-03"
            }
        ],
        "workoutPointer": 0,
        "totalWorkouts" : 0,
        "totalWorkout": 0
    
    
        
    
    }
    
    
    
       
    
    
    
    
    
    
    
 ]