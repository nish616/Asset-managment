const Employee = require('../../models/employee');

module .exports = async (req,res) => {
    console.log(req.body);
    const {name,age,position,status} = req.body;

    try{
        const newEmp = await Employee.create({name : name, age: age, position : position, status : status});
        newEmp.save();
        res.render('employee-add', {sucess : true});
    }
    catch(e){
        res.render('employee-add',{error : true})
        throw e;
    }
}
