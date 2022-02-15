require('dotenv').config()

module.exports = {
    API: {
        PORT: process.env.PORT || 3000
    },
    DB: {
        USER:  process.env.DATABASE_USER,
        PASSWORD:  process.env.DATABASE_PASSWORD,
        DATABASE:  process.env.DATABASE
    },
    secretJWT: process.env.SECRET_JWT
}