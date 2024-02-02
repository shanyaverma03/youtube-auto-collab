const express = require("express");
const router = express.Router();
const {
  uploadVideo,
  getPendingVideos,
  approveVideo,
} = require("../controllers/videoController");
const auth = require("../middleware/auth");

router.post("/upload", auth, uploadVideo);
router.get("/pending", auth, getPendingVideos);
router.post("/approve/:id", auth, approveVideo);

module.exports = router;
