const router = require("express").Router()

router.get("/", (req, res)=>{
  res.json([
    {
        id: '1',
        title: "hola",
   
    }
  ])
})

module.exports = router