const express = require('express')
const controllerMerchant= require('../controllers/merchant')
const router = express.Router()

router.post('/', controllerMerchant.createMerchants)
router.delete('/:id',controllerMerchant.deleteMerchants)

router.post('/product', controllerMerchant.createProduct)
router.put('/product/:id', controllerMerchant.updateProduct)
router.delete('/product/:id',controllerMerchant.deleteProduct)
router.get('/product', controllerMerchant.getProduct)

// router.post('/', controllerUsers.createUsers)





module.exports = router