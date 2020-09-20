const router = require("express").Router();
const { Item }  = require('../db');

//api routes

//router.get /items/:itemid
router.get('/items/:itemid', async(req, res, next) => {
  try {
    const item = await Item.findByPk(req.params.itemid);
    res.send(item);
  } catch (error) {
    next(err);
  }
})

//router.get /items
router.get('/items', async(req, res, next) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
})


//router.delete /items/:itemid

//router.put /items/:itemid

//router.post /items

module.exports = router;
