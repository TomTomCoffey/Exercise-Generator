const data = require('../data/easyWorkouts.json')

function getEasyWorkouts() {
    return data.workouts;
}


module.exports = {
    getEasyWorkouts,
    

};