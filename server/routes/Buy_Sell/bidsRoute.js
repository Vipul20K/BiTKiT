const express = require("express");
const Bid = require("../../models/Buy_Sell/bidModel");
const Product = require("../../models/Buy_Sell/productModel");
const { sendEmail } = require("../../utils/sendEmail");
const authMiddleware = require('../../middlewares/authMiddleware');

const router = express.Router();

// place a new bid
router.post("/place-new-bid",authMiddleware, async (req, res) => {
  try {
    const { product: productId, amount } = req.body;
    const newBid = new Bid(req.body);
    await newBid.save();
    const product = await Product.findById(productId).populate("seller");

    if (!product || !product.seller?.email) {
      return res.send({
        success: false,
        message: "Product or seller not found",
      });
    }

    // Send email to seller
    await sendEmail({
      to: product.seller.email,
      subject: `New Bid on Your Product - ${product.name}`,
      html: `
        <p>Hello ${product.seller.name},</p>
        <p>A new bid of ₹<strong>${amount}</strong> has been placed on your product <strong>${product.name}</strong>.</p>
        <p>Login to <a href="http://localhost:5173/login">BiTKiT</a> to view the bid.</p>
        <br/>
        <p>– Team BiTKiT</p>
      `,
    });

    res.send({
      success: true,
      message: "Bid placed successfully",
    });
  } catch (error) {
    console.error("Error placing bid:", error);
    res.send({ success: false, message: error.message });
  }
});

// get all bids
router.post("/get-all-bids",authMiddleware, async (req, res) => {
  try {
    const { product, seller, buyer } = req.body;
    let filters = {};
    if (product) {
      filters.product = product;
    }
    if (seller) {
      filters.seller = seller;
    }
    if (buyer) {
      filters.buyer = buyer;
    }
    const bids = await Bid.find(filters)
      .populate("product")
      .populate("buyer")
      .populate("seller")
      .sort({ createdAt: -1 });
    res.send({ success: true, data: bids });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
});

module.exports = router;
