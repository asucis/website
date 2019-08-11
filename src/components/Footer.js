import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

function Footer() {
  return (
    <footer>
      <div className="address">
        Visit us:
        <br />
        <br />
        RM 225J, Student Pavilion,
        <br />
        400 E Orange St,
        <br />
        Tempe, Arizona 85281.
      </div>
      <div className="social-links">
        <div className="icon">
          <a
            href="https://facebook.com/asucis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={['fab', 'facebook-f']} />
          </a>
        </div>
        <div className="icon">
          <a
            href="https://twitter.com/asu_cis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </a>
        </div>
        <div className="icon">
          <a
            href="https://www.instagram.com/asucis/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={['fab', 'instagram']} />
          </a>
        </div>
        <div className="icon">
          <a href="/weixin">
            <FontAwesomeIcon icon={['fab', 'weixin']} />
          </a>
        </div>
      </div>
      <div className="copyright-text">
        Arizona State University © Coalition of International Students. 2019.
        All rights reserved.
      </div>
      <div className="credits">Built by dickwyn</div>
    </footer>
  );
}

export default Footer;