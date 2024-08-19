import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2b70d0be-a671-4e20-8d71-5213e5e7841d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Kirimkan kami pesan <img src={msg_icon} alt="" />
        </h3>
        <p> Kirimkan kami pesan dan kami akan membalas secepatnya</p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            Contact@PMKITERA
          </li>
          <li>
            <img src={phone_icon} alt="" />
            0813-7133-6198
          </li>
          <li>
            <img src={location_icon} alt="" />
            Institut Teknologi Sumatera, Lampung Selatan,
            <br /> Indonesia
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Nama Anda</label>
          <input type="text" name="name" placeholder="Enter your name" required />
          <label>No Hp</label>
          <input type="tel" name="phone" placeholder="Enter your mobile number" required />
          <label>Ketik pesanmu disini</label>
          <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>
          <button type="submit" className="btn dark-btn">
            Kirim <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
