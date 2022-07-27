import { useState } from "react";
import { useDispatch } from "react-redux";
import { createVideo } from "../../redux/videos/videoActions";
import { useNavigate } from "react-router-dom";

const AddVideo = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let [video, setVideo] = useState({
    title: "",
    url: "",
    userName: "",
    location: "",
    description: "",
  });

  let [submit, setSubmit] = useState(false);

  let updateInput = (event) => {
    setVideo({
      ...video,
      [event.target.name]: event.target.value,
    });
  };

  let submitVideo = (event) => {
    event.preventDefault();
    dispatch(createVideo(video));
    setSubmit(true);
  };

  return (
    <>
      {submit ? (
        navigate("/admin")
      ) : (
        <>
          <div className="container text-center">
            <div className="row">
              <div className="col">
                <h1 className="text-center text-dark">Add Video</h1>
                <div className="form-group justify-content-center m-3">
                  <form
                    onSubmit={submitVideo}
                    className="border border-dark m-2"
                  >
                    <div className="form-group m-3">
                      <input
                        name="title"
                        placeholder="title"
                        onChange={updateInput}
                        required
                        type="text"
                        className="form-control"
                      />
                    </div>

                    <div className="form-group m-3">
                      <input
                        name="url"
                        placeholder="url"
                        onChange={updateInput}
                        required
                        type="text"
                        className="form-control"
                      />
                    </div>

                    <div className="form-group m-3">
                      <input
                        name="userName"
                        placeholder="User Name"
                        onChange={updateInput}
                        required
                        type="text"
                        className="form-control"
                      />
                    </div>

                    <div className="form-group m-3">
                      <input
                        name="location"
                        placeholder="location"
                        onChange={updateInput}
                        required
                        type="text"
                        className="form-control"
                      />
                    </div>

                    <div className="form-group m-3">
                      <input
                        name="description"
                        placeholder="description"
                        onChange={updateInput}
                        required
                        type="text"
                        className="form-control"
                      />
                    </div>

                    <div className="m-3">
                      <input
                        type="submit"
                        value="Create"
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

export default AddVideo;
