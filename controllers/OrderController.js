const { Order, Movie, User } = require('../models');


const OrderController = {

    async orderCreate (req, res) {
        try {
            const date_return = await  new Date ();
            date_return.setDate (date_return.getDate () + 3)

            const create = await Order.create ({
                ...req.body,
                date_return
        });
            res.status (201).send ({message: 'Tu pedido ha sido creado con exito.'})
            
        } 
        catch (error) {
            console.error (error)
            res.status (500).send ({error, message: 'Hubo un problema a la hora de realizar la operacion.'})
        }
    }
}


module.exports = OrderController;