import React from 'react';
import {Button, Col, Container, Row} from 'react-bootstrap';

interface FrontCoverProps {
  femaleName: string;
  maleName: string;
  guestName: string;
  place: string;
  onClick: () => void;
}

const FrontCover = (props: FrontCoverProps) => {
  return (
    <section
      className="aycawd-fullbg"
      data-aos="fade-down"
      data-aos-duration="1000">
      <Container>
        <Row>
          <Col md={12} className="d-flex justify-content-center">
            <div
              className="mt-4 p-4"
              data-aos="fade-down"
              data-aos-duration="2000">
              <p className="mb-2 text-center text-white wd-title">
                Kami Mengundang
              </p>
              {props.place === 'kdr' ? (
                <h4 className="mb-1 text-center text-white wd-couplename font-weight-bold">
                  Untuk Melakukan Musyawarah Besar
                </h4>
              ) : (
                <h4 className="mb-1 text-center text-white wd-couplename font-weight-bold">
                  Untuk Melakukan Musyawarah Besar
                </h4>
              )}
              {props.guestName.length !== 0 && (
                <>
                  <p className="mb-1 text-center wd-for-txt">Kepada Yth. <br /> Bapak/Ibu/Saudara/I</p>
                  <p className="mb-3 text-center text-white wd-guestname">
                    {props.guestName}
                  </p>
                </>
              )}
              <br />
              <div className="d-flex justify-content-center">
                <Button
                  variant="light"
                  size="sm"
                  className="btn-open-invit"
                  onClick={props.onClick}>
                  Buka Undangan
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FrontCover;
