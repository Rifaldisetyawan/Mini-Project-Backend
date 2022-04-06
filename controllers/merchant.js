const Merchant = require('../model/merchant')
const jwt = require('jsonwebtoken')
const { findById, findByEmail } = require('../model/merchant')
class controllerMerchant {
    static async createMerchants(req,res) {
        let data = req.body
        await Merchant.createMerchants(data)
            .then(data => {
                res.status(200).json(req.body)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static async deleteMerchants(req,res){
        let data = req.params
        const existingmerchant = await Merchant.findByidMerchant(data)
        if(existingmerchant[0]==null){
            return res.status(404).json({message:"data not found"})
        }
        await Merchant.deleteMerchants(data)
            .then(data => {
                res.status(200)
                res.send("id: " + req.params.id + " has been deleted")
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static async createProduct(req, res) {
        let data = req.body
        await Merchant.createProduct(data)
            .then(data => {
                res.status(200).json(req.body)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    
    }

    static async updateProduct(req,res){
        let data = req.body
        let dataID = req.params
        const existingProduct = await Merchant.findByid(data)
        if(data.id!=dataID.id){
            return res.status(400).json({message : "ID Params not match with ID Body"})
        }
        else if(existingProduct[0]==null){
            return res.status(404).json({message : "Data not found"})
        }
        await Merchant.updateProduct(data,dataID)
            .then(data => {
                let dataUpdate = req.body
                res.status(200).json(dataUpdate)
            })            
            .catch(err => {
                res.status(500).json(err)
            })
            
    }

    static async deleteProduct(req,res){
        let data = req.params
        const existingProduct = await Merchant.findByid(data)
        if(existingProduct[0]==null){
            return res.status(404).json({message:"data not found"})
        }
        await Merchant.deleteProduct(data)
            .then(data => {
                res.status(200)
                res.send("id: " + req.params.id + " has been deleted")
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static async getProduct(req, res) {
        await Merchant.getProduct()
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            res.status(404).json(err)
        })
    }

    static async login(req,res){
        const data = req.body
        const existingUser = await Merchant.findByName(data)
        if(existingUser[0]==null){
            res.status(404).json({message:'Name not found'})
        }else if(existingUser[0].password===req.body.password&&existingUser[0].name===req.body.name){
            const token = jwt.sign({
                name: existingUser[0].name,
                password: existingUser[0].password
            },'MiniProjectBE')
            res.status(200).json({token})
        } 
        else{
            res.status(401).json({message:'Password is Wrong!'})
        }
    }
}
module.exports = controllerMerchant