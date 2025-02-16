import React from 'react';
import {Col, Container, Row, Card} from 'react-bootstrap';

interface PrayerProps {
  scrollDownRef: any;
}

const PrayerSection = (props: PrayerProps) => {
  return (
    <section className="prayer-section py-5" ref={props.scrollDownRef}>
      <Container className="my-3">
        <Row>
          <Col md={12}>
            <Card
              className="prayer-card"
              data-aos="fade-up"
              data-aos-duration="1000">
              <Card.Body data-aos="fade" data-aos-duration="2000">
                <img
                  src="/img/ico-flower.png"
                  alt="ico-flower"
                  className="ico-flower mb-5"
                />
                <Card.Title className="title text-center mt-5 mb-5">
                  بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
                </Card.Title>
                <Card.Text className="text text-center mb-5 px-5">
                  Kami berfirman, “Turunlah kamu semua dari surga! Lalu, jika benar-benar datang petunjuk-Ku kepadamu, siapa saja yang mengikuti petunjuk-Ku tidak ada rasa takut yang menimpa mereka dan mereka pun tidak bersedih hati.”
                </Card.Text>
                <Card.Text className="text text-center">
                  (QS. Al-Baqarah: 38)
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PrayerSection;
