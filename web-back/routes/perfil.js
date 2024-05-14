const bcrypt = require("bcrypt");
const express = require("express");
const { jsonResponse } = require("../lib/jsonResponse");
const log = require("../lib/Trace");
const router = express.Router();
const User = require("../schema/user");
const getTokenFromHeader = require("../auth/getTokenFromHeader");



router.get("/",  (req, res, )=> {
  
  log.info("user", req.user);

  res.json(jsonResponse(200, req.user));

}); 

router.get("/users",  (req, res, )=> {
   User.find()
  .then(user=>{
    res.json(user)
  })
  .catch(err =>{
    console.log('error')
  })

}); 

router.get('/:id', async (request, response) => {
  const user = await User.findById(request.params.id)
  response.json(user.toJSON())
})




router.put("/:id/:newname/:newusername/:newpassword", async (req, res, next )=> {
  

try {
  const { username } = req.body;

  const user = new User();
  const userExists = await user.usernameExists(username);

  if (userExists) {
    
    return res.status(409).json(
      jsonResponse(409, {
        miss: "username already exists",
      }))

  }else{
    const refreshToken = getTokenFromHeader(req.headers)
  
    if(refreshToken){
      const id = req.params.id
  const newname = req.params.newname
  const newusername = req.params.newusername
  let newpassword = req.params.newpassword
    
          bcrypt.hash(newpassword, 10, (err, hash) => {
            if (err) {
              next(err);
            } else {
              newpassword = hash;
            
              User.findByIdAndUpdate({_id: id}, {$set: {name: newname, username: newusername , password: newpassword }})
              .then(doc =>{})
              next();
            }
           
          });
      } 
  

    
  }

 
} catch (error) {
  console.log(error)
  res.status(400).json({response: 'fail'})

}

});


router.delete("/delete/:id", async (req, res, )=> {

  try {
    const refreshToken = getTokenFromHeader(req.headers)
    const id = req.params.id

    if(refreshToken){
      User.findByIdAndDelete({_id: id})
.then(doc =>{
  res.json({response: 'success'})
})
      }

} catch (error) {
    console.log(error)
  
}


})



module.exports = router;