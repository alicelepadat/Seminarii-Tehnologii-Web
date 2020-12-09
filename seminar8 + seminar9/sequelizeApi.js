import { app, router } from "./init/serverinit.js"
import { Authors, Books, Orders, Products } from "./sequelize/sequelize.js"
import seq from "sequelize"
import { request } from "express";

//backend functional ORM pana la vacanta=> proiect, doar prezentat

router.route("/sequelize/orders").get((request, response) => {
    Orders.findAll().then(result => response.json(result));
});


router.route("/sequelize/orders/:id").get((req, res) => {
    //Orders.findAll({where:{OrderId:req.params.id}}).then(result=>res.json(result));
    Orders.findByPk(req.params.id).then(result => res.json(result));

});

router.route("/sequelize/ordersWithSearch/search").get((req, res) => {
    Orders.findAll({
        where: {
            Title: {
                [seq.Op.like]: `%${req.query.Title}%`
            }
        }
    }).then(result => res.json(result));
});

router.route('/sequelize/orders').post((req, res) => {
    Orders.create({
        Title: req.body.Title,
        Quantity: req.body.Quantity,
        Message: req.body.Message,
        City: req.body.City
    }).then(result => res.json(result));
});

router.route('/sequelize/orders/:id').put((req, res) => {
    Orders.findByPk(req.params.id).then(record => {
        record.update({
            Title: req.body.Title,
            Quantity: req.body.Quantity,
            Message: req.body.Message,
            City: req.body.City
        }).then(result => res.json(result));
    });
});

router.route('/sequelize/order/:id').delete((req, res) => {
    Orders.findByPk(req.params.id).then(record => {
        record.destroy();
    }).then(() => res.json(`The order with id ${req.params.id} was deleted!`));
});

router.route('/sequelize/orders_aggregate').get((req, res) => {
    //suma cantitatilor celor 3 comenzi
    Orders.findAll({
        attributes: [
                [seq.fn('SUM', seq.col('Quantity')), 'TotalQuantity']
            ]
            /*,
            where: {
                Quantity: {
                    [seq.Op.gte]: 30.00
                }
            }*/
    }).then(result => res.json(result));
});

//----ORDERS WITH PRODUCTS (ONE TO MANY)---
router.route('/sequelize/ordersWithProducts').get((req, res) => {
    Orders.findAll({
        include: [{
            model: Products
        }]
    }).then(result => res.json(result));
});

router.route('/sequelize/ordersWithProducts/search').get((req, res) => {
    Orders.findAll({
        include: [{
            model: Products,
            where: {
                ProductPrice: {
                    [seq.Op.lt]: 25
                }
            }
        }]
    }).then(result => res.json(result));
});

router.route('/sequelize/ordersWithProducts').post((req, res) => {
    Orders.create({
        Title: req.body.Title,
        Quantity: req.body.Quantity,
        Message: req.body.Message,
        City: req.body.City
    }).then(order => {
        for (let i = 0; i < req.body.Products.length; i++) {
            Products.create({
                ProductName: req.body.Products[i].ProductName,
                ProductPrice: req.body.Products[i].ProductPrice,
                OrderId: order.OrderId
            }).then(() => res.json("Orders with products inserted!"))
        }
    })
})


//----BOOKS WITH AUTHORS (MANY TO MANY)---

router.route('/sequelize/AuthorsXBooks').get((req, res) => {
    Authors.findAll({
        include: [{
            model: Books
        }]
    }).then(result => res.json(result));
});

var port = 8080;
app.listen(port);