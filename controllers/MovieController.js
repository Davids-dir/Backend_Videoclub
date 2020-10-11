const {Movie} = require ('../models');

const MovieController = {

    // Funcion para buscar la pelicula por titulo
    async showByTitle (req, res) {
        try {
            const searchTitle = await Movie.findAll ({
                where: {title: req.body.title}
            })
            res.status (201). send (searchTitle);
        } 
        catch (error) {
            console.error (error)
            res.status (500).send ({error, message: 'Error en la busqueda, revisa los datos introducidos.'})
        }
    },

    // Funcion para encontar la pelicula por el ID en la BBDD
    async showById (req, res) {

        try {
            const searchId = await Movie.findAll ({ 
                where: { id: req.params.id},
                attributes: {exclude: ['createdAt', 'updatedAt']}
            })
            res.status (201).send(searchId);    
        } 
        catch (error) {
            console.error (error)
            res.status (500).send ({error, message: 'Hubo un problema a la hora de realizar la busqueda, revisa los datos.' })
        }
    },
    
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
            res.status (500).send ({error, message: 'Hubo un problema a la hora de realizar  la busqueda, intentalo mas tarde.'})
        }
    }
}

module.exports = MovieController;