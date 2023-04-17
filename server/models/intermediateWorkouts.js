const data = require('../data/intermediateWorkouts.json')

function getIntermediateWorkouts() {
    return data.workouts;
}


module.exports = {
    getIntermediateWorkouts,
    

};