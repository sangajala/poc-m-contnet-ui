import express from "express";

const router = express.Router();
import {
  videos,
  video,
  addVideo,
  updateVideo,
  deleteVideo,
} from "../controllers/videoController";

router.get("/videos", videos);

router.get("/videos/:id", video);

router.post("/addvideo", addVideo);

router.put("/videos/:id", updateVideo);

router.delete("/videos/:id", deleteVideo);

module.exports = router;
