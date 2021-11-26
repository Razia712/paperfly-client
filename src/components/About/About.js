import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
const About = () => {
  return (
    <div>
      <Container>
        <Zoom>
          <h2 className="text-center text-dark mb-4">
            WELCOME TO PAPERFLY_TRAVELLER
          </h2>
        </Zoom>
        <Row>
          <Col md className="pe-3">
            <Bounce bottom>
              <h5 className="text-dark">About Us</h5>
              <p className="text-muted">
                ShareTrip is the country’s first and leading online travel
                aggregator. Initially started with the name Travel Booking BD,
                we had a dream to make travel easier for people. And that is
                what we did since our inception. And now with our new,
                innovative, easy to use app, travel services are on your palm.
                The dynamic app lets you book your flight, find your perfect
                holiday from our thousands of holiday packages around the globe.
              </p>
              <p className="text-muted">
                ShareTrip is revolutionizing the way we book travel services.
                With ShareTrip’s website and mobile app, booking your flight,
                hotel or holiday become more fun that you would think. With
                exciting games and real rewards like free trips and air ticket
                makes ShareTrip more fun to use! You can also win TripCoin by
                playing games and booking service from ShareTrip, that you can
                use to avail discount. We have more than 100 employees, who are
                all experts in their respective fields. They have the experience
                and professionalism to understand each and every customer's
                requirements and fulfill it. With today’s era of digitalization,
                where everyone has a lot of information and choice in hand, our
                clients still choose us. Because we provide the best rates and
                wide range of choices for your accommodations and travel plans.
              </p>
            </Bounce>
          </Col>
          <Col md className="pe-3">
            <Bounce bottom>
              <h5 className="text-white">Our Vision</h5>
              <p className="text-muted">
                To become the largest travel and best travel agency our motto.
              </p>
              <h5 className="text-white">Our Mission</h5>
              <p className="text-muted">
                You can also win TripCoin by playing games and booking service
                from ShareTrip, that you can use to avail discount. We have more
                than 100 employees, who are all experts in their respective
                fields.
              </p>
            </Bounce>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md>
            <Bounce bottom>
              <h5 className="text-white">Sign up for our monthly newsletter</h5>
              <p className="text-muted">
                Be the first to know about news and updates.We never share you
                mail with others. Trust us!
              </p>
            </Bounce>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
