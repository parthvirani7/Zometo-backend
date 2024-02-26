const { paymentService } = require("../services");

// GET Payment
const getPayment = async (req, res) => {
  const payment = await paymentService.getPayment();
  console.log(payment, "payment get");
  res.status(200).json({
    message: "payment get success",
    data: payment,
  });
};

// ADD Payment
const addPayment = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);

    const payment = await paymentService.addPayment(body);
    if (!payment) {
      throw new Error("somrthing went wrong");
    }
    res.status(201).json({
      message: "Pyment created success",
      data: payment,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

// UPDATE Payment

const updatePayment = async (req, res) => {
  try {
    const id = req.parms.id;
    const body = req.body;
    console.log(id, body);
    const payment = await paymentService.updatePayment(id, body);

    res.status(200).json({
      message: "payment updated success",
      data: payment,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

// DELETE Payment

const deletePayment = async (req, res) => {
  try {
    console.log(req.parms);
    const id = req.parms.id;

    const payment = await paymentService.deletePayment(id);
    if (!payment) {
      throw new Error("something went wrong");
    }
    res.status(200).json({
      message: "payment deleted success",
      data: payment,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = {
  addPayment,
  getPayment,
  updatePayment,
  deletePayment,
};
