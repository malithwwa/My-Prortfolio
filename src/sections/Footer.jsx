import { socialImgs } from "../constants";

const Footer = () => {
  return (
      <div className="w-full max-w-[1520px] md:px-20 px-5 mx-auto">

    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <div key={index} className="icon">
              <img src={socialImg.imgPath} alt="social icon" />
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Malith Anjana. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
      </div>
  );
};

export default Footer;
