"use strict"


//a =10;
//var c=20;

//let b =10;
//const abc= 12;


/*let student =	[
					[12,3,5,6,7],
					[222,232,12312,334,55],
					[12,3,5,6,7]
				];*/

//console.log(student[0]);


/*function abc(a, b){
	return a+b;
}

console.log(abc(4,5));*/

/*let abc = function(a, b){
	return a+b;
}

console.log(abc(4,5));*/

let abc = (a, b)=> {
	return a+b;
}

//console.log(abc(4,5));

//const f1 = ()=>'this is function 1';

/*const f2 = (f1)=>{
	return f1();
}
console.log(f2(f1));*/

/*const student = {
		id: 1,
		name: 'alamin',
		dept: 'SE',
		getName: function (){
			return this.name;	
		},
		getObj: function(){
			return {
				version: '1.0',
				getVersion: function(){
					return this.version;
				}
			}
		}
};

const student = function(){
	return {
		id: 1,
		name: 'alamin',
		dept: 'SE'
	}
}

const s1 = student();
const s2 = student();


//console.log(student.getName());
console.log(student['getObj']()['getVersion']());
console.log(student.getObj().getVersion());*/

const s1 = require('./student.js');
console.log(s1.getName());

