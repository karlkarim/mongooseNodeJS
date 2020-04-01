const express = require('express');
const mongoose = require('mongoose');
const app = express();


mongoose.connect('mongodb://localhost:27017/fruitDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});



const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Error: no name specified"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);



// const fruit = new Fruit ({
//     name: "Apple",
//     rating: 11,
//     review: "Sweet and crunchy"
// });

// fruit.save();

const orange = new Fruit({
    name: "orange",
    rating: 8
});

orange.save();

// Fruit.find(function(error, fruits){
//     if(error){
//         console.log(error);
//     } else {
//         console.log(fruits)
//     }
// });

Fruit.deleteMany({name: "orange"}, function(error){
    if(error){
        console.log(error);
    } else {
        console.log("Item deleted")
    }
});

Fruit.find(function(error, fruits){
    if(error){
        console.log(error);
    } else {
        fruits.forEach(fruit => {
            console.log(fruit.name);
        })
    }
});

// Fruit.update({_id: "5e846b200df0812fcc15fe1b"}, {review: "Nice fruit"},
// function(error){
//     if(error){
//         console.log(error);
//     } else {
//         console.log("Record successfully updated");
//     }
// });



// const banana = new Fruit({
//     name: "Banana",
//     rating: 5,
//     review: "Soft texture"
// });

// const lemon = new Fruit({
//     name: "Lemon",
//     rating: 7,
//     review: "Sour..."
// });

// Fruit.insertMany([banana, lemon], (error) => {
//     if(error){
//         console.log(err);
//     }else{
//         console.log("Fruits successfully added to database");
//     }
// })




const personSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Error: need a name"]
    },
    lastName: {
        type: String,
        required: [true, "Error: need a lastname"]
    },
    age: Number    
});

const Person = mongoose.model("Person", personSchema);

Person.find(function(error, persons){
    if(error){
        console.log(error);
    } else {
        persons.forEach(person => {
            console.log(person.firstName, person.age);
        })
    }
});

Person.update({_id: "5e83586302aea32208f8398e" }, {age: 30},
function(error){
    if(error){
        console.log(error);
    }else {
        console.log("Age updated");
    }
})



// const person = new Person({
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 29
// });

//  const person2 = new Person({
//      firstName: 'Mike',
//     lastName: 'Some',
//      age: 32
//  });

//  const person3 = new Person({
//      firstName: 'Leo',
//     lastName: 'Dog',
//      age: 5
//  });



// Person.insertMany([person2, person3], (error) => {
//     if(error){
//         console.log(err);
//     }else{
//         console.log("Persons are successfully added to database");
//     }
// })

// person.save();






app.listen(3000, () => {
    console.log("Server is running on Port 3000");
});