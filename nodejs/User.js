export default class User{

	constructor(name, id, dept){
		this.name 	= name;
		this.id		= id;
		this.dept	= dept;
	}

	getName(){
		return this.name;
	}
}

export const id =10;