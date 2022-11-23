const User = require('../models/User');


class UserController{

    list(req, res, next){
        User.find({})
        .lean()
        .then(users => res.render('pages/users/list', {users}))
        .catch(next);
    }

}

module.exports = new UserController();