import { app, router } from "./init/serverinit.js"
import { getOrders, getOrderById, insertOrder, deleteOrderById } from "./operations/dboperations.js"


//in ruta trebuie sa specificam operatiunea care va comunica cu bd si ne va luat toate inreg.
//pt asta ne facem un folder separat in care ne definim operatiunile si aici doar le importam
router.route("/orders").get((req, res) => {
    getOrders().then(result => res.json(result));
});

router.route("/orderById/:id").get((req, res) => {
    getOrderById(req.params.id).then(result => res.json(result));
});

router.route("/orders").post((req, res) => {
    let order = req.body;
    insertOrder(order).then(result => res.json(result));
});

router.route("/deleteOrderById/:id").delete((req, res) => {
    deleteOrderById(req.params.id).then(result => res.json(result));
});

var port = 8000;
app.listen(8000, () => console.log(`Server is listening to ${port}...`));