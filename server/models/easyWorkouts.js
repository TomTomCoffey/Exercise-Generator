const data = require('../data/easyWorkouts.json')

function getEasyWorkouts() {
    return data.easyWorkouts;
}


module.exports = {
    getEasyWorkouts,
    

};