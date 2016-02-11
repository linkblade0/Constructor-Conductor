//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here
var Person = function(theName, theAge) {
  this.name = theName;
  this.age = theAge;
}

//Now create three instances of Person with data you make up

  //code here
var mike = new Person('Mike', 25);
var joey = new Person('Joey', 25);
var jesse = new Person('Jesse', 23);

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here
Person.prototype.sayName = function(){
  alert(this.name);
}
