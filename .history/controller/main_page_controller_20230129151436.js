const getPage = async (req, res) => {
  res.render("index", { messageList: ["fff", "ssss"] });
};

module.exports = {
  getPage,
};
