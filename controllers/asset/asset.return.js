const Asset = require('../../models/asset');
const History = require('../../models/history');


async function returnAsset(req,res){
    try{

        const {assetId,reason,note} = req.body;
        
        //constants
        const type = "return";
        const details = {
            reason : reason,
            note : note
        };
        const status = "available";
       

        //update Asset status
        
        const [numberOfAffectedRows] = await Asset.update({
            status : status
        }, {
            where : {id : assetId}
        });

        console.log(numberOfAffectedRows);


        //create history

        const newHistory = await History.create({
            type : type,
            assetId : assetId,
            details : details
        });

        //newHistory.save();

        res.json({"message" : "Asset returned"});

    }catch(err){
        throw err;
    }
    
 
}

module.exports = returnAsset;