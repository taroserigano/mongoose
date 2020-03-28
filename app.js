//jshint esversion: 6

const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true});

const fruitSchema = new mongoose.Schema ({
name: String,
rating: {
  type:Number,
  min: 1,
  max:10
},
review: String

});

const personSchema = new mongoose.Schema ({
name: String,
age: Number

});

const Fruit = mongoose.model("Fruit",fruitSchema);

const fruit = new Fruit({
name: "Apple",
rating: 7,
review: "Pretty solid as a fruit"

});
fruit.save();

const banana = new Fruit({
name: "Banana",
rating: 1,
review: "Weird texture"

});
banana.save();

const Person = mongoose.model("Person",personSchema);

const person = new Person ({
  name: "Taro",
  age: 33,
});

person.save();

Fruit.find(function(err, fruits){
  if(err){
    console.log(err);
  } else {
    console.log(fruits);
fruits.forEach(function(fruit){
  console.log(fruit.name);
});
  }
});
