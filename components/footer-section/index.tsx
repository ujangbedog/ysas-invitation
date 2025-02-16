import React from 'react';
import {Col, Container, Row, Button} from 'react-bootstrap';
import {faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGlobe} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

interface FooterProps {
  place: string;
  rundown: any;
}

const FooterSection = (props: FooterProps) => {
  return (
    <footer className="footer-section pt-5">
      <Container>
        <Row className="my-3">
          <Col md={12}>
            <div className="footer-content">
              <p className="mb-1 text-center text-white welcome-wd-place">
                Sampai Jumpa Di Hari Musyawarah Nanti!
              </p>
              <br />
              <div className="d-flex justify-content-center">
                <a href="/doc/RUNDOWN_ACARA.docx" target="_blank">
                  <Button
                    variant="light"
                    size="sm"
                    className="btn-open-invit">
                    Download Rundown Acara
                  </Button>
                </a>
              </div>
            </div>
            <div className="copyright">
              <div className="content">
                <p className="text-white text-center">
                  Build with &#10084; | &copy; YSAS Foundation | 2023
                </p>
                <div className="d-flex justify-content-center">
                  <a href="https://ysas-foundation.vercel.app/id" target="_blank">
                    <div className="link-sosmed">
                      <FontAwesomeIcon icon={faGlobe} color={'#414141'} />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterSection;
