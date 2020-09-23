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
router.delete('/items/:id', async(req, res, next) => {
  try {
    await Item.destroy({
      where: {
        id: req.params.id
      }
    });
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
})


//router.put /items/:itemid
router.put('/items/:id', async(req, res, next) => {
  try {
    const item = await Item.findByPk(req.params.id);
    await item.update(req.body);
    res.send(item);
  } catch (error) {
    next(error);
  }
})

//router.post /items
router.post('/items', async(req, res, next) => {
  try {
    const item = await Item.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
