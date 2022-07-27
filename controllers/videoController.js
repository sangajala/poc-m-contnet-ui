import Video from "../models/video";

export const videos = async (req, res) => {
  try {
    let videos = await Video.find();
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

export const video = async (req, res) => {
  let videoId = req.params.id;

  try {
    let videos = await Video.findById(videoId);
    res.status(200).json(videos);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error.message,
    });
  }
};

export const addVideo = async (req, res) => {
  let newVideo = {
    title: req.body.title,
    url: req.body.url,
    userName: req.body.userName,
    location: req.body.location,
    description: req.body.description,
  };

  try {
    let video = await Video.findOne({ title: newVideo.title });

    if (video) {
      return res.status(400).json({
        msg: "Video exists already with the given title",
      });
    }

    video = new Video(newVideo);
    video = await video.save();

    res.status(201).json({
      result: "Video Added Successfully",
      video: video,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error.message,
    });
  }
};

export const updateVideo = async (req, res) => {
  let videoId = req.params.id;

  let updateVideo = {
    title: req.body.title,
    url: req.body.url,
    userName: req.body.userName,
    location: req.body.location,
    description: req.body.description,
  };

  try {
    let video = await Video.findById(videoId);
    if (!video) {
      return res.status(400).json({
        msg: "Video Does Not Exist",
      });
    }

    video = await Video.findByIdAndUpdate(
      videoId,
      {
        $set: updateVideo,
      },
      { new: true }
    );

    res.status(201).json({
      result: "Video Data Updated Successfully",
      video: video,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error.message,
    });
  }
};

export const deleteVideo = async (req, res) => {
  let videoId = req.params.id;

  try {
    let video = await Video.findById(videoId);
    if (!video) {
      return res.status(400).json({
        msg: "Video Does Not Exist",
      });
    }

    video = await Video.findByIdAndDelete(videoId);

    res.status(200).json({
      msg: "Video Deleted Successfully",
      videoId: videoId,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error.message,
    });
  }
};
