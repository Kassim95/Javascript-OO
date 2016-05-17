
//2
var Kassim = {
	name: "Kassim",
	age: 22,
	gender: "male"
}

for (var prop in Kassim) {
  console.log( prop + " = " + Kassim[prop]);
}

//3
function Multiplier() {
	var last = 0;
	this.a = 1
    this.multiply = function(num) {
        this.num = num
        this.a = num * this.a;
        last = this.a;
        return this.a
    }
    
    this.getCurrentValue = function() {
        return last;
    };
}
//4
function Album(){
    this.photo = [];
    this.add = function(name){
        this.photo.push(name);
    }
    this.list = function(){
        for(var i = 0; i<this.photo.length;i++){
            console.log (this.photo[i]);
        }
    }
    this.pick = function(num){
        console.log(this.photo[num-1]);
    }
}

function Photo(url, title){
    this.url = url;
    this.title = title
}
//5
function Person(){
    this.legs = 2;
    this.arms = 2;
    this.hair = true
}

function Teacher(){
    this.tie = true;
    Person.apply(this,arguments);
}

function Student(){
    this.bookbag = true;
    Person.apply(this,arguments);
}

function School(){
    this.teachers = [];
    this.students = [];
    this.addTeacher = function(teacher){
        this.teachers.push(teacher)
    }
    this.addStudent = function(student){
        this.students.push(student)
    }
}
