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
            const read = await User.get ()
            res.status (201).send (read)    
        } 
        catch (error) {
            console.error (error)
            res.status (500).send ({error, message: 'Ha habido un problema a la hora de obtener los datos.'})
        }
    }
}

module.exports = UserController;