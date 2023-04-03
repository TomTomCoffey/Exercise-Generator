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
                    "name": "Bench Press",
                    "sets": 3,
                    "reps": 10,
                    "weight": 100,
                    "date": "2020-03-03"
                },
                {
                    "id": 2,
                    "name": "Squat",
                    "sets": 23,
                    "reps": 3,
                    "weight": 909,
                    "date": "2020-03-03"
                },
                {
                    "id": 3,
                    "name": "Deadlift",
                    "sets": 3,
                    "reps": 908,
                    "weight": 4,
                    "date": "2020-03-03"
                }
            ],
            [
                {
                    "id": 3,
                    "name": "Bench Press",
                    "sets": 4,
                    "reps": 6,
                    "weight": 989,
                    "date": "2020-03-03"
                },
                {
                    "id": 2,
                    "name": "Squat",
                    "sets": 4,
                    "reps": 89,
                    "weight": 1,
                    "date": "2020-03-03"
                },
                {
                    "id": 3,
                    "name": "Deadlift",
                    "sets": 3,
                    "reps": 3,
                    "weight": 3,
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
                    "distance": 2,
                    "duration" : 30,
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
                    "distance": 80,
                    duration: 40,
                    "date": "2020-03-03"
                },
                {
                    "id": 3,
                    "name": "Running",
                    "distance": 3,
                    "duration": 4,
                    "date": "2020-03-03"
                }
            ]
        ],
        "height": 60,
        "weight": 150,
        "workout": [
            {
                "id": 1,
                "name": "Bench Press",
                "sets": 3,
                "reps": 10,
                "weight": 100,
                "date": "2020-03-03"
            },
            {
                "id": 2,
                "name": "Squat",
                "sets": 3,
                "reps": 10,
                "weight": 100,
                "date": "2020-03-03"
            },
            {
                "id": 3,
                "name": "Deadlift",
                "sets": 4,
                "reps": 4,
                "weight": 5,
                "date": "2020-03-03"
            }
        ],
        "cardio": [
            {
                "id": 6,
                "name": "Running",
                "distance": 6,
                "duration": 30,
                "date": "2020-03-03"
            },
          
        ],
        "workoutPointer": 0
    
    
        
    
    }   

];




  


















