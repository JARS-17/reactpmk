import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";

const Testimonials = () => {
    const slider = useRef();
    let tx = 0;

  const slideForward = () => {
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img src={back_icon} alt="" className="back-btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Nama pertama</h3>
                  <span>Prodi,Angkatan</span>
                </div>
              </div>
              <p>
                PMK ITERA is an amazing community! The atmosphere is welcoming, and the community is truly inspiring. The services are uplifting and the staff are kind and helpful. Thank you PMK ITERA for providing a place of peace and
                spiritual growth.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Nama Kedua</h3>
                  <span>Prodi,Angkatan</span>
                </div>
              </div>
              <p>
                PMK ITERA is an amazing community! The atsmosphere is welcoming, and the service are uplifting. The staff and members are friendly and kind-hearted. I am grateful for the positive impact this community has had on my life.
                Thankyou, PMK ITERA!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Nama Ketiga</h3>
                  <span>Prodi,Angkatan</span>
                </div>
              </div>
              <p>PMK ITERA is a welcoming community with a strong sense of community. The services are uplifting and the staff kind and supportive. I am grateful for the positive impact they have had on my life. Thankyou PMK ITERA!</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
