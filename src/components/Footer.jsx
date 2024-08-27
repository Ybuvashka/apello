import {Wrapper} from '../assets/wrappers/Footer'
import logo from "../assets/images/logo.svg";

const services = [
  "iOS App Development",
  "Android App Development",
  "UX/UI App Design",
  "Custom Software Development",
  "Healthcare Software Development",
  "Education Software Development",
  "FinTech Software Development",
];

const offices = [
  "WeWork - George St, Sydney, Australia",
  "Sydney Startup Hub - Sydney, Australia",
  "WeWork - Edward St, Brisbane, Australia",
  "40 Bank St, Canary Wharf, London, UK",
  "WeWork - Paddington, West London, UK",
  "WeWork - Mission St, San Francisco, US",
];

const contact = [
  "Email:hello@appello.com.au",
  "Sydney:(+61) 027 202 5164",
  "London: (+44) 203 608 3126",
  "San Francisco: (+1) 628 280 6518",
];

const FooterItem = ({ title, list }) => {
  return (
    <div className="footer__list">
      <h5 className="footer__item-h">{title}</h5>
      {list.map((item, index) => (
        <p className="footer__item-p" key={index}>
          {item}
        </p>
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <Wrapper className='full-width'>
      <div className="footer__content fixed-width">
          <div className="footer__trusted-by">
            <p>Trusted by businesses worldwide.</p>
            <img src={logo} alt="logo" />
          </div>
          <div className="footer__data">
            <FooterItem title="Our services" list={services} />
            <FooterItem title="Our offices" list={offices} />
            <FooterItem title="Contact us" list={contact} />
          </div>
          <div className="footer__down">
            <p>© Appello Pty. Ltd.{new Date().getFullYear()}</p>
            <div className="footer__links">
              <a href="#" className="footer__link-item">
                Facebook
              </a>
              <a href="#" className="footer__link-item">
                Instagram
              </a>
              <a href="#" className="footer__link-item">
                Dribbble
              </a>
              <a href="#" className="footer__link-item">
                Linkedin
              </a>
            </div>
            <p>Sitemap</p>
          </div>
        </div>
    </Wrapper>
  )
}
export default Footer