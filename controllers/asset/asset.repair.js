const Asset = require('../../models/asset');
const History = require('../../models/history');


async function repairAsset(req,res){
    try{

        const {assetId,cost,reason,note,invoiceNumber,returnDate} = req.body;
        //cost = repair cost of asset

        //constants
        const type = "Repair";
        const details = {
            reason : reason,
            note : note,
            invoiceNumber : invoiceNumber,
            returnDate : returnDate
        };
        const status = "Maintenence";
       

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

        res.json({"message" : "Asset repair"});

    }catch(err){
        throw err;
    }
    
 
}

module.exports = repairAsset;