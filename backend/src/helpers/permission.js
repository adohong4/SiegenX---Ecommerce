const userModel = require("../models/user.model")

const Permission = async (userId) => {
    const user = await userModel.findById(userId)

    if (user.role === 'ADMIN') {
        return true
    }

    return false
}


module.exports = Permission