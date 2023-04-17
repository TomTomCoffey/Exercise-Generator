const data = require('../data/IntermediateWorkouts.json')

function getIntermediateWorkouts() {
    return data.workouts;
}


module.exports = {
    getIntermediateWorkouts,
    

};