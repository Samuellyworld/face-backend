const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs'); 
const cors = require('cors');
const knex = require('knex');
const Clarifai = require('clarifai');

const signin = require('./controllers/signin.js');
const register = require('./controllers/register.js');
const profile = require('./controllers/profile.js');
const image = require('./controllers/image.js');

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'aspirin',
    database : 'smart-brain'
  }
});


const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req,res) => {
	res.json(database.users);
});

app.post('/signin', (req,res) => {signin.handleSignin(req,res, bcrypt, db)});

app.post('/register', (req, res) => {register.handleRegister(req, res, bcrypt, db)});

app.get('/profile/:id', (req,res) => {profile.handleProfile(req,res,db)});

app.put('/image', (req,res) => {image.handleImage(req,res,db)});



app.listen(3001, ()=> {
	console.log('app is working on port 3001');
});