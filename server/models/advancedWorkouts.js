const data = require('../data/advancedWorkouts.json')

function getAdvancedWorkouts() {
    return data.workouts;
}


module.exports = {
    getAdvancedWorkouts,
    
};