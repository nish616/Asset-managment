const Asset = require('../../models/asset');
const History = require('../../models/history');


async function scrapAsset(req,res){
    try{

        const {assetId,cost,reason,note} = req.body;
        //cost =  scrapped item cost
        
        //constants
        const type = "scrap";
        const details = {
            reason : reason,
            note : note
        };
        const status = "scrapped";
       

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

        res.json({"message" : "Asset scrapped"});

    }catch(err){
        throw err;
    }
    
 
}

module.exports = scrapAsset;