// const axios = require("axios")

// const getCharById = (res,id) => {
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then( response => response.data)
//     .then(( { name, gender, species, origin,image,status }) => {
//         const character = {
//             id,
//             name,
//             gender,
//             species,
//             origin,
//             image,
//             status
//         }
//         return res
//         .writeHead(200,{ "Content-type": "application/json"  })
//         .end(JSON.stringify(character))
//     })
//     .catch( error => {
//         return res
//         .writeHead(500, {"Content-type": "text/plain"})
//         .end(error.messsage )

//     })

// };

// module.exports ={
//     getCharById
// }

const URL = "https://rickandmortyapi.com/api/character"
const axios = require("axios")

const getCharById = async (req, res) => {
    try {
        const { id } = req.params
        //  const {name, status, species, origin, image, gender} = await axios(`${URL}/${id}`).data // Destructuro lo que me viene por promesa en su propiedad data.

        const { data } = await axios(`${URL}/${id}`)

        const character = {
            id: data.id,
            name: data.name,
            status: data.status,
            species: data.species,
            origin: data.origin,
            image: data.image,
            gender: data.gender
        }

        return character.name 
        ? res.status(200).json(character) 
        : res.status(404).send("Not found!")


    } catch (error) {
        return res.status(500).send(error.message)
    }

}

module.exports = {
    getCharById
}