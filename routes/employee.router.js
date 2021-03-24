const router = require('express').Router();

router.get('/emp', (req,res) => {

    res.render('index',{name : 'employee'});
});


router.post('/emp', (req,res) => {
    const {id,name,age,type,status} = req.body;
});

module.exports = router;