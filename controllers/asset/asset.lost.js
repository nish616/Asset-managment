const Asset = require('../../models/asset');
const History = require('../../models/history');


async function lostAsset(req,res){
    try{

        const {assetId,cost,reason,note} = req.body;
        //cost = purchase cost of the asset
        
        //constants
        const type = "Lost";
        const details = {
            reason : reason,
            note : note
        };
        const status = "Lost";
       

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
            cost : cost,
            details : details
        });

        //newHistory.save();

        res.json({"message" : "Asset lost"});

    }catch(err){
        throw err;
    }
    
 
}

module.exports = lostAsset;