const Asset = require('../../models/asset');
const History = require('../../models/history');


async function issueAsset(req,res){
    try{

        const {assetId,employeeId,employeeNumber,employeeName,reason,note} = req.body;
        
        //constants
        const type = "issue";
        const details = {
            reason : reason,
            note : note
        };
        const status = "in-use";
       

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
            employee : {
                id : employeeId,
                number : employeeNumber,
                name : employeeName
            },
            details : details
        });

        //newHistory.save();

        res.json({"message" : "Asset issued"});

    }catch(err){
        throw err;
    }
    
 
}

module.exports = issueAsset;