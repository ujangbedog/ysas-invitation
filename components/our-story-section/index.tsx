import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';

interface OurStoryProps {
  storyData: any;
  isMobile: boolean;
}

const OurStorySection = (props: OurStoryProps) => {
  return (
    <section className="story-section py-5" style={{overflow: 'hidden'}}>
      <Container className="my-3">
        <h3
          className="title text-center mb-4"
          data-aos="fade-up"
          data-aos-duration="1000">
          Rundown Acara
        </h3>
        <br />
        {!props.isMobile ? (
          <>
            <Row className="py-3 mb-5">
              <Col md={6}>
                <img
                  src="/img/pray.png"
                  className="d-block img-holder"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                />
              </Col>
              <Col md={6}>
                <div
                  className="content py-3 my-4"
                  data-aos="fade-left"
                  data-aos-duration="2000">
                  <h4> {props.storyData.satu.title}</h4>
                  <p>{props.storyData.satu.desc}</p>
                </div>
              </Col>
            </Row>
            <Row className="py-3 mb-5">
              <Col md={6}>
                <div
                  className="content py-3 my-4"
                  data-aos="fade-right"
                  data-aos-duration="2000">
                  <h4> {props.storyData.dua.title}</h4>
                  <p>{props.storyData.dua.desc}</p>
                </div>
              </Col>
              <Col md={6}>
                <img
                  src="/img/coffee-break.png"
                  className="d-block img-holder"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                />
              </Col>
            </Row>
            <Row className="py-3 mb-5">
              <Col md={6}>
                <img
                  src="/img/praying.png"
                  className="d-block img-holder"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                />
              </Col>
              <Col md={6}>
                <div
                  className="content py-3 my-4"
                  data-aos="fade-left"
                  data-aos-duration="2000">
                  <h4> {props.storyData.tiga.title}</h4>
                  <p>{props.storyData.tiga.desc}</p>
                </div>
              </Col>
            </Row>
            <Row className="py-3 mb-5">
              <Col md={6}>
                <div
                  className="content py-3 my-4"
                  data-aos="fade-right"
                  data-aos-duration="2000">
                  <h4> {props.storyData.empat.title}</h4>
                  <p>{props.storyData.empat.desc}</p>
                </div>
              </Col>
              <Col md={6}>
                <img
                  src="/img/event.png"
                  className="d-block img-holder"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                />
              </Col>
            </Row>
            <Row className="py-3 mb-5">
              <Col md={6}>
                <img
                  src="/img/end.png"
                  className="d-block img-holder"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                />
              </Col>
              <Col md={6}>
                <div
                  className="content py-3 my-4"
                  data-aos="fade-left"
                  data-aos-duration="2000">
                  <h4> {props.storyData.lima.title}</h4>
                  <p>{props.storyData.lima.desc}</p>
                </div>
              </Col>
            </Row>
            <Row className="py-3 mb-5">
              <Col md={6}>
                <div
                  className="content py-3 my-4"
                  data-aos="fade-right"
                  data-aos-duration="2000">
                  <h4> {props.storyData.enam.title}</h4>
                  <p>{props.storyData.enam.desc}</p>
                </div>
              </Col>
              <Col md={6}>
                <img
                  src="/img/dinner.png"
                  className="d-block img-holder"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                />
              </Col>
            </Row>
          </>
        ) : (
          <>
            <Row>
              <Col md={12}>
                <div
                  className="content"
                  data-aos="fade-up"
                  data-aos-duration="2000">
                  <img
                    src="/img/pray.png"
                    className="d-block img-holder mb-4"
                  />
                  <h4 className="mb-4">
                     {props.storyData.satu.title}
                  </h4>
                  <p className="mb-5">{props.storyData.satu.desc}</p>
                </div>
              </Col>
              <Col md={12}>
                <div
                  className="content py-4"
                  data-aos="fade-up"
                  data-aos-duration="2000">
                  <img
                    src="/img/coffee-break.png"
                    className="d-block img-holder mb-4"
                  />
                  <h4 className="mb-4">
                     {props.storyData.dua.title}
                  </h4>
                  <p className="mb-5">
                    {props.storyData.dua.desc} &#129315;
                  </p>
                </div>
              </Col>
              <Col md={12}>
                <div
                  className="content py-4"
                  data-aos="fade-up"
                  data-aos-duration="2000">
                  <img
                    src="/img/praying.png"
                    className="d-block img-holder mb-4"
                  />
                  <h4 className="mb-4">
                     {props.storyData.tiga.title}
                  </h4>
                  <p className="mb-5">{props.storyData.tiga.desc}</p>
                </div>
              </Col>
              <Col md={12}>
                <div
                  className="content py-4"
                  data-aos="fade-up"
                  data-aos-duration="2000">
                  <img
                    src="/img/event.png"
                    className="d-block img-holder mb-4"
                  />
                  <h4 className="mb-4">
                     {props.storyData.empat.title}
                  </h4>
                  <p className="mb-5">{props.storyData.empat.desc}</p>
                </div>
              </Col>
            </Row>
            <Row className="py-3 mb-5">
              <Col md={6}>
                <img
                  src="/img/end.png"
                  className="d-block img-holder"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                />
              </Col>
              <Col md={6}>
                <div
                  className="content py-3 my-4"
                  data-aos="fade-left"
                  data-aos-duration="2000">
                  <h4> {props.storyData.lima.title}</h4>
                  <p>{props.storyData.lima.desc}</p>
                </div>
              </Col>
            </Row>
            <Row className="py-3 mb-5">
              <Col md={6}>
                <div
                  className="content py-3 my-4"
                  data-aos="fade-right"
                  data-aos-duration="2000">
                  <h4> {props.storyData.enam.title}</h4>
                  <p>{props.storyData.enam.desc}</p>
                </div>
              </Col>
              <Col md={6}>
                <img
                  src="/img/dinner.png"
                  className="d-block img-holder"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                />
              </Col>
            </Row>
          </>
        )}
      </Container>
    </section>
  );
};

export default OurStorySection;
