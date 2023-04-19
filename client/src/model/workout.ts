import easyWorkouts from '../data/easyWorkouts.json';
import mediumWorkouts from '../data/intermediateWorkouts.json';
import hardWorkouts from '../data/advancedWorkouts.json';




export interface Workout{

    id: number;
    name: string;
    photo: string;
    sets: number;
    reps: number;
    weight: number;
    date: string;


}

export function useEasyWorkouts(){

    return easyWorkouts as unknown as Workout[][];

}

export function useMediumWorkouts(){
    
        return mediumWorkouts as unknown as Workout[][];
    
    }

    export function useHardWorkouts(){
        
            return hardWorkouts as unknown as Workout[][];
        
        }
        




