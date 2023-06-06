const { User } = require("../DB_connection.js");

module.exports = async (req, res) => {
  const { email, password } = req.body
  
  try {
    if ( !email || !password) return res.status(400).send("Faltan Datos")

    const user = await User.findOrCreate({where: {email: email, password: password }}) // Aca puede ser objetos literales tambien.
    return res.status(200).json(user)
    
  } catch (error) {
    return res.status(500).json(error.message)
  }
}
