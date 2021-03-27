const Asset = require('../../models/asset');

async function add (req,res){
    console.log(req.body);

    const {name,category,make,model,serialNumber,purchaseValue,status} = req.body;

    let adminId = 1;
    try{
        const newAsset = await Asset.create({
            name : name,
            category : category, 
            make : make, 
            model : model, 
            serialNumber : serialNumber, 
            purchaseValue : purchaseValue, 
            status : status, 
            adminId : adminId
        });

        newAsset.save();

        res.render('asset-master');
    }
    catch(err){
        res.render('asset-master');
        throw err;
    }
    
}

async function get (req,res) {
    try{
        const getAssets = await Asset.findAll();
        
        let currentValue = [];
        currentValue = getAssets.map((item) => {
            return item.dataValues;
        });

        let asset = {
            data : currentValue
        };

        console.log(asset);
        res.json(asset);
    }catch( err) {
        throw err;
    }
    
}

module.exports = {add,get};
