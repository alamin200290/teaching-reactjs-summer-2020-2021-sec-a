exports class Student{

	constructor(name, email, dept){
		this.name = name;
		this.email = email;
		this.dept = dept;
	}

	getName(){
		return this.name;
	}
}