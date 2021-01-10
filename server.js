const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs'); 
const cors = require('cors');
const knex = require('knex');
const Clarifai = require('clarifai');
const morgan = require('morgan');

const signin = require('./controllers/signin.js');
const register = require('./controllers/register.js');
const profile = require('./controllers/profile.js');
const image = require('./controllers/image.js');
const auth = require('./controllers/authorization.js');

const db = knex({
  client: 'pg',
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: {
    rejectUnauthorized: false
  }
  }
});


const app = express();
app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(cors());

app.get('/', (req,res) => {
	res.json('it is working');

});



app.post('/signin', signin.signInAuthentication(db,bcrypt));

app.post('/register', (req, res) => {register.handleRegister(req, res, bcrypt, db)});

app.get('/profile/:id', auth.requireAuth, (req,res) => {profile.handleProfile(req,res,db)});

app.post('/profile/:id', auth.requireAuth, (req,res) => {profile.handleProfileUpdate(req,res,db)});

app.post('/imageUrl', (req,res) =>{image.handleApicall(req,res)});

app.put('/image',  (req,res) => {image.handleImage(req,res,db)});




app.listen(process.env.PORT || 3001, ()=> {
	console.log(`app is working on port ${process.env.PORT}`);
});