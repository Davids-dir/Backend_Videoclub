const { Order, Movie, User } = require('../models');


const OrderController = {

    /*async orderCreate (req, res) {
        try {
            const date_return = await  new Date ();
            date_return.setDate (date_return.getDate () + 3)

            const create = await Order.create ({
                UserId: req.User.Id,
                date_return
            });
            res.status (201).send ({message: 'Tu pedido ha sido creado con exito, la fecha de devolucion es el: ' + return_date})
            
        } 
        catch (error) {
            console.error (error)
            res.status (500).send ({error, message: 'Hubo un problema a la hora de realizar la operacion.'})
        }
    }*/

    create(req, res) {
        const return_date = new Date();
        return_date.setDate(return_date.getDate() + 2)
        Order.create({
            return_date,
            UserId: req.user.id
        })
            .then(order => {
                return order.addMovie(req.body.movies); //añade en OrderMovies las movies con el OrderId
            })
            .then(() => res.send({
                message: 'Order successfully created!'
            }))
            .catch(error => {
                console.error(error);
                res.status(500).send({
                    message: 'There was a problema trying to create the order'
                })
            })
    }
}


module.exports = OrderController;