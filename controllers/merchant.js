const Merchant = require('../model/merchant')
const db = require('../config/db')
class controllerMerchant {
    static createMerchants(req, res) {
            let values=[req.body.id,
            req.body.password,
            req.body.name,
            req.body.address,
            req.body.join_date,
            req.body.phone_number];
        
        db.query(Merchant.createMerchants(),[values],(err)=>{
            if(err){
                res.status(400).json(err)
                return
            }
            const data = req.body
            console.log(data);
                res.status(201)
                res.send(data)
        })
        
    }

    static deleteMerchants(req,res){
        const id = req.params.id  
        db.query(Merchant.deleteMerchants(),[id],(err, result)=> {  
            if(err){res.status(400).json(err)
                return
            }
        console.log("Number of records deleted: " + result.affectedRows);  
        res.status(200)
        res.send("Number of records deleted: " + result.affectedRows)
        });  
    }

    static createProduct(req, res) {
        let values=[req.body.id,
        req.body.name,
        req.body.quantity,
        req.body.price];
    
    db.query(Merchant.createProduct(),[values],(err)=>{
        if(err){
            res.status(400).json(err)
            return
        }
        const data = req.body
        console.log(data);
            res.status(201)
            res.send(data)
    })
    
    }

    static updateProduct(req,res){
        const id = req.params.id;
        const name = req.body.name;
        const quantity = req.body.quantity;
        const price = req.body.price;
        
        db.query(Merchant.updateProduct(), [name,quantity,price,id], function (err) {
            if(err){res.status(400).json(err)
                return
            }
            if(req.body.id!=id){
                res.send("ID Param not Match With ID Body")
                return
            }
            console.log(req.body)
            res.status(201)
            res.send(req.body)
        });
    }

    static deleteProduct(req,res){
        const id = req.params.id  
        db.query(Merchant.deleteProduct(),[id],(err, result)=> {  
            if(err){res.status(400).json(err)
                return
            }
        console.log("Number of records deleted: " + result.affectedRows);  
        res.status(200)
        res.send("Number of records deleted: " + result.affectedRows)
        });  
    }

    static getProduct(req, res) {
        db.query(Merchant.getProduct(),(err,result)=>{
            if(err) throw err;
            res.status(200)
            res.send(result)
        })
    }



  
}
module.exports = controllerMerchant