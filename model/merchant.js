const db = require('../config/db')
class Merchant{
    static createMerchants(data) {
        return new Promise (function(resolve, reject) {
            const values=[data.id,
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
            const values = [data.id]
            const merchantDelete = `DELETE FROM merchant_info WHERE id =?`;
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
        const values=[data.id,
                data.name,
                data.quantity,
                data.price,
                data.merchant_id];
        const query = `INSERT INTO product_info(id,name,quantity,price,merchant_id) VALUES (?)`
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
            const merchant_id = data.merchant_id;
            const productUpdate = `UPDATE product_info SET name = ?,quantity = ?,price = ?,merchant_id = ? WHERE id = ?`;
            db.query(productUpdate,[name,quantity,price,merchant_id,id], (err, row) => {
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
            const values = [data.id]
            const productDelete = `DELETE FROM product_info WHERE id =?`;
            db.query(productDelete,[values],(err, row)=>{
                if(err){
                    console.log(err);
                    return reject(err)
                }else{
                    console.log("id :",data.id,"Already deleted ");
                    resolve(row)
                }
            })
        })
    }

    static getProduct() {
        return new Promise(function(resolve,reject){
            const selectQuery = `select 
            p.id as id,
            p.name as name,
            p.quantity as quantity,
            p.Price as price,
            m.name as merchant_name
        from product_info as p
        join 
            merchant_info as m 
        on m.id = p.merchant_id;`;
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
        
    }

    // function findbyid
    static findByName(data) {
        return new Promise(function(resolve,reject){
            const values = [data.name]
            const selectName = `SELECT * FROM merchant_info WHERE name=?`;
            db.query(selectName,[values],(err,row)=>{
                if(err){
                    console.log(err);
                    return reject(err)
                }else{
                    console.log(row);
                    resolve(row)
                }
            })
        })
        
    }
    
    static findByid(data) {
        return new Promise(function(resolve,reject){
            const values = [data.id]
            const selectId = `SELECT * FROM product_info WHERE id=?`;
            db.query(selectId,[values],(err,row)=>{
                if(err){
                    console.log(err);
                    return reject(err)
                }else{
                    console.log(row);
                    resolve(row)
                }
            })
        })
        
    }
    static findByidMerchant(data) {
        return new Promise(function(resolve,reject){
            const values = [data.id]
            const selectId = `SELECT * FROM merchant_info WHERE id=?`;
            db.query(selectId,[values],(err,row)=>{
                if(err){
                    console.log(err);
                    return reject(err)
                }else{
                    console.log(row);
                    resolve(row)
                }
            })
        })
        
    }
    
}

module.exports = Merchant