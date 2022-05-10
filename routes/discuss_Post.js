const router = require('express').Router();
const isAuthenticated = require('./isAuthenticated');
const discussPost = require('../models/DiscussPost');
const mongoose = require('mongoose');


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

router.post("/commented",  async (req,res)=>{
    await discussPost.updateOne({_id:req.body.id},{
        $push:{
            comments :{
                _id: new mongoose.Types.ObjectId().toHexString(),
                user_posted:req.body.user_name,
                body:req.body.comment_body
            }
        }
    })
    res.send("ok");
});



module.exports = router;