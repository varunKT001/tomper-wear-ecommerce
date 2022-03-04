import React from 'react';
import Wrapper from './styles';
import { socialLinks, footerLinks } from "../../utils/constants";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <Wrapper>
      <div className="footerSocialLinks">
        {socialLinks.map((link) => {
          const { url, icon, text } = link;
          return (
            <div key={text}>
              <a href={url}>{icon}</a>
            </div>
          );
        })}
      </div>
      <div className="footerLinks">
        {footerLinks.map((link) => {
          const { url, text, id } = link;
          return (
            <div className={id}>
              <Link to={url}>{text}</Link>
            </div>
          );
        })}
      </div>
      <hr />
      <h5>
        &copy; {new Date().getFullYear()}
        <span> Tomper Wear </span>
        - All Rights Reserved
      </h5>
    </Wrapper>
  );
};

export default Footer;
