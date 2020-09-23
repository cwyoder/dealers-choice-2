const { STRING } = require('sequelize');
const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/shoppinglist');

//models

const Item = db.define('item', {
  name: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  price: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  },
  description: {
    type: Sequelize.TEXT
  }
});

const syncAndSeed = async()=> {
  await db.sync({force: true });
  const [allItems] = await Promise.all([
    Item.create({name: 'Playstation 5', price: 499, description: 'A new gaming machine. Gonna be sweet.'}),
    Item.create({name: 'Donuts', price: 5, description: 'Apple Cider donuts. Autumn has arrived.'}),
    Item.create({name: 'Broom', price: 12, description: 'For sweeping up donut crumbs.'})
  ]);
}

module.exports = {
  db,
  Item,
  syncAndSeed
}
