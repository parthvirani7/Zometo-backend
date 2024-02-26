const { restService } = require("../services");

// ADD Restarunt

const addRest = async (req, res) => {
  try {
    const body = req.body;

    console.log(body);

    const rest = await restService.addRest(body);
    if (!rest) {
      throw new Error("something went wrong");
    }

    res.render("./data", { rest: rest });
    // res.status(200).json({
    //   message: "Restaurant add success",
    //   data: rest,
    // });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

// GET Restarunt

const getRest = async (req, res) => {
  const rest = await restService.getRest();
  // console.log(rest, "get");
  res.render("./allrest", { message: rest });

  // res.status(200).json({
  //   message: "restaurant get success",
  //   data: rest,
  // });
};

// UPDATE Restarunt

const updateRest = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    console.log(id, body);

    if (!rest) {
      throw new Error("something went wrong");
    }
    const rest = await restService.updateRest(id, body);

    res.status(200).json({
      message: "Restaurnt updated success",
      data: rest,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// DELETE Restarunt

const deleteRest = async (req, res) => {
  try {
    console.log(req.params);
    const id = req.params.id;

    const rest = await restService.deleteRest(id);
    if (!rest) {
      throw new Error("something went wrong");
    }
    res.status(200).json({
      message: "rest delete success",
      data: rest,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
module.exports = {
  addRest,
  getRest,
  updateRest,
  deleteRest,
};
