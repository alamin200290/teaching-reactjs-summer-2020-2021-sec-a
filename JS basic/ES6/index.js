"use strict"

const students = ['Alamin', 'Abir', 'Rakib', 'Rabbi'];
const numbers = [1, 4, 6, 8];

/*const newarray = students.filter(function(std){

	return std[0] == 'A';	
});*/

// /const newarray = students.filter(std=>std[0] == 'R');

/*const newarray = students.join('-');
console.log(newarray);*/

/*const newarray = [...students, '|', ...numbers];
console.log(newarray);*/

/*const student = { id: 1, name: 'alamin', email: 'email@aiub.edu'}
const {id, name:myname, email:myemail} = student;
console.log(myemail);*/


/*setTimeout(function(){
	console.log('after 5s ...');
}, 5000);

setTimeout(function(){
	console.log('after 3s ...');
}, 3000);

setTimeout(function(){
	console.log('after 2s ...');
}, 2000);

setTimeout(function(){
	console.log('after 1s ...');
}, 1000);*/


/*const p = new Promise((resolve, reject)=>{
	let sum = 10;

	if(sum == 10){
		setTimeout(()=>{
			resolve('true');			
		}, 2000);

	}else{
		reject('false');
	}
});


p.then(msg=>{
	console.log(msg);
}).catch(error=>{
	console.log(error);
});
console.log('test');*/


/*function sum(a, b){

	return new Promise((resolve, reject)=>{
		if(a !== 0 && b !== 0){
			setTimeout(()=>{
				let sum = a+b;
				resolve(sum);
			}, 5000);
		}else{
			reject(0);
		}
	});
}*/

/*sum(4,8)
.then(msg=>{
	console.log(msg);
})
.catch(error=>{
	console.log(error)
});*/


/*
async function mytask (a, b){

	let total = await sum(a,b);
	return total;
}

const abc = mytask(0,40).then(msg=>{
	console.log(msg);
}).catch(error=>{
	console.log(error);
});
*/

import {student} from './student';

const s1 = new Student('alamin', 'alamin@aiub.edu', 'CSE');
console.log(s1.getName());