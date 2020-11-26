//importul configurarii si importul modului sql
import sql from "mssql"
import { config } from "../config/dbconfig.js"

//ne definim functii async care sa lucreze cu bd
export async function getOrders() {
    try {
        //ne conectam la bd prin sql.connect care returneaza un obiect
        let pool = await sql.connect(config);
        //definim queryul
        let records = await pool.request().query("Select * from Orders");
        return records.recordsets;
    } catch (err) {
        console.log(err);
    }
}

//cautam o sg comanda dupa id
export async function getOrderById(orderID) {
    try {
        //ne conectam la bd prin sql.connect care returneaza un obiect
        let pool = await sql.connect(config);
        let record = await pool.request()
            .input('OrderId', sql.Int, orderID) //precizam parametrul dupa care cautam, numele, tipul si il asignam
            .query(`Select * from Orders where OrderId = @OrderId`);
        return record.recordsets;
    } catch (err) {
        console.log(err);
    }
}

//insert
export async function insertOrder(order) {
    try {
        let pool = await sql.connect(config);
        let insertedOrder = await pool.request()
            .input('Title', sql.VarChar, order.Title)
            .input('Quantity', sql.Decimal(18, 2), order.Quantity)
            .input('Message', sql.VarChar, order.Message)
            .input('City', sql.VarChar, order.City)
            .query(`Insert into Orders Select @Title, @Quantity, @Message, @City`);
        return insertedOrder.recordsets;

    } catch (err) {
        console.log(err);
    }
}

//delete
export async function deleteOrderById(orderId) {
    try {
        let pool = await sql.connect(config);
        await pool.request()
            .input('orderId', sql.Int, orderId)
            .query('Delete from Orders where OrderId=@orderId');
        return `Order with id ${orderId} was deleted!`;

    } catch (err) {
        console.log(err);
    }
}