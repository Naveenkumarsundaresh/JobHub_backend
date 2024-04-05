const router = require("express").Router();
const chatController = require("../controllers/chatControllers");
const { verifyTokenAndAuthorization, verifyToken } = require("../middleware/verifyToken");



// CREATE CHAT
router.post("/", verifyToken, chatController.accessChat);


// Get Chats
router.get("/", verifyToken, chatController.getChats);


module.exports = router