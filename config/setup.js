const db = require('./db')

const createMerchant = `
    CREATE TABLE merchant_info(
        id INTEGER(6) PRIMARY KEY NOT NULL,
        password VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL,
        join_date DATE,
        phone_number VARCHAR(13),
        UNIQUE (name)
    )
`
const createProduct = `
    CREATE TABLE product_info(
        id INTEGER(6) PRIMARY KEY NOT NULL,
        name VARCHAR(255) NOT NULL,
        quantity INTEGER(6),
        Price INTEGER(12),
        merchant_id INTEGER(6) NOT NULL,
        FOREIGN KEY(merchant_id) REFERENCES merchant_info(id)
    )
`

db.connect(() => {
    db.query(createMerchant, (err) => {
        if (!err) {
            console.log('table created')
        } else {
            console.log(err)
        }
    })
    db.query(createProduct, (err) => {
        if (!err) {
            console.log('table created')
        } else {
            console.log(err)
        }
    })
})