const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  
  // res.send('Hey! It works!');
  // res.json(walker)
  res.render('hello', {
    name: "Walker",
    dog: req.query.dog,
    title: "I love food"
  })
});

router.get('/reverse/:name', (req, res) =>{
  res.send(req.params.name.split('').reverse().join(''))
})
module.exports = router;
