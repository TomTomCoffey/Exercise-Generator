const express = require('express');
const model = require('../models/intermediateWorkouts');
const router = express.Router();

router

.get('/', (req, res) => {
    const list = model.getIntermediateWorkouts();
    const data = { data: list, total: list.length, isSuccess: true };
    res.send(data)
})


module.exports = router;