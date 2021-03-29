const router = require('express').Router();

// Require controllers
const assetMaster = require('../controllers/asset/asset.master');
const issueAsset = require('../controllers/asset/asset.issue');
const returnAsset = require('../controllers/asset/asset.return');
const scrapAsset = require('../controllers/asset/asset.scrap');
const repairAsset = require('../controllers/asset/asset.repair');
const lostAsset = require('../controllers/asset/asset.lost');

//require sample data
//const data = require('../temp/data');

// router.get('/asset', (req,res) => {
//     res.render('asset');
// });

// router.get('/asset/add', (req,res) => {
//     res.render('asset-add');
// });


//Asset Master
router.get('/asset/master', (req,res) => {
    res.render('asset-master');
});

router.get('/asset/master/data', assetMaster.get);

router.post('/asset/master/data', assetMaster.add);

router.put('/asset/master/data', assetMaster.update);

router.delete('/asset/master/data', assetMaster.destroy);


//Issue Asset
router.get('/asset/issue', (req,res) => {
    res.render('asset-issue');
});

router.post('/asset/issue', issueAsset);


//Return Asset
router.get('/asset/return', (req,res) => {
    res.render();
});

router.post('/asset/return', returnAsset);

//Scrap Asset
router.get('/asset/scrap', (req,res) => {
    res.render();
});

router.post('/asset/scrap',scrapAsset);

//Repair Asset
router.get('/asset/repair', (req,res) => {
    res.render();
});

router.post('/asset/repair',repairAsset);

//Lost Asset
router.get('/asset/lost', (req,res) => {
    res.render();
});

router.post('/asset/lost',lostAsset);



module.exports = router;