//object literal
var my_car = {   
	brand: "Prius",   
	wheels: 4
 }
//constructor function
function Car(brand, wheels){   
	this.brand = brand;   
	this.wheels = wheels; 
}
// object that takes function
var my_car = {   
	brand: "Prius",   
	friendly_brand: function(){     
		return "Your car's brand is " + this.brand;   
	} }

	//prototype: add an instance of object
	function Car(brand, wheels){   
		this.brand = brand;   
		this.wheels = wheels; 
	} 
	my_car = new Car("toyota", 4);

	Car.prototype.friendly_brand = function(){   
		return "This car's brand is " + this.brand; 
	}

//Prototypical Objects, new Obect the get an other object instances
function User(fname, lname, email){   
	this.fname = fname;   
	this.lname = lname;   
	this.email = email;   
	this.name = function(){return this.fname + " " + this.lname;} 
}
function Admin(){   
this.admin = true  
User.apply(this, arguments); // Call parent constructor with admin prototype context. }
Admin.prototype = new User();