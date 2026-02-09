
import {Link, Routes, Route, useNavigate} from 'react-router-dom';

import { useState } from "react";
const Result = ({ data }) => {


  const navigate = useNavigate();
  const [stdid, setStdid] = useState("");
  const handleSubmit = event => {
    event.preventDefault();

    // 👇️ redirect to /contacts
    navigate(`/certificate/${stdid}`);
  };

  return (
    <div>
      <div className="error-wrapper nav_bg" style={{height:"auto"}}>
        <div className="container">
          <div className="row d-flex">
            <div className="col-lg-12">
              <div className="error-inner" style={{marginBottom:"70px"}}>
                <div className="row align-items-center row-reverse">
                  <h3 className="text-center">Find Result</h3>
                  <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label for="exampleInputPassword1">Student ID</label>
                        <input type="text" className="form-control" id="stdid" onChange={(e) => setStdid(e.target.value)}/>
                      </div>
                      <div className="form-group">
                        <button type="submit" className="btn-common flat-btn btn-active mt-3">Submit</button>
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
