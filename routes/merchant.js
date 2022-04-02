const express = require('express')
const controllerMerchant= require('../controllers/merchant')
const Middleware = require('../middleware')
const router = express.Router()

router.post('/', controllerMerchant.createMerchants)
router.delete('/:id',controllerMerchant.deleteMerchants)

router.post('/product',Middleware.checkAuth, controllerMerchant.createProduct)
router.put('/product/:id',Middleware.checkAuth, controllerMerchant.updateProduct)
router.delete('/product/:id',Middleware.checkAuth,controllerMerchant.deleteProduct)
router.get('/product',Middleware.checkAuth, controllerMerchant.getProduct)

router.post('/login/',controllerMerchant.login)

// router.post('/', controllerUsers.createUsers)





module.exports = router