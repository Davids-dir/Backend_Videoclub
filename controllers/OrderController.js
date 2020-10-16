const { Order, Movie, User } = require('../models');


const OrderController = {

    async orderCreate (req, res) {

        try {
            const return_date = new Date ();
            return_date.setDate (return_date.getDate () + 3 )
            const order = await Order.create ({ ...req.body, return_date });
            const movie = await order.addMovie ( req.body.movies )
                
            res.status (201).send ({ message: 'Tu pedido ha sido creado con exito.' })
            
        } 
        catch (error) {
            console.error(error);
            res.status (500).send({ message: 'Hubo un problema a la hora de realizar la operacion.' })
        }
    }
}
module.exports = OrderController;