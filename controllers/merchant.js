const Merchant = require('../model/merchant')
const db = require('../config/db')
class controllerMerchant {
    static createMerchants(req,res) {
        let data = req.body
        Merchant.createMerchants(data)
            .then(data => {
                res.status(200).json(req.body)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static deleteMerchants(req,res){
        let data = req.params
        Merchant.deleteMerchants(data)
            .then(data => {
                res.status(200)
                res.send("Number of records deleted: " + data.affectedRows)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static createProduct(req, res) {
        let data = req.body
        Merchant.createProduct(data)
            .then(data => {
                res.status(200).json(req.body)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    
    }

    static updateProduct(req,res){
        let data = req.body
        let dataID = req.params
        if(data.id!=dataID.id){
            return res.status(400).json({message : "ID Params not match with ID Body"})
        }
        Merchant.updateProduct(data,dataID)
            .then(data => {
                let dataUpdate = req.body
                res.status(200).json(dataUpdate)
            })            
            .catch(err => {
                res.status(500).json(err)
            })
            
    }

    static deleteProduct(req,res){
        let data = req.params
        Merchant.deleteProduct(data)
            .then(data => {
                res.status(200)
                res.send("Number of records deleted: " + data.affectedRows)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static getProduct(req, res) {
        Merchant.getProduct()
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            res.status(404).json(err)
        })
    }



  
}
module.exports = controllerMerchant