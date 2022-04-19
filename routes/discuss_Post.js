const router = require('express').Router();
const isAuthenticated = require('./isAuthenticated');
const discussPost = require('../models/DiscussPost');


router.get("/all", async (req,res)=>{
    const alldiscussPost = await discussPost.find();
    res.send(alldiscussPost);
});

// new addon

router.post("/all", async (req,res)=>{
    const updateLike = await discussPost.updateOne({_id:req.body.id},{
        $inc:{
            likes:1
        }
    });
    res.send();
});

// 


router.get("/:PostID", async (req,res)=>{
    const discussPostByID = await discussPost.findById(req.params.PostID);
    res.send(discussPostByID);
});


module.exports = router;