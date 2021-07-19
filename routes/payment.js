const express = require('express');
const router = express.Router();
const uniqid = require('uniqid');
const { isLoggedIn } = require('../middleware');
const User = require('../models/user');
const Order = require('../models/order');
const Product = require('../models/product');

router.post('/payment_gateway/pay',isLoggedIn, async (req, res) => {
    req.body.txnid = uniqid.process()
    req.body.email = req.user.email;
    req.body.firstname = req.user.username;
    try {
        const order= {
            txnid: req.body.txnid,
            amount: req.body.amount,
            address: req.body.address,
            orderedProducts:req.user.cart
        }
    
        const placedOrder=await Order.create(order);
    
        req.user.orders.push(placedOrder);
    
        await req.user.save();
    
        req.flash('success','Your Order has been Successfully Placed.Thanks for Shopping with us!');
        /*res.send("Successfully Placed");*/
        res.redirect(`/user/${req.user._id}/me`);
    }
    catch (e) {
        console.log(e.message);
        req.flash('error', 'Cannot Place the Order at this moment.Please try again later!');
        res.render('error');
    } 
});

router.post('/payment_gateway/paydirect',isLoggedIn, async (req, res) => {
    req.body.txnid = uniqid.process()
    req.body.email = req.user.email;
    req.body.firstname = req.user.username;
    try {
        const order= {
            txnid: req.body.txnid,
            amount: req.body.amount
        }
    
        const placedOrder=await Order.create(order);
    
        req.user.orders.push(placedOrder);
    
        await req.user.save();
    
        req.flash('success','Your Order has been Successfully Placed.Thanks for Shopping with us!');
        /*res.send("Successfully Placed");*/
        res.redirect(`/user/${req.user._id}/me`);
    }
    catch (e) {
        console.log(e.message);
        req.flash('error', 'Cannot Place the Order at this moment.Please try again later!');
        res.render('error');
    } 
});

module.exports = router;

