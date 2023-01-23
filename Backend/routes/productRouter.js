const router = require("express").Router();
const {productCtrl} = require("../controllers/productCtrl");
const auth = require("../mddleware/auth");
const authAdmin = require("../mddleware/authAdmin");

router
  .route("/products")
  .get(productCtrl.getProducts)
  .post(productCtrl.createProduct);

router
  .route("/products/:id")
  .get(productCtrl.getProducts)
  .delete(productCtrl.deleteProduct)
  .put(productCtrl.updateProduct);






module.exports = router;
