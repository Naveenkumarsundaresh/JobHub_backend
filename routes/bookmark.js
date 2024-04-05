const router = require("express").Router();
const { verifyToken, verifyTokenAndAuthorization } = require("../middleware/verifyToken");
const bookmarkController = require("../controllers/bookmarkController");


// CREATE BOOKMARKS
router.post("/", verifyTokenAndAuthorization, bookmarkController.createBookmark);


// DELETE BOOKMARKS

router.delete("/:id", verifyToken, bookmarkController.deleteBookmark);


// GET BOOKMARKS
router.get("/",verifyTokenAndAuthorization, bookmarkController.getBookmarks);



module.exports = router