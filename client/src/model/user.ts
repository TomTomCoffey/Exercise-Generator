import type { Workout } from "./workout";
import type { Cardio } from "./cardio";
import user from "../data/users.json"
import { reactive } from "vue";



const session = reactive({
    user: null as User | null



})

export function useSession() {
    return session;
}


export interface User{
   
    id: number;
    name: string;
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


}

export function login(){
    session.user = userArray[0];

}

export function logout(){
    session.user = null;
}

export function getUser(){
    return session.user;
}

export function getWorkoutPointer(){
    return session.user?.workoutPointer;
}

export function increment(){
   if(session.user?.workoutPointer! < session.user?.workouts.length! - 1)
       { session.user!.workoutPointer++;}
    else{
        session.user!.workoutPointer = 0;
    }
}

export function todaysWorkout(){
    return session.user?.workouts[session.user?.workoutPointer!];
}











    



























 export const userArray: User[] = [
    {
        "id": 1,
        "name": "Scott Doe", 
        "email": "scott@scott",
        "password": "scott",
        "isAdmin": true,
        "workouts": [
            [
                {
                    "id": 1,
                    "name": "Leg Extensions",
                    "photo": "../assets/images/leg-extensions.jpg",
                    "sets": 4,
                    "reps": 10,
                    "weight": 100,
                    "date": "2020-03-03"
                },
                {
                    "id": 2,
                    "name": "Calf Extensions",
                    "photo": "client/src/assets/images/CalfExtensions.jpg",
                    "sets": 3,
                    "reps": 15,
                    "weight": 100,
                    "date": "2020-03-03"
                },
                {
                    "id": 3,
                    "name": "Seated Curls",
                    "photo": "client/src/assets/images/SeatedCurl.png",
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
                    "photo": "client/src/assets/images/BenchPress.jpg",
                    "sets": 3,
                    "reps": 10,
                    "weight": 100,
                    "date": "2020-03-03"
                },
                {
                    "id": 2,
                    "name": "Squat",
                    "photo": "client/src/assets/images/Squat.jpg",
                    "sets": 3,
                    "reps": 8,
                    "weight": 250,
                    "date": "2020-03-03"
                },
                {
                    "id": 3,
                    "name": "Deadlift",
                    "photo": "client/src/assets/images/Deadlift.jpg",
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
        "workoutPointer": 0
    
    
        
    
    }
    
    
    
       
    
    
    
    
    
    
    
 ]