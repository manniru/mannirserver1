const faker = require('faker')

module.exports = function(req, res) {
    // console.log(req.params) // ['luke'] when user visits /user/luke
    var firstName = faker.name.firstName()
    var profile = faker.helpers.createCard()
    console.log(profile)
    res.json(profile)
}