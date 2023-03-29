
import { Workout } from './workout';
import { Cardio } from './cardio';



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

  


 export function calculateBMI(height: number, weight: number): number{
    return weight / (height * height);
}

export function avePaceFeetPerMinute(distance: number, duration: number): number{
    return (distance / duration) * 60;
}


export function pushWorkoutList(): void{
    this.workout.push(this.workouts);
}

export function addCardio(): void{
    this.cardio.push(this.cardio);
}


export function totalWeightLifted(): number{
    let total = 0;
    for(let i = 0; i < this.workouts.length; i++){
        for(let j = 0; j < this.workouts[i].length; j++){
            total += this.workouts[i][j].weight;
        }
    }
    return total;
}

export function totalDistance(): number{
    let total = 0;
    for(let i = 0; i < this.cardio.length; i++){
        total += this.cardio[i].distance;
    }
    return total;
}

export function caloriesBurned(): number{
    let total = 0;
    for(let i = 0; i < this.cardio.length; i++){
        total += this.cardio[i].distance * 100;
    }
    return total;
}

export function totalCardioTime(): number{
    let total = 0;
    for(let i = 0; i < this.cardio.length; i++){
        total += this.cardio[i].duration;
    }
    return total;
}

export function increment (): void{
    
    if(this.workoutPointer < this.workouts[0].length){
        this.workoutPointer++;
    }

    else if(this.workoutPointer === this.workouts[0].length){
        this.workoutPointer = 0;
    }
    
}












