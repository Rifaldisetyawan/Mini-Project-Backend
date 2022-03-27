const db = require('../config/db')
class Merchant{
    static createMerchants(data) {
        return new Promise (function(resolve, reject) {
            let values=[data.id,
                    data.password,
                    data.name,
                    data.address,
                    data.join_date,
                    data.phone_number];
            const query = `INSERT INTO merchant_info(id,password,name,address,join_date,phone_number) VALUES (?)`
            db.query(query,[values], (err, row) => {
                if (err) {
                    console.log(err);
                    return reject(err)
                } else {
                    console.log(data);
                    resolve(data)
                }
            })
        })
    }

    static deleteMerchants(data){
        return new Promise (function(resolve, reject){
            let values = [data.id]
            let merchantDelete = `DELETE FROM merchant_info WHERE id =?`;
            db.query(merchantDelete,[values],(err, row)=>{
                if(err){
                    console.log(err);
                    return reject(err)
                }else{
                    console.log("Number of records deleted: ",data.id);
                    resolve(row)
                }
            })
        })
    }

    static createProduct(data) { 
        return new Promise (function(resolve, reject) {
        let values=[data.id,
                data.name,
                data.quantity,
                data.price];
        const query = `INSERT INTO product_info(id,name,quantity,price) VALUES (?)`
        db.query(query,[values], (err, row) => {
            if (err) {
                console.log(err);
                return reject(err)
            } else {
                console.log(data);
                resolve(data)
            }
        })
    })
        
    }

    static updateProduct(data,dataID){
        return new Promise((resolve,reject)=>{
            const id = dataID.id;
            const name = data.name;
            const quantity = data.quantity;
            const price = data.price;
            let productUpdate = `UPDATE product_info SET name = ?,quantity = ?,price = ? WHERE id = ?`;
            db.query(productUpdate,[name,quantity,price,id], (err, row) => {
                if (err) {
                    console.log(err);
                    return reject(err)
                } 
                else {
                    console.log(data);
                    resolve(data)
                }
            })

        })

    }

    static deleteProduct(data){
        return new Promise (function(resolve, reject){
            let values = [data.id]
            let productDelete = `DELETE FROM product_info WHERE id =?`;
            db.query(productDelete,[values],(err, row)=>{
                if(err){
                    console.log(err);
                    return reject(err)
                }else{
                    console.log("Number of records deleted: ",data);
                    resolve(row)
                }
            })
        })
    }

    static getProduct() {
        return new Promise(function(resolve,reject){
            let selectQuery = `SELECT * FROM product_info`;
            db.query(selectQuery,(err,row)=>{
                if(err){
                    console.log(err);
                    return reject(err)
                }else{
                    console.log(row);
                    resolve(row)
                }
            })
        })
        
        return selectQuery;
    }
    

    

    
}

module.exports = Merchant