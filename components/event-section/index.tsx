import React from 'react';
import {Col, Container, Row, Card, Button} from 'react-bootstrap';

interface EventProps {
  eventTlg: any;
  eventKdr: any;
  isMobile: boolean;
  place: string;
  session: string;
}

const EventSection = (props: EventProps) => {
  const valSession = parseInt(props.session);

  const cardEvent = (place: any) => {
    if (place === 'kdr') {
      return (
        <>
          <Col md={6}>
            <Card
              className="event-card my-3"
              data-aos="fade-right"
              data-aos-duration="1000">
              <Card.Body data-aos="fade" data-aos-duration="2000">
                <img src="/img/calendar.png" className="ico-ring mb-4" />
                <Card.Title className="title mt-2 mb-4">Tanggal dan Waktu</Card.Title>
                <Card.Text className="text mb-3">
                  {props.eventKdr.start.format('dddd, DD MMMM YYYY')}
                </Card.Text>
                <Card.Text className="text-small">
                  {props.eventKdr.start.format('HH:mm')} WIB -{' '}
                  Selesai
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card
              className="event-card my-3"
              data-aos="fade-left"
              data-aos-duration="1000">
              <Card.Body data-aos="fade" data-aos-duration="2000">
                <img src="/img/ico-location.png" className="ico-ring mb-4" />
                <Card.Title className="title mt-2 mb-4">Lokasi</Card.Title>
                <Card.Text className="text mb-3">
                  Rumah Mempelai Wanita (Kawan Jaya)
                </Card.Text>
                <Card.Text className="text-small">
                  Desa Tawangsari RT 02 RW 03, Kec. Kedungwaru, Kab.
                  Tulungagung, Jawa Timur 66227
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <a href={props.eventTlg.location} target="_blank">
                    <Button
                      variant="light"
                      size="sm"
                      className="btn-open-invit">
                      View Map
                    </Button>
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </>
      );
    } else {
      return (
        <>
          <Col md={6}>
            <Card
              className="event-card my-3"
              data-aos="fade-right"
              data-aos-duration="1000">
              <Card.Body data-aos="fade" data-aos-duration="2000">
                <img src="/img/calendar.png" className="ico-ring mb-4" />
                <Card.Title className="title mt-2 mb-4">Tanggal dan Waktu</Card.Title>
                <Card.Text className="text mb-3">
                  {props.eventKdr.start.format('dddd, DD MMMM YYYY')}
                </Card.Text>
                <Card.Text className="text-small">
                  {props.eventKdr.start.format('HH:mm')} WIB -{' '}
                  Selesai
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card
              className="event-card my-3"
              data-aos="fade-left"
              data-aos-duration="1000">
              <Card.Body data-aos="fade" data-aos-duration="2000">
                <img src="/img/ico-location.png" className="ico-ring mb-4" />
                <Card.Title className="title mt-2 mb-4">Lokasi</Card.Title>
                <Card.Text className="text mb-3">
                  Mesjid Al-Ikhlas
                </Card.Text>
                <Card.Text className="text-small">
                  Dsn pangjeleran RT 03/04, Desa, Cigintung, Kec. Cisitu, Kabupaten Sumedang
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <a href={props.eventTlg.location} target="_blank">
                    <Button
                      variant="light"
                      size="sm"
                      className="btn-open-invit">
                      Lihat Map
                    </Button>
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </>
      );
    }
  };

  return (
    <section className="event-section py-5" style={{overflow: 'hidden'}}>
      <Container className="my-3">
        <Row className="justify-content-center">
          <Col md={12}>
            <div data-aos="fade-up" data-aos-duration="1000" className="mb-4">
              <h3 className="head-title text-center">
                السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
              </h3>
              <h3 className="head-title text-center">
                Assalamu’alaikum Warahmatullahi Wabarakatuh
              </h3>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
              {!props.isMobile ? (
                <p className="head-text text-center mb-4">
                  Dengan memohon Rahmat Allah Subhanahu wa Ta’ala dan dengan
                  segenap kerendahan hati,
                  <br />
                  perkenankanlah kami mengundang Bapak/Ibu/Saudara/i untuk hadir
                  di acara pernikahan kami
                  <br />
                  yang akan dilaksanakan pada:
                </p>
              ) : (
                <p className="head-text text-center mb-4">
                  Dengan memohon Rahmat Allah Subhanahu wa Ta’ala dan dengan
                  segenap kerendahan hati, perkenankanlah kami mengundang
                  Bapak/Ibu/Saudara/i untuk hadir di acara pernikahan kami yang
                  akan dilaksanakan pada:
                </p>
              )}
            </div>
          </Col>
          {cardEvent(props.place)}
        </Row>
      </Container>
    </section>
  );
};

export default EventSection;
