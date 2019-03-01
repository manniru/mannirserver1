// user.js
module.exports = function(req, res) {
    console.log(req.params) // ['luke'] when user visits /user/luke
    res.send({params: req.params})
}