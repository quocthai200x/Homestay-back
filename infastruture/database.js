const mongoose = require('mongoose')

const db ={
    url: `mongodb+srv://TKXDPM_DB:TKXDPM_DB_PASS@cluster0.091nb.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    options:{
        userNewUrlParser:true
    }
}

mongoose.connect(db.url,db.options)

module.exports = mongoose