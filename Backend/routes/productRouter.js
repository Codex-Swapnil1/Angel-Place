const router = require('express').Router()
const productCtrl = require('../controllers/productCtrl')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')


router.route('/products')
    .get(productCtrl.getProducts)
    .post( productCtrl.createProduct)


router.route('/products/:id')
    .delete( productCtrl.deleteProduct)
    .put( productCtrl.updateProduct)



module.exports = router