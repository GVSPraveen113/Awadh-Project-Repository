const mongoose = require('mongoose');
const Product = require('./models/product');


const products = [
    {
        name: "Wheat",
        img: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2hlYXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 100,
        desc:"Wheat is a grass widely cultivated for its seed, a cereal grain which is a worldwide staple food. The many species of wheat together make up the genus Triticum; the most widely grown is common wheat (T. aestivum). ... Botanically, the wheat kernel is a type of fruit called a caryopsis."
    },
    {
        name: "Rice",
        img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmljZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 90,
        desc:"Wheat is a grass widely cultivated for its seed, a cereal grain which is a worldwide staple food. The many species of wheat together make up the genus Triticum; the most widely grown is common wheat (T. aestivum). ... Botanically, the wheat kernel is a type of fruit called a caryopsis."
    },
    {
        name: "Barley",
        img: "https://images.unsplash.com/photo-1530464684439-723262c0d16e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFybGV5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 20,
        desc:"Wheat is a grass widely cultivated for its seed, a cereal grain which is a worldwide staple food. The many species of wheat together make up the genus Triticum; the most widely grown is common wheat (T. aestivum). ... Botanically, the wheat kernel is a type of fruit called a caryopsis."
    },
    {
        name: "Cauli Flower",
        img: "https://images.unsplash.com/photo-1510627498534-cf7e9002facc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHZlZ2V0YWJsZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 35,
        desc:"Wheat is a grass widely cultivated for its seed, a cereal grain which is a worldwide staple food. The many species of wheat together make up the genus Triticum; the most widely grown is common wheat (T. aestivum). ... Botanically, the wheat kernel is a type of fruit called a caryopsis."
    },
    {
        name: "Tomato", 
        img: "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHZlZ2V0YWJsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        price: 50,
        desc:"Wheat is a grass widely cultivated for its seed, a cereal grain which is a worldwide staple food. The many species of wheat together make up the genus Triticum; the most widely grown is common wheat (T. aestivum). ... Botanically, the wheat kernel is a type of fruit called a caryopsis."
    },
    {
        name: "Carrot",
        img: "https://images.unsplash.com/photo-1522184216316-3c25379f9760?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHZlZ2V0YWJsZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 125,
        desc:"Wheat is a grass widely cultivated for its seed, a cereal grain which is a worldwide staple food. The many species of wheat together make up the genus Triticum; the most widely grown is common wheat (T. aestivum). ... Botanically, the wheat kernel is a type of fruit called a caryopsis."
    },
    {
        name: "Potato",
        img: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHZlZ2V0YWJsZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 45,
        desc:"Wheat is a grass widely cultivated for its seed, a cereal grain which is a worldwide staple food. The many species of wheat together make up the genus Triticum; the most widely grown is common wheat (T. aestivum). ... Botanically, the wheat kernel is a type of fruit called a caryopsis."
    },

]

const seedDB = async ()=>{
    
    await Product.insertMany(products);
    console.log("DB Seeded");
}

module.exports = seedDB;