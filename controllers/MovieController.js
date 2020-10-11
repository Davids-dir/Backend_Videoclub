const {Movie} = require ('../models');

const MovieController = {

    // Funcion para obtener todo el catalogo de peliculas
    async show (req, res) {
        try {
            const list = await Movie.findAll ({
                attributes: { 
                    exclude: ['createdAt', 'updatedAt']
                }
            })
            res.status (201).send (list);           
        } 
        catch (error) {
            console.error (error)
            res.status (500).send ({error, message: 'Hubo un problema a la hora de obtener la lista, intentalo mas tarde.'})
        }
    }
}

module.exports = MovieController;