/*const path 	= require('path');
const http 	= require('http');
const fs 	= require('fs');*/

import fs from 'fs';
import http from 'http';
import User from './User.js';
import Index from './index.js';
import Button from './Button.js';

const user1 = new User('alamin', '1234', 'CS');

/*const mypath = "C://sajkask///ada\asdas\\\asdasda\asd/asd/a.js";
console.log(path.dirname(mypath));
console.log(path.extname(mypath));
console.log(path.normalize(mypath));*/

const server = http.createServer((req, res)=>{
	//console.log(req.url);
	//console.log(req.method);

	console.log(req.url);

	if(req.url == '/style.css'){
		fs.createReadStream('style.css').pipe(res);
	}

	if(req.url == '/home'){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(Index('home', Button('create', ()=>{
			return 'alert("it works")';
		})));
		res.end();
	}

});

server.listen(3000);
console.log('Http server started at 3000...');

