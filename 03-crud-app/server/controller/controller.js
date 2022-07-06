var Userdb=require('../model/model');

//create and save new user
exports.create=(req,res)=>{
//validate request
    if(!req.body){
        res.status(400).send({message:"content empty"});
        return;
    }
    //new user
    const user=new Userdb({
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        status:req.body.status
    })

    //save user in database
    user
        .save(user)
        .then(data=>{
            //res.send(data)
            res.redirect('/add-user');
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message || "Some crete eror occured operation"
            });
        });

}

//retrive and return all user/retrive and return a single userr

exports.find=(req,res)=>{

    if(req.query.id){
        const id=req.query.id;

        Userdb.findById(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message:"not found with user id"+id})
            }else{
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({message:"Error retriving user id"+id})
        })

    }else{
        Userdb.find()
        .then(user=>{
            res.send(user)
        })
        .catch(err=>{
            res.status(500).send({message:err.message || "Error Occurred while retriving user information"})
        })

    }

   

}

//update a new idetified user by user id
exports.update=(req,res)=>{
    if(!req.body){
        return res
        .status(400)
        .send({message:"Data to update caan not be empty"})
    }

    const id=req.params.id;
    Userdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
    .then(data=>{
        if(!data){
            res.status(404).send({message:`Cannot Update user with ${id}maybe user not found`})
        }else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({message:'error update information'})
    })
}

//Delete a user with specified user id in request

exports.delete=(req,res)=>{
    const id=req.params.id;

    Userdb.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message:`connot with delete id ${id}.maybe id is wrong`})
        }else{
            res.send({message:"user was delete successufully"})
        }
    })
    .catch(err=>{
        res.status(500).send({
            message:"Could not delete user with id="+id
        })
    })

}