import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllVideos, deleteVideo } from "../../redux/videos/videoActions";
import { videosFeatureKey } from "../../redux/videos/videoReducer";
import { Link } from "react-router-dom";

const Dashboard = () => {
  let dispatch = useDispatch();

  let videoInfo = useSelector((state) => {
    return state[videosFeatureKey];
  });

  let { videos } = videoInfo;

  useEffect(() => {
    dispatch(getAllVideos());
  }, []);

  const handleDeleteVideo = (videoId) => {
    dispatch(deleteVideo(videoId));
  };

  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <h1 className="text-dark text-center m-2 p-2">Manage Videos</h1>

            <div className="row">
              {videos.length > 0 ? (
                <>
                  {videos.map((video) => {
                    return (
                      <div className="col">
                        <div className="card m-3 p-2" key={video._id}>
                          <div className="card-header bg-info text-white text-uppercase fw-bold">
                            {video.title}
                          </div>
                          <div className="card-body">
                            <h5 className="card-title text-dark">
                              <span className="fw-bold text-dark">Title:</span>{" "}
                              {video.title}
                            </h5>
                            <p className="card-text">
                              <span className="fw-bold text-dark">Url:</span>
                              {video.url}
                            </p>
                            <p className="card-text">
                              <span className="fw-bold text-dark">
                                User Name:
                              </span>
                              {video.userName}
                            </p>
                            <p className="card-text">
                              <span className="fw-bold text-dark">
                                Location:
                              </span>
                              {video.location}
                            </p>

                            <p className="card-text">
                              <span className="fw-bold text-dark">
                                Description:
                              </span>
                              {video.description}
                            </p>

                            <Link
                              to={`/videos/${video._id}`}
                              className="btn btn-dark m-3 p-2"
                            >
                              Update
                            </Link>

                            <button
                              onClick={handleDeleteVideo.bind(this, video._id)}
                              className="btn btn-danger m-3 p-2"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
