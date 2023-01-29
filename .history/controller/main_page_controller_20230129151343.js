const getPage = async (req, res) => {
  res.render("index", { message: ["fff", "ssss"] });
};

module.exports = {
  getPage,
};
