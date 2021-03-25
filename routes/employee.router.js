const router = require('express').Router();

const AddEmployee = require('../controllers/employee/employee.add');


router.get('/employee', (req,res) => {
    res.render('employee');
});


router.get('/employee/add', (req,res) => {
    res.render('employee-add');
});

router.post('/employee/add', AddEmployee);

router.get('/employee/view', (req,res) => {
    res.render('employee-view');
});

module.exports = router;