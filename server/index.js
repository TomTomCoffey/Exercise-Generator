require('dotenv').config()
const express = require('express')
const path = require('path');
const users = require('./controllers/users')
const easyWorkouts = require('./controllers/easyWorkouts')
const intermediateWorkouts = require('./controllers/intermediateWorkouts')
const advancedWorkouts = require('./controllers/advancedWorkouts')
//const workouts = require('./controllers/workouts')
const app = express()
const mongo = require('./models/mongo.js')

const hostname = '127.0.0.1';
const port = process.env.PORT || 3070;

mongo.connect();
// Middleware
app
    .use(express.json())
    .use(express.static(path.join(__dirname, '../client/dist')))
    .use((req, res, next) => {
        console.log(`${req.method} ${req.url}`);
        next();
    }) 


    .use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS')
        next()
    })



// Actions
app
    .get('/api/v1/', (req, res) => {
        res.send('Hello World! From Express')
    })
    .use('/api/v1/users', users)
    //.use('api/v1/workouts', workouts)
    .use('/api/v1/easyWorkouts', easyWorkouts)
    .use('/api/v1/intermediateWorkouts', intermediateWorkouts)
    .use('/api/v1/advancedWorkouts', advancedWorkouts)
   // .use('/api/v1/jokes', jokes)

// Catch all
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
})


// Error handling
app
    .use((err, req, res, next) => {
        console.error(err);
        const msg = {
            status: err.code || 500,
            error: err.message || 'Internal Server Error',
            isSuccess: false
        }
        res.status(msg.status).json(msg)
    })


console.log('1: About to start server')

app.listen(port, () => 
  console.log(`2: Server running at http://${hostname}:${port}/`)
);


console.log('3: Asked server to start')
