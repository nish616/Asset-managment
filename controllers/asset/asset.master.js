const Asset = require('../../models/asset');

module .exports = async (req,res) => {
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

        res.render('asset-add', {sucess : true});
    }
    catch(err){
        res.render('asset-add' , {error : true});
        throw err;
    }
    
}
