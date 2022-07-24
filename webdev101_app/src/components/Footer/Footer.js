import React, { useState } from "react";
import "./Footer.css";
import Modal from "react-modal";

function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(0);

  return (
    <div className="footer-container">
      {/* <div className="footer-shaow">dd</div> */}
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="social-icons">
            <ul className="social-icon">
              <li className="social-icon">
                <a
                  href="mailto:jang128@purdue.edu"
                  target="_blank"
                  rel="noreferrer"
                  className="mail"
                >
                  <i classname="email" class="far fa-envelope"></i>
                </a>
              </li>
              <li className="social-icon">
                <div className="kakaotalk" target="_blank" rel="noreferrer">
                  <img
                    src="/images/kakaotalk.png"
                    alt="kakaotalk-logo"
                    className="kakaotalk"
                    onClick={() => setIsModalOpen(1)}
                  ></img>
                </div>
                <Modal
                  isModalOpen={1}
                  isOpen={isModalOpen}
                  onRequestClose={() => setIsModalOpen(0)}
                  className="kakaotalk-modal"
                  closeTimeoutMS={200}
                >
                  <img
                    src="/images/kakaotalk-qrcode.png"
                    alt="kakaotalk-qrcode"
                    className="kakaotalk-modal-img"
                  ></img>
                </Modal>
              </li>
              <li className="social-icon">
                <a
                  href="https://www.facebook.com/profile.php?id=100003819070404"
                  className="facebook"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fab fa-facebook" />
                </a>
              </li>
              <li className="social-icon">
                <a
                  href="https://www.instagram.com/kjang_hochul/"
                  className="instagram"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fab fa-instagram" />
                </a>
              </li>
              <li className="social-icon">
                <div className="weixin" target="_blank" rel="noreferrer">
                  <i class="fab fa-weixin" onClick={() => setIsModalOpen(2)} />
                </div>
              </li>
              <li className="social-icon">
                <a
                  href="https://www.linkedin.com/in/kyochul-jang-93b263208/"
                  className="linked-in"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fab fa-linkedin"></i>
                </a>
              </li>
              <li className="social-icon">
                <a
                  href="https://github.com/OfficerChul"
                  className="github"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fab fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
          <small className="website-rights">KCJ © 2022</small>
        </div>
      </section>
    </div>
  );
}
export default Footer;
