const {User} = require ('../models');
const user = require('../models/user');

const UserController = {

    // Funcion para realizar el alta de usuario e insertar en la BBDD
    async signup (req, res) {

        try { 
            const register = await User.create (req.body);
            res.status (201).send (register);
        } 
        catch (error) {
            console.error (error)
            res.status (500).send ({error, message: 'Ha habido un problema a la hora de realizar el alta, revisa los datos introducidos.'})
        }
    },

    // Funcion para leer el perfil del usuario
    async profile (req, res) {

        try {
            const profileUser = await User.findAll ({ where: {email: req.params.email }})
            res.status (201).send (profileUser)
        } 
        catch (error) {
            console.error (error)
            res.status (500).send ({error, message: 'Ha habido un problema a la hora de obtener los datos.'})
        }
    },

    // Funcion para dar de baja el usuario
    async delete (req, res) {

        try {
            const removeUser =  await User.destroy ({ where: {email: req.params.email}});
            res.status (201).send ({removeUser, message: `Tu usuario ha sido de dado de baja correctamente. Espermos volver a verte pronto!`})
        } 
        catch (error) {
            console.error (error)
            res.status (500).send ({error, message: 'Ha habido un problema a la hora de ejecutar la operacion.'})    
        }
    }
}

module.exports = UserController;