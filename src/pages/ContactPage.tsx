import "../styles/pages/ContactPage.css";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import CarouselSlider from "../components/CarouselSlider";

const ContactPage: React.FC = () => {
  return (
    <div>
      <CarouselSlider />
      <h2>
        <span className="mod"> Contact Page</span>
      </h2>

      <div className="border2">
        <h2>Contact Address:</h2>
        <p className="contact-address">
          Full Gospel Pentecostal church, 174- church street,
        </p>
        <p className="contact-address">
          Vetturnimadam (P.O), Nagercoil – 629003
        </p>
        <p className="contact-address">Kanyakumari District, Tamilnadu.</p>
        <p>
          Phone: <a href="tel:+91-4652-229379">+91-4652-229379</a>
        </p>
        <p>
          Mobile: <a href="tel:+91-9944670582">+91-9944670582</a>,
          <a href="tel:+91-9790526876">+91-9790526876</a>
        </p>
        <div>
          <label className="my-label">Name:</label>
          <input type="text" className="my-textbox" /> <br></br>
          <label className="my-label">Gender:</label>
          <input type="radio" name="gender" value="M" />
          <input type="radio" name="gender" value="F" />
          <br></br>
        </div>
        <div>
          <label htmlFor="Email">
            Email <span className="spans">*</span>
          </label>
          <input type="Email" name="email" id="Email" />
          <br></br>
          <label htmlFor="contact">
            Contact <span className="spans">*</span>
          </label>
          <input type="text" name="contact" id="contact" />
          <br></br>
          <input type="textarea" name="message" id="message" />
          <br></br>
          <div>
            <a href="https://goo.gl/maps/kzGJ8JDvhnaQw1hJ6">View Map</a>

            <a href="https://www.facebook.com/">
              <FacebookIcon />
            </a>

            <a href="https://www.instagram.com/accounts/login/">
              <InstagramIcon />
            </a>

            <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
              <span className="email-icon">
                <EmailIcon />
              </span>
            </a>

            <a href="https://twitter.com/">
              <TwitterIcon />
            </a>
          </div>
          <div className="border3">
            <input
              type="submit"
              name="sub"
              id="sub"
              value="Send"
              className="buttonn"
            />

            <input
              type="reset"
              name="res"
              id="res"
              value="Reset"
              className="buttonn"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
