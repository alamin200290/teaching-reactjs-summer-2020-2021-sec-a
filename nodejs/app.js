/*const path 	= require('path');
const http 	= require('http');
const fs 	= require('fs');*/

import fs from 'fs';
import http from 'http';
import User from './User.js';
import Index from './index.js';
import Button from './Button.js';
import userlist from './userlist.js';

const user1 = new User('alamin', '1234', 'CS');

/*const mypath = "C://sajkask///ada\asdas\\\asdasda\asd/asd/a.js";
console.log(path.dirname(mypath));
console.log(path.extname(mypath));
console.log(path.normalize(mypath));*/

const users = [
	{name: "alamin", id:"1", dept:"SE"},
	{name: "alamin", id:"2", dept:"CSE"},
	{name: "alamin", id:"2", dept:"CSE"}
];


const server = http.createServer((req, res)=>{
	//console.log(req.url);
	//console.log(req.method);

	console.log(req.url);

	if(req.url == '/edit'){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write('Edit page');
		res.end();
	}

	if(req.url == '/delete'){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write('Delete page');
		res.end();
	}


	if(req.url == '/style.css'){
		fs.createReadStream('style.css').pipe(res);
	}

	if(req.url == '/home'){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(Index('Userlist', userlist(users)));
		res.end();
	}

});

server.listen(3000);
console.log('Http server started at 3000...');

