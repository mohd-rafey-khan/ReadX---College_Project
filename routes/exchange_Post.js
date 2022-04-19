const router = require('express').Router();
const isAuthenticated = require('./isAuthenticated');
const Post = require('../models/ExchangePost');



router.get("/all",isAuthenticated, async (req,res)=>{
    // fetch exchange post 
    const allExchangePost =  await Post.find();
    res.send(allExchangePost); 
});

router.get("/:postID/", isAuthenticated, async (req,res)=>{
    const ExchangePostById = await Post.findById(req.params.postID);
    res.send(ExchangePostById);
});

router.get("/", isAuthenticated, async (req,res)=>{
    const postByLgLt = await Post.find({location:{ $elemMatch : { latitude: req.query.latitude, longitude: req.query.longitude } }});
    res.send(postByLgLt);
});



module.exports = router;