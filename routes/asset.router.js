const router = require('express').Router();

// Require controllers
const assetMaster = require('../controllers/asset/asset.master');

//require sample data
const data = require('../temp/data');

// router.get('/asset', (req,res) => {
//     res.render('asset');
// });

// router.get('/asset/add', (req,res) => {
//     res.render('asset-add');
// });

router.get('/asset/master', (req,res) => {
    res.render('asset-master');
});

router.get('/asset/master/data', assetMaster.get);

router.post('/asset/master/data', assetMaster.add);



module.exports = router;