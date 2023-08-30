const express = require("express");
const router = express.Router();
const {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
  getOrderstoClaim,
  getOrdersClaimed,
} = require("../controllers/orders");

const authenticate = require("../middlewares/auth");
router.use(authenticate);

router.get("/", getAllOrders);
router.get("/toclaim", getOrderstoClaim);
router.get("/claimed", getOrdersClaimed);
router.get("/:id", getOrderById);
router.post("/", createOrder);
router.put("/:id", updateOrder);
router.delete("/:id", deleteOrder);

module.exports = router;
