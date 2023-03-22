
import { Workout } from './workout';
import { Cardio } from './cardio';

export interface User{
   
    id: number;
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
    workout: Workout[][];
    cardio: Cardio[];
    height: number;
    weight: number;


}
