const data = require('../data/easyWorkouts.json')

function getEasyWorkouts() {
    return data.easyWorkouts;
}

function getEasyExercises() {
    return data.workouts;
}


module.exports = {
    getEasyWorkouts,
    getEasyExercises

};