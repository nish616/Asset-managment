const Asset = require('../../models/asset');

async function add (req,res){
    console.log(req.body);

    const {name,category,make,model,serialNumber,purchaseValue,status,branch,notes} = req.body;

    let employeeId = 1;
    try{
        const newAsset = await Asset.create({
            name : name,
            category : category, 
            make : make, 
            model : model, 
            serialNumber : serialNumber, 
            purchaseValue : purchaseValue, 
            status : status,
            branch : branch, 
            employeeId : employeeId,
            notes : notes
        });

        

        //newAsset.save();

        res.render('asset-master');
    }
    catch(err){
        res.render('asset-master');
        throw err;
    }
    
}

async function get(req,res) {
    try{
        const getAssets = await Asset.findAll();
        
        console.log(getAssets);
        let currentValue = [];
        currentValue = getAssets.map((item) => {
            return item.dataValues;
        });

        let asset = {
            data : currentValue
        };

        //sconsole.log(asset);
        res.json(asset);
    }catch( err) {
        throw err;
    }
    
}

async function update(req,res) {
    try{
        
        let employeeId = 1;

        const {id,name,category,make,model,serialNumber,purchaseValue,status,branch,notes} = req.body;

        const [numberOfAffectedRows] = await Asset.update({
                name : name,
                category : category, 
                make : make, 
                model : model, 
                serialNumber : serialNumber, 
                purchaseValue : purchaseValue, 
                status : status,
                branch : branch, 
                employeeId : employeeId,
                notes : notes
    }, {
        where : {id : id}
    });

    console.log(numberOfAffectedRows);

    res.json({"message" : "Sucess"});

    }catch(err){
        throw err;
    }

}

async function destroy(req,res){

    try{
        const {id} = req.body;

        const numAffectedRows = await Asset.destroy({
            where: {
            id: id 
            }
        });
      
      console.log(numAffectedRows);
      res.json({"message" : "Sucess"});
    }catch(err){
        throw err;
    }
    

}

module.exports = {add,get,update,destroy};
