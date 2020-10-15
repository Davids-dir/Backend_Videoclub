const { Order, Movie, User } = require('../models');


const OrderController = {

    /*async orderCreate (req, res) {
        try {
            const return_date = await  new Date ();
            return_date.setDate (return_date.getDate () + 3);

            const create = await Order.create ({ ...req.body, return_date });
            const list_movies = await Order.addMovie ( req.body.movies );

            res.status (201).send ({message: 'Tu pedido ha sido creado con exito.'})
            
        } 
        catch (error) {
            console.error (error)
            res.status (500).send ({error, message: 'Hubo un problema a la hora de realizar la operacion.'})
        }
    }*/

    async create (req, res) {
        try {
            const return_date = new Date();
            return_date.setDate(returnDate.getDate() + 2)
            const order = await Order.create({
                ...req.body, 
                return_date
            });
                const movie = await order.addMovie(req.body.movies)
                
                res.send({
                    message: 'Order successfully completed'
                })
            
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: 'There was a problem+ trying to create the order'
            })
        }
    }
}


module.exports = OrderController;