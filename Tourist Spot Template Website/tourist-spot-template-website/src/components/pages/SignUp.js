import React from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
      <div className="wrapper wrapper--w680">
        <div className="card card-4">
          <Link className="back-to-login" to="/">
            <i className="fa fa-long-arrow-left m-r-5" aria-hidden="true"></i>
            Back to Login
          </Link>
          <div className="card-body">
            <h2 className="title">Registration Form</h2>
            <form method="POST">
              <div className="row-signup row-space">
                <div className="col-2-signup">
                  <div className="input-group">
                    <label className="label">first name</label>
                    <input
                      className="input--style-4"
                      type="text"
                      name="first_name"
                    />
                  </div>
                </div>
                <div className="col-2-signup">
                  <div className="input-group">
                    <label className="label">last name</label>
                    <input
                      className="input--style-4"
                      type="text"
                      name="last_name"
                    />
                  </div>
                </div>
              </div>
              <div className="row-signup row-space">
                <div className="col-2-signup">
                  <div className="input-group">
                    <label className="label">Birthday</label>
                    <div className="input-group-icon">
                      <input
                        className="input--style-4 js-datepicker"
                        type="text"
                        name="birthday"
                      />
                      <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                    </div>
                  </div>
                </div>
                <div className="col-2-signup">
                  <div className="input-group">
                    <label className="label">Gender</label>
                    <div className="p-t-10">
                      <label className="radio-container m-r-45">
                        Male
                        <input type="radio" checked="checked" name="gender" />
                        <span className="checkmark"></span>
                      </label>
                      <label className="radio-container">
                        Female
                        <input type="radio" name="gender" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row-signup row-space">
                <div className="col-2-signup">
                  <div className="input-group">
                    <label className="label">Email</label>
                    <input
                      className="input--style-4"
                      type="email"
                      name="email"
                    />
                  </div>
                </div>
                <div className="col-2-signup">
                  <div className="input-group">
                    <label className="label">Phone Number</label>
                    <input
                      className="input--style-4"
                      type="text"
                      name="phone"
                    />
                  </div>
                </div>
              </div>

              <div className="p-t-15">
                <button
                  className="btn-signup btn--radius-2 btn--blue"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
