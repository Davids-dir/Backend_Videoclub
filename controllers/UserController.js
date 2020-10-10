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
    },

    // Funcion para dar de baja el usuario
    async delete (req, res) {

        try {
            const rem_user =  await User.deleteOne (req.body);
            res.status (201).send ({rem_user, message: `Tu usuario ha sido de dado de baja correctamente. Espermos volver a verte pronto ${User.name} !`})
        } 
        catch (error) {
            console.error (error)
            res.status (500).send ({error, message: 'Ha habido un problema a la hora de ejecutar la operacion.'})    
        }
    }
}

module.exports = UserController;