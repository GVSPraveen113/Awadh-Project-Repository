const express = require('express');
const router = express.Router();
const {isLoggedIn} = require('../middleware');
const Bid = require('../models/bid');


// Display all the products
router.get('/bids', async(req, res) => {
    
    try {
        const bids=await Bid.find({});
        res.render('bids/index',{bids}); 
    } 
    catch (e) {
        console.log("Something Went Wrong");
        req.flash('error', 'Cannot Find the Bids');
        res.render('error');
    }
})


// Get the form for new product
router.get('/bids/new',isLoggedIn ,(req, res) => {
    res.render('bids/new');
})

router.get('/bids/demo',isLoggedIn ,(req, res) => {
    res.render('bids/bid_demo');
})


// Create New Product
router.post('/bids',isLoggedIn, async(req, res) => {

    try {
        const bid=await Bid.create(req.body.bid);
        console.log(bid);
        req.flash('success', 'Bid Created Successfully');
        res.redirect('/bids');

    }
    catch (e) {
        console.log(e.message);
        req.flash('error', 'Cannot Create Bid,Something is Wrong');
        res.render('error');
    } 
});

router.get('/bids/:id', async(req, res) => {
    try {
        const bid=await Bid.findById(req.params.id);
        res.render('bids/show',{bid});
    }
    catch (e) {
        console.log(e.message);
        req.flash('error', 'Cannot find this Product');
        res.redirect('/error');
    }
})




router.get('/error', (req, res) => {
    res.status(404).render('error');
})


module.exports = router;