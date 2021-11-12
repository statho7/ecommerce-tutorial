const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;

// pk_test_51Jv2SrIw8esxdBkOw2rv16kTXVXdLkKEUwe0yVFAvastlxM2zcoa2K9HxFmVZodrT15DpwmrH56yzuvTKqHFIVK100ZGqi7g2e