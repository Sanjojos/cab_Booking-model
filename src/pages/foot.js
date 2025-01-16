import React from "react";
import "./foot.css";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaGoogle, FaLinkedin, FaGithub } from "react-icons/fa";
import { RiTwitterLine } from "react-icons/ri";

function Foot() {
  return (
    <footer className="text-center text-lg-start bg-body-tertiary text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <b>Get connected with us on social networks:</b>
        </div>

        <div>
          <a href="!#" className="me-4 text-reset">
            <CiFacebook />
          </a>
          <a href="!#" className="me-4 text-reset">
            <RiTwitterLine />
          </a>
          <a href="!#" className="me-4 text-reset">
            <FaGoogle />
          </a>
          <a href="!#" className="me-4 text-reset">
            <FaInstagram />
          </a>
          <a href="!#" className="me-4 text-reset">
            <FaLinkedin />
          </a>
          <a href="!#" className="me-4 text-reset">
            <FaGithub />
          </a>
        </div>
      </section>

      <section className="mt-3"> {/* Reduce the top margin for tighter spacing */}
        <div className="container text-center text-md-start">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Hey.Taxi
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <b>cab service in Thrissur</b>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3"></i> Thrissur
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i> info@example.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> +91 9205718860
              </p>
              <p>
                <i className="fas fa-print me-3"></i> +91 920571841
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-3"> {/* Reduce padding for tighter spacing */}
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="!#">
          Hey.Taxi
        </a>
      </div>
    </footer>
  );
}

export default Foot;
