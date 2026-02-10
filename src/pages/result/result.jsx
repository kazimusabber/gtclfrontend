import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Result = () => {
  const navigate = useNavigate();

  const [stdid, setStdid] = useState("");
  const [certificateType, setCertificateType] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!stdid || !certificateType) {
      alert("Please enter Student ID and select a certificate");
      return;
    }

    navigate(`/certificate/${certificateType}/${stdid}`);
  };

  return (
    <div>
      <div className="error-wrapper nav_bg" style={{ height: "auto" }}>
        <div className="container">
          <div className="row d-flex">
            <div className="col-lg-12">
              <div className="error-inner" style={{ marginBottom: "70px" }}>
                <div className="row align-items-center row-reverse">
                  <h3 className="text-center">Find Result</h3>

                  <form onSubmit={handleSubmit}>
                    {/* Certificate Dropdown */}
                    <div className="form-group mt-3 mb-4">
                      <label htmlFor="certificate">Select Certificate</label>
                      <select
                        className="form-control"
                        id="certificate"
                        value={certificateType}
                        onChange={(e) => setCertificateType(e.target.value)}
                      >
                        <option value="">-- Select Certificate --</option>
                        <option value="cert-a">Certificate A</option>
                        <option value="cert-b">Certificate B</option>
                      </select>
                    </div>

                    {/* Student ID */}
                    <div className="form-group">
                      <label htmlFor="stdid">Student ID</label>
                      <input
                        type="text"
                        className="form-control"
                        id="stdid"
                        value={stdid}
                        onChange={(e) => setStdid(e.target.value)}
                      />
                    </div>

                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn-common flat-btn btn-active mt-4"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
