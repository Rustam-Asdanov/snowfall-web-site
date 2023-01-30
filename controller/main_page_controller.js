const {getData} = require("../service/main_service");

const getPage = async (req, res) => {
  const myList = await getData();
  console.log(myList);
  res.render("index", { messageList: myList });
};

const getAboutPage = (req,res)=>{
  res.render("about");
}

module.exports = {
  getPage,
  getAboutPage
};
