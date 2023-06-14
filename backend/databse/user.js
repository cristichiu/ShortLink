const { model, Schema } = require("mongoose")

const user = new Schema({
    userId: String,
    username: String,
    password: String
})

module.exports = model("users", user)