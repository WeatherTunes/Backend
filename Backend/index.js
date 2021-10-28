//==============================================================
// Basic Config
//===============================================================
const express = require('express');

// instantiate express
const app = express();

const cors = require('cors');

// this sets your port to either whatever is inside of the .env OR 8000. .env will be used for when we deploy.
app.set('port', process.env.PORT || 8000);


//=============================================================
// Middleware (must always be before our routes)
// ========================================================
// `express.json` parses application/json request data and
//  adds it to the request object as request.body
app.use(express.json());
// `express.urlencoded` parses x-ww-form-urlencoded request data and
//  adds it to the request object as request.body
app.use(express.urlencoded({ extended: true }));

// cors enables other apps on URLs to make request.
app.use(cors());


//===============================================================
// ROUTES (always after our middleware)
//===============================================================
// Redirect
app.get('/', (req, res) => {
	res.redirect('/api/mood');
});
/* START CONTROLLERS HERE */ 
const moodController = require('./controllers/moodController')
app.use('/api/mood', moodController);

const usersController = require('./controllers/usersController')
app.use('/api/users', usersController)

app.use((err, req, res, next) => {
const statusCode = res.statusCode || 500;
const message = err.message || 'Internal Server Error'
res.status(statusCode).send(message)
});

/* END CONTROLLERS HERE */



//============================================================
// START SERVER (tells our port to listen)
// ============================================================
app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🤘🏻`);
});