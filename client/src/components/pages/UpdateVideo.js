import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getVideo,
  updateInput,
  updateVideo,
} from "../../redux/videos/videoActions";
import { videosFeatureKey } from "../../redux/videos/videoReducer";
import { useNavigate, useParams } from "react-router-dom";

const UpdateVideo = () => {
  let dispatch = useDispatch();
  let videoId = useParams().id;
  let navigate = useNavigate();

  let selectedVideoInfo = useSelector((state) => {
    return state[videosFeatureKey];
  });

  let { video } = selectedVideoInfo;

  let [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    dispatch(getVideo(videoId));
  }, [videoId]);

  let handleInput = (event) => {
    dispatch(updateInput(event.target.name, event.target.value));
  };

  let submitVideo = (event) => {
    event.preventDefault();
    dispatch(updateVideo(videoId, video));
    setSubmitted(true);
  };

  return (
    <>
      {submitted ? (
        navigate("/admin")
      ) : (
        <>
          <div className="container text-center">
            <div className="row">
              <div className="col">
                <h1 className="text-center text-dark">Update Video</h1>
                <div className="form-group justify-content-center m-3">
                  <form
                    onSubmit={submitVideo}
                    className="border border-dark m-2"
                  >
                    <div className="form-group m-3">
                      <input
                        name="title"
                        value={video.title}
                        placeholder="title"
                        onChange={handleInput}
                        required
                        type="text"
                        className="form-control"
                      />
                    </div>

                    <div className="form-group m-3">
                      <input
                        name="url"
                        value={video.url}
                        placeholder="url"
                        onChange={handleInput}
                        required
                        type="text"
                        className="form-control"
                      />
                    </div>

                    <div className="form-group m-3">
                      <input
                        name="userName"
                        value={video.userName}
                        placeholder="User Name"
                        onChange={handleInput}
                        required
                        type="text"
                        className="form-control"
                      />
                    </div>

                    <div className="form-group m-3">
                      <input
                        name="location"
                        value={video.location}
                        placeholder="location"
                        onChange={handleInput}
                        required
                        type="text"
                        className="form-control"
                      />
                    </div>

                    <div className="form-group m-3">
                      <input
                        name="description"
                        value={video.description}
                        placeholder="description"
                        onChange={handleInput}
                        required
                        type="text"
                        className="form-control"
                      />
                    </div>

                    <div className="m-3">
                      <input
                        type="submit"
                        value="Update"
                        className="btn btn-warning btn-outline-dark text-white"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default UpdateVideo;
