const express = require('express')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
const { Connection } = require('tedious')

// TODO - Sequelize instance
const db = new Sequelize(
    "database", "sa", "sa", {
        host: "localhost",
        dialect: "mssql",
        dialectOptions: {
            options: {
                trustedConnection: true,
                enableArithAbort: true,
                validateBulkLoadParameters: true
            }
        }
    })


let FoodItem = db.define('foodItem', {
    name: Sequelize.STRING,
    category: {
        type: Sequelize.STRING,
        validate: {
            len: [3, 10]
        },
        allowNull: false
    },
    calories: Sequelize.INTEGER
}, {
    timestamps: false
})

db.authenticate()
    .then(() => {
        console.log('Sequelize has connected successfully to the database!')
    })
    .catch(err => console.error('Unable to connect to the database: ' + err));

db.sync({ force: false, alter: false })
    .then(() => console.log('Sync completed!'))
    .catch(err => console.log('Error at creating: ' + err));


const app = express();
var router = express.Router();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", router);

router.use((req, res, next) => {
    next();
})

app.get('/create', async(req, res) => {
    try {
        await db.sync({ force: true })
        for (let i = 0; i < 10; i++) {
            let foodItem = new FoodItem({
                name: 'name ' + i,
                category: ['MEAT', 'DAIRY', 'VEGETABLE'][Math.floor(Math.random() * 3)],
                calories: 30 + i
            })
            await foodItem.save()
        }
        res.status(201).json({ message: 'created' })
    } catch (err) {
        console.warn(err.stack)
        res.status(500).json({ message: 'server error' })
    }
})

app.get('/food-items', async(req, res) => {
    try {
        let foodItems = await FoodItem.findAll()
        res.status(200).json(foodItems)
    } catch (err) {
        console.warn(err.stack)
        res.status(500).json({ message: 'server error' })
    }
})

app.post('/food-items', async(req, res) => {
    try {
        //test1
        if (!req.body.name && !req.body.category && !req.body.calories)
            return res.status(400).send({ message: 'body is missing' })
        //test2
        if (!req.body.name || !req.body.category || !req.body.category)
            return res.status(400).send({ message: 'malformed request' })
        //test3
        if (req.body.calories < 0)
            return res.status(400).send({ message: 'calories should be a positive number' })
         //test5
        if (!(req.body.category.length > 3 && req.body.category.length < 10))
            return res.status(400).send({ message: 'not a valid category' })
        //test4
        let fooditem = FoodItem.create({
            name: req.body.name,
            category: req.body.category,
            calories: req.body.calories
        });
        if (fooditem)
            return res.status(201).json({ message: 'created' });


    } catch (err) {
        res.status(500).json({ message: 'server error' })
    }
})

module.exports = app