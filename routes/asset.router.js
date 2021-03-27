const router = require('express').Router();

// Require controllers
const assetMaster = require('../controllers/asset/asset.master');

//require sample data
const data = require('../temp/data');

router.get('/asset', (req,res) => {
    res.render('asset');
});

router.get('/asset/add', (req,res) => {
    res.render('asset-add');
});

router.get('/asset/view', (req,res) => {
    res.render('asset-view');
});

router.get('/asset/data', (req,res) => {
    res.json(data);
});

router.post('/asset/view', assetMaster);



module.exports = router;