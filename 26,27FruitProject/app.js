const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitDB');


// basic Schema
// const fruitSchema = new mongoose.Schema({
//   name:String,
//   rating:Number,
//   review:String,
// });

// Schema with Data Validtion
const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true,"Please check the data entry , no name Specified!"]
  },
  rating:{
    type:Number,
    min:1,
    max:10
  },
  review:String,
});

// for creating data in mongoose

const Fruit = mongoose.model("Fruit" , fruitSchema);

const fruit = new Fruit ({
   name:" Apple",
   rating:7,
   review:"Pretty Solid as a Fruit"
});


// fruit.save();


const kiwi = new Fruit ({
   name:"Kiwi",
   rating:2,
   review:"Not too good"
});

const banana = new Fruit ({
   name:"Banana",
   rating:10,
   review:"Best Flavour"
});

const orange = new Fruit ({
   name:"orange",
   rating:6,
   review:"Too sour"
});




  Fruit.insertMany([kiwi,banana,orange], function(err){
    if (err) {
      console.log(err);
    } else {
      console.log("Successfully added");
    }
  });

// for Reading data in mongoose

// Fruit.find(function(err,fruits){
//   if (err) {
//     console.log(err);
//   } else {
//     // console.log(fruits);
//     fruits.forEach(function(fruit){
//       console.log(fruit.name);
//     });
// mongoose.connection.close();
//   }
// });


// for updating data in mongoose

// Fruit.updateOne(
//   {
//     id:"62c93d912c86695980096608"
//   },
//   {
//     name:"Peach"
//   },
//   function(err){
//     if (err) {
//       console.log(err);
//   } else {
//     console.log("Successfully Updated");
//   }
//
// })

// for deleting data in mongoose

// fruit.deleteOne({name:"Apple"},function(err){
//   if (err) {
//        console.log(err);
//    } else {
//      mongoose.connection.close();
//      console.log("Successfully deleted Banana");
//    }
// });
//
// fruit.deleteMany({name:"Apple"},function(err){
//   if (err) {
//        console.log(err);
//    } else {
//      mongoose.connection.close();
//      console.log("Successfully deleted All document");
//    }
// });


// challenge

const peopleSchema = new mongoose.Schema({
  name:String,
  age:Number,
  // created relationship in Schema for ftechuping of Data
  favfruits:fruitSchema
});


const People = mongoose.model("People" ,peopleSchema);

const Guava = new Fruit ({
   name:"Guava",
   rating:10,
   review:"Best Flavour"
});

const Apple = new Fruit ({
   name:" Apple",
   rating:7,
   review:"Pretty Solid as a Fruit"
});

Guava.save();
Apple.save();

// first data

const John = new People ({
   name:"John",
   age:27,
   // created relationship
   favfruits:Apple
});

John.save();

const people = new People ({
   name:"Amy",
   age:12,

   // created relationship
   favfruits:Guava

});


people.save();
