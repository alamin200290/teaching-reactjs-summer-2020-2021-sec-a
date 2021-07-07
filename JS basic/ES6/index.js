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


/*const f2 = function(f1){
	let sum =10;
	setTimeout(()=>{
		f1(sum);
	}, 3000);
	console.log('this is f2 func ...');
}


f2(function(sum){
	console.log(`the value is: ${sum}`)
});*/


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
console.log('test');
*/

/*function sum(a, b){
	return new Promise((resolve, reject)=>{
		if(a !== 0 && b !== 0){
			setTimeout(()=>{
				let sum = a+b;
				resolve(sum);
			}, 3000);
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


/*async function mytask (a, b){
	let total = await sum(a,b);
	console.log(`Total value is: ${total}`);
}

mytask(10,20);
console.log('this is another task...')*/

/*function sum2(a, b){
	if(a !== 0 && b !== 0){
		setTimeout(()=>{
			let sum = a+b;
			return sum;
		}, 3000);
	}else{
		return 'error';
	}
}

async function mytask2(a,b){
	let total = await sum2(a,b);
	setTimeout(()=>{
		console.log(`total value is: ${total}`);
	}, 4000);
}

mytask2(30,40);
console.log('this is another task...');*/


import {Student, id} from './Student';
import Student from './Student';

const s1 = new Student('alamin', 'alamin@aiub.edu', 'CSE');
console.log(s1.getName());