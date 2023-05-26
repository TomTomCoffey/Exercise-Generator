import type { DataEnvelope, DataListEnvelope } from "./myFetch";
import * as myFetch from "./myFetch";
import { useSession } from "./user";





export interface Workout{

    id: number;
    name: string;
    photo: string;
    sets: number;
    reps: number;
    weight: number;
    date: string;
    
}

export function api(url: string, data?: any, method?: string, headers?: any) {
    const session = useSession()
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

export function getEasyWorkouts(): Promise<DataListEnvelope<Workout>> {

    return api('easyWorkouts')

}

export function getintermediateWorkouts(): Promise<DataListEnvelope<Workout>> {

    return api('intermediateWorkouts')
}

export function getAdvancedWorkouts(): Promise<DataListEnvelope<Workout>> {

    return api('advancedWorkouts')
}

export const easyWorkouts: Workout[][] = [
    [
        {
            "id": 1,
            "name": "Bench Press",
            "photo": "https://w7.pngwing.com/pngs/514/837/png-transparent-bench-press-exercise-barbell-strength-training-barbell-angle-physical-fitness-sports-equipment.png",
            "sets": 4,
            "reps": 10,
            "weight": 100,
            "date": "2020-03-03"
        },
    {
            "id": 1, 
            "name": "Skull Crushers",
            "photo": "https://www.infofitness.nl/wp-content/uploads/2020/12/laying-unilateral-dumbbell-skullcrusher-png.png",
            "sets": 4,
            "reps": 10,
            "weight": 30,
            "date": "2020-03-03"
    },
    {
            "id": 1,
            "name": "Flies",
            "photo": "https://weighteasyloss.com/wp-content/uploads/2018/06/b1233081775c48bfee0d354f3a70e9c7.jpg",
            "sets": 4,
            "reps": 12,
            "weight": 15,
            "date": "2020-03-03"
    },
    {
            "id": 1,
            "name": "Shoulder Press",
            "photo": "https://cdn-0.weighttraining.guide/wp-content/uploads/2017/08/behind-the-neck-barbell-overhead-press-resized.png",
            "sets": 4,
            "reps": 8,
            "weight": 75,
            "date": "2020-03-03"
    }
],
[
    {
            "id": 1,
            "name": "Lat Pulldown",
            "photo": "https://th.bing.com/th/id/R.9f69b5985d6663feedaaca8f6bfe9c72?rik=r1dmSta7aANzkw&riu=http%3a%2f%2fbodybuilding-wizard.com%2fwp-content%2fuploads%2f2018%2f07%2fmachine-lat-pulldown-exercise-guide-image.jpg&ehk=0z0gkP7h4fEDN8aTItPwV9jteLbUdtexjhK9WJc3yng%3d&risl=&pid=ImgRaw&r=0",
            "sets": 4,
            "reps": 10,
            "weight": 70,
            "date": "2020-03-03"
    },
    {
            "id": 1,
            "name": "Cable Rows",
            "photo": "https://static.strengthlevel.com/images/illustrations/seated-cable-row-1000x1000.jpg",
            "sets": 4,
            "reps": 12,
            "weight": 60,
            "date": "2020-03-03"
    },
    {
            "id": 1,
            "name": "Hammer Curls",
            "photo": "https://www.oldschoollabs.com/wp-content/uploads/2020/08/Cross-Body-Hammer-Curls.jpg",
            "sets": 5,
            "reps": 12,
            "weight": 15,
            "date": "2020-03-03"
    },
    {
            "id": 1,
            "name": "Barbell Curls",
            "photo": "https://th.bing.com/th/id/R.7c7f1cdce714ae12f008bcccb86d3c42?rik=bxYVpMF1Y787Tw&riu=http%3a%2f%2fignorelimits.com%2fwp-content%2fuploads%2f2017%2f06%2fbarbell-curl-grip-variations-1.jpg&ehk=hwJydkWgbfh8nHG08w8VZxzwfKbvnVONYKjs7vt5zw0%3d&risl=&pid=ImgRaw&r=0",
            "sets": 4,
            "reps": 8,
            "weight": 40,
            "date": "2020-03-03"
    }          
],
[
    {
            "id": 1,
            "name": "Squat",
            "photo": "https://th.bing.com/th/id/OIP.ojoGQOFaAqIveq-jNCxUfAHaEN?pid=ImgDet&rs=1",
            "sets": 3,
            "reps": 8,
            "weight": 95,
            "date": "2020-03-03"
    },
    {
            "id": 1,
            "name": "Lunges",
            "photo": "https://www.cdn.spotebi.com/wp-content/uploads/2016/09/front-and-back-lunges-exercise-illustration-spotebi.jpg",
            "sets": 3,
            "reps": 10,
            "weight": 0,
            "date": "2020-03-03"
    },
    {
            "id": 1,
            "name": "Calf Raises",
            "photo": "https://fitnessvolt.com/wp-content/uploads/2021/02/dumbbell-standing-calf-raise--1024x941.jpg",
            "sets": 4,
            "reps": 12,
            "weight": 35,
            "date": "2020-03-03"
    },
    {
            "id": 1,
            "name": "Jump Rope",
            "photo": "https://www.cdn.spotebi.com/wp-content/uploads/2014/10/jump-rope-exercise-illustration.jpg",
            "sets": 4,
            "reps": 50,
            "weight": 0,
            "date": "2020-03-03"
    }        
]

]

export const intermediateWorkouts: Workout[][] = [
    [
        {
            "id": 2,
            "name": "Bench Press",
            "photo": "https://w7.pngwing.com/pngs/514/837/png-transparent-bench-press-exercise-barbell-strength-training-barbell-angle-physical-fitness-sports-equipment.png",
            "sets": 4,
            "reps": 15,
            "weight": 120,
            "date": "2020-03-03"
        },
        {
            "id": 2, 
            "name": "Skull Crushers",
            "photo": "https://www.infofitness.nl/wp-content/uploads/2020/12/laying-unilateral-dumbbell-skullcrusher-png.png",
            "sets": 4,
            "reps": 10,
            "weight": 50,
            "date": "2020-03-03"
        },
        {
            "id": 2,
            "name": "Flies",
            "photo": "https://weighteasyloss.com/wp-content/uploads/2018/06/b1233081775c48bfee0d354f3a70e9c7.jpg",
            "sets": 4,
            "reps": 12,
            "weight": 30,
            "date": "2020-03-03"
        },
        {
            "id": 2,
            "name": "Shoulder Press",
            "photo": "https://cdn-0.weighttraining.guide/wp-content/uploads/2017/08/behind-the-neck-barbell-overhead-press-resized.png",
            "sets": 4,
            "reps": 12,
            "weight": 100,
            "date": "2020-03-03"
        }
    ],
    [
        {
            "id": 2,
            "name": "Lat Pulldown",
            "photo": "https://th.bing.com/th/id/R.9f69b5985d6663feedaaca8f6bfe9c72?rik=r1dmSta7aANzkw&riu=http%3a%2f%2fbodybuilding-wizard.com%2fwp-content%2fuploads%2f2018%2f07%2fmachine-lat-pulldown-exercise-guide-image.jpg&ehk=0z0gkP7h4fEDN8aTItPwV9jteLbUdtexjhK9WJc3yng%3d&risl=&pid=ImgRaw&r=0",
            "sets": 4,
            "reps": 12,
            "weight": 80,
            "date": "2020-03-03"
        },
        {
            "id": 2,
            "name": "Cable Rows ",
            "photo": "https://static.strengthlevel.com/images/illustrations/seated-cable-row-1000x1000.jpg",
            "sets": 4,
            "reps": 14,
            "weight": 75,
            "date": "2020-03-03"
        },
        {
            "id": 2,
            "name": "Hammer Curls",
            "photo": "https://www.oldschoollabs.com/wp-content/uploads/2020/08/Cross-Body-Hammer-Curls.jpg",
            "sets": 5,
            "reps": 14,
            "weight": 30,
            "date": "2020-03-03"
        },
        {
            "id": 2,
            "name": "Barbell Curls",
            "photo": "https://th.bing.com/th/id/R.7c7f1cdce714ae12f008bcccb86d3c42?rik=bxYVpMF1Y787Tw&riu=http%3a%2f%2fignorelimits.com%2fwp-content%2fuploads%2f2017%2f06%2fbarbell-curl-grip-variations-1.jpg&ehk=hwJydkWgbfh8nHG08w8VZxzwfKbvnVONYKjs7vt5zw0%3d&risl=&pid=ImgRaw&r=0",
            "sets": 4,
            "reps": 10,
            "weight": 50,
            "date": "2020-03-03"
        }          
    ],
    [
        {
            "id": 2,
            "name": "Squats",
            "photo": "https://th.bing.com/th/id/OIP.ojoGQOFaAqIveq-jNCxUfAHaEN?pid=ImgDet&rs=1",
            "sets": 3,
            "reps": 10,
            "weight": 100,
            "date": "2020-03-03"
        },
        {
            "id": 2,
            "name": "Lunges",
            "photo": "https://www.cdn.spotebi.com/wp-content/uploads/2016/09/front-and-back-lunges-exercise-illustration-spotebi.jpg",
            "sets": 4,
            "reps": 12,
            "weight": 0,
            "date": "2020-03-03"
        },
        {
            "id": 2,
            "name": "Deadlift",
            "photo": "https://i.pinimg.com/originals/a5/00/0c/a5000c66e063f7645e29cb248b043eeb.jpg",
            "sets": 3,
            "reps": 8,
            "weight": 135,
            "date": "2020-03-03"
        },
        {
            "id": 2,
            "name": "Jump Rope",
            "photo": "https://www.cdn.spotebi.com/wp-content/uploads/2014/10/jump-rope-exercise-illustration.jpg",
            "sets": 4,
            "reps": 75,
            "weight": 0,
            "date": "2020-03-03"
        }          
    ]

]

export const advancedWorkouts : Workout[][] = [
    [
        {
            "id": 3,
            "name": "Pushups",
            "photo": "https://th.bing.com/th/id/R.c486265e9af012050f7aabb2ca31cceb?rik=MmeBYK%2fQgSD78Q&riu=http%3a%2f%2f3.bp.blogspot.com%2f-a3eN3OstDOQ%2fUtmKVioqR8I%2fAAAAAAAAAEo%2fXBkm5jWdojU%2fs1600%2fPush-up%2b(1).png&ehk=UlTZu26Dkdw%2fkkZE%2f3u%2f77WC1TUVkxdeWXu4ZjUxgs4%3d&risl=&pid=ImgRaw&r=0",
            "sets": 5,
            "reps": 40,
            "weight": 0,
            "date": "2020-03-03"
        },
        {
            "id": 3, 
            "name": "Skull Crushers",
            "photo": "https://www.infofitness.nl/wp-content/uploads/2020/12/laying-unilateral-dumbbell-skullcrusher-png.png",
            "sets": 5,
            "reps": 15,
            "weight": 75,
            "date": "2020-03-03"
        },
        {
            "id": 3,
            "name": "Flies",
            "photo": "https://weighteasyloss.com/wp-content/uploads/2018/06/b1233081775c48bfee0d354f3a70e9c7.jpg",
            "sets": 5,
            "reps": 20,
            "weight": 45,
            "date": "2020-03-03"
        },
        {
            "id": 3,
            "name": "Shoulder Press",
            "photo": "https://cdn-0.weighttraining.guide/wp-content/uploads/2017/08/behind-the-neck-barbell-overhead-press-resized.png",
            "sets": 5,
            "reps": 15,
            "weight": 125,
            "date": "2020-03-03"
        },
        {
            "id": 3,
            "name": "Dips",
            "photo": "https://cdn.shopify.com/s/files/1/1633/7705/files/upper_body_push_workout_480x480.jpg?v=1655492671",
            "sets": 5,
            "reps": 20,
            "weight": 0,
            "date":"2020-03-03"
        }
    ],
    [
        {
            "id": 3,
            "name": "Lat Pulldown",
            "photo": "https://th.bing.com/th/id/R.9f69b5985d6663feedaaca8f6bfe9c72?rik=r1dmSta7aANzkw&riu=http%3a%2f%2fbodybuilding-wizard.com%2fwp-content%2fuploads%2f2018%2f07%2fmachine-lat-pulldown-exercise-guide-image.jpg&ehk=0z0gkP7h4fEDN8aTItPwV9jteLbUdtexjhK9WJc3yng%3d&risl=&pid=ImgRaw&r=0",
            "sets": 5,
            "reps": 20,
            "weight": 90,
            "date": "2020-03-03"
        },
        {
            "id": 3,
            "name": "Cable Rows ",
            "photo": "https://static.strengthlevel.com/images/illustrations/seated-cable-row-1000x1000.jpg",
            "sets": 5,
            "reps": 20,
            "weight": 80,
            "date": "2020-03-03"
        },
        {
            "id": 3,
            "name": "Pullups",
            "photo": "https://th.bing.com/th/id/OIP.O3MMYAQ45rk0ewpuaepUWAHaFs?pid=ImgDet&rs=1",
            "sets": 5,
            "reps": 15,
            "weight": 0,
            "date": "2020-03-03"
        },
        {
            "id": 3,
            "name": "Barbell Curls",
            "photo": "https://th.bing.com/th/id/R.7c7f1cdce714ae12f008bcccb86d3c42?rik=bxYVpMF1Y787Tw&riu=http%3a%2f%2fignorelimits.com%2fwp-content%2fuploads%2f2017%2f06%2fbarbell-curl-grip-variations-1.jpg&ehk=hwJydkWgbfh8nHG08w8VZxzwfKbvnVONYKjs7vt5zw0%3d&risl=&pid=ImgRaw&r=0",
            "sets": 5,
            "reps": 15,
            "weight": 75,
            "date": "2020-03-03"
        },
        {
            "id": 3,
            "name": "Muscle Ups",
            "photo": "https://workoutlabs.com/wp-content/uploads/watermarked/Muscle_Up1.png",
            "sets": 3,
            "reps": 5,
            "weight": 0,
            "date":"2020-03-03"
        }

    ],
    [
        {
            "id": 3,
            "name": "Squats",
            "photo": "https://th.bing.com/th/id/OIP.ojoGQOFaAqIveq-jNCxUfAHaEN?pid=ImgDet&rs=1",
            "sets": 4,
            "reps": 15,
            "weight": 150,
            "date": "2020-03-03"
        },
        {
            "id": 3,
            "name": "Leg Press",
            "photo": "https://fitnessstars.weebly.com/uploads/5/8/8/7/58879495/8042364_orig.png",
            "sets": 5,
            "reps": 15,
            "weight": 100,
            "date": "2020-03-03"
        },
        {
            "id": 3,
            "name": "Deadlift",
            "photo": "https://i.pinimg.com/originals/a5/00/0c/a5000c66e063f7645e29cb248b043eeb.jpg",
            "sets": 3,
            "reps": 10,
            "weight": 150,
            "date": "2020-03-03"
        },
        {
            "id": 3,
            "name": "Jump Rope",
            "photo": "https://www.cdn.spotebi.com/wp-content/uploads/2014/10/jump-rope-exercise-illustration.jpg",
            "sets": 4,
            "reps": 125,
            "weight": 0,
            "date": "2020-03-03"
        },        
        {
            "id": 3,
            "name": "Leg Curls",
            "photo": "https://th.bing.com/th/id/R.da564407f9362a366a8b9061c1a6ce2a?rik=5e6roxSqXpg9%2fw&pid=ImgRaw&r=0",
            "sets": 4,
            "reps": 15,
            "weight": 75,
            "date":"2020-03-03"
        } 
    ]

]

        




