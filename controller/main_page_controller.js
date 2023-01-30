const {getData} = require("../service/main_service");

const getPage = async (req, res) => {
  const myList = await getData();
  console.log(myList);
  res.render("index", { messageList: myList });
};

module.exports = {
  getPage,
};
