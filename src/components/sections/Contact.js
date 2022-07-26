import React from "react";

import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h3>Connect With Me</h3>
      <div className="connect-links">
        <a href="https://www.linkedin.com/in/linda-k-westphal-1aba9a1b5/">
          <SiLinkedin />
        </a>
        <a href="https://github.com/lindakw">
          <SiGithub />
        </a>
        <a href="mailto:lindakwestphal@gmail.com">
          <SiGmail />
        </a>
      </div>
    </section>
  );
};

export default Contact;
