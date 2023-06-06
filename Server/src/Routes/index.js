const { getCharById } = require("../Controllers/getCharById")

const postUser = require("../Controllers/postUser")
const login = require("../Controllers/login")
const postFav = require("../Controllers/postFav")
const deleteFav = require("../Controllers/deleteFav")

const router = require("express").Router();



router.get("/login", (req, res) => {
    login(req, res)
    });

router.post("/login", postUser)


router.post("/fav", (req, res) => {
    postFav(req, res)
});

router.get("/character/:id", (req, res) => {
    getCharById(req, res)
});

router.delete("/fav/:id", (req, res) => {
    deleteFav(req, res)
});

// router.get("/login", login ) Es lo mismo que el de arriba. 


module.exports = router;
