const path 	= require('path');
const http 	= require('http');
const fs 	= require('fs');

/*const mypath = "C://sajkask///ada\asdas\\\asdasda\asd/asd/a.js";
console.log(path.dirname(mypath));
console.log(path.extname(mypath));
console.log(path.normalize(mypath));*/

const server = http.createServer((req, res)=>{
	//console.log(req.url);
	//console.log(req.method);

	if(req.url == '/home'){
		console.log('home page');
		//res.write('<h2>This is home page</h2>');
		//res.end();
		fs.createReadStream('test.html').pipe(res);
	}
});


server.listen(3000);
console.log('Http server started at 3000...');

