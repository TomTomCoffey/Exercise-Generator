
import { Workout } from './workout';
import { Cardio } from './cardio';




export interface User{
   
    id: number;
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
    workouts: Workout[][];
    cardio: Cardio[];
    height: number;
    weight: number;
    workout: Workout[];
    workoutPointer: number;


}


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












