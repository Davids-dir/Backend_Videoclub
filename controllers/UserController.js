const {User} = require ('../models');

const UserController = {

    // Funcion para realizar el alta de usuario e insertar en la BBDD
    async signup (req, res) {

        try { 
            const registerUser = await User.create (req.body);
            res.status (201).send (registerUser);
        } 
        catch (error) {
            console.error (error)
            res.status (500).send ({error, message: 'Ha habido un problema a la hora de realizar el alta, revisa los datos introducidos.'})
        }
    },

    // Funcion para hacer Login en la app
    async login (req, res) {
        
        try { 
            const loginUser = await User.findAll ({ where: {
                email: req.body.email,
                password: req.body.password,
            }})
            res.status (201).send ({message: 'Bienvenido de nuevo.'} )
        } 
        catch (error) {
            console.error (error)
            res.status (500).send ({error, message: 'Revisa que los datos introducidos sean correctos.'})
        }
    },

    // Funcion para acceder a los datos del perfil del usuario
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
            res.status (201).send ({removeUser, message: 'Tu usuario ha sido de dado de baja correctamente. Espermos volver a verte pronto!'})
        } 
        catch (error) {
            console.error (error)
            res.status (500).send ({error, message: 'Ha habido un problema a la hora de ejecutar la operacion.'})    
        }
    }
}

module.exports = UserController;