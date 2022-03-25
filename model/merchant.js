const db = require('../config/db')
class Merchant{
    static createMerchants() {
        let merchantCreate = `INSERT INTO merchant_info(id,password,name,address,join_date,phone_number) VALUES (?)`;
        return merchantCreate;
        
    }

    static deleteMerchants(){
        let merchantDelete = `DELETE FROM merchant_info WHERE id =?`;
        return merchantDelete;
    }

    static createProduct() {
        let productCreate = `INSERT INTO product_info(id,name,quantity,price) VALUES (?)`;
        return productCreate;
        
    }

    static updateProduct(){
        let productUpdate = `UPDATE product_info SET name = ?,quantity = ?,price = ? WHERE id = ?`;
        return productUpdate;

    }

    static deleteProduct(){
        let productDelete = `DELETE FROM product_info WHERE id =?`;
        return productDelete;
    }

    static getProduct() {
        let selectQuery = `SELECT * FROM product_info`;
        return selectQuery;
    }
    

    

    
}

module.exports = Merchant