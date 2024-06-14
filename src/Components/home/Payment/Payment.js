import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./payment.css";
const Payment = () => {
  return (
    <div>
      <Container className="text-center paymentContainer">
        <Row>
          <Col sm className="columnContainer">
            <i className="fa-solid fa-truck"></i>
            <div className="columnInfo">
              <h6>Fast Delivery</h6>
              <p>Start from $10</p>
            </div>
          </Col>
          <Col sm className="columnContainer">
          <i className="fa-solid fa-money-bill"></i>
            <div className="columnInfo">
              <h6>Money Guarantee</h6>
              <p>7 Days Back</p>
            </div>
          </Col>
          <Col sm className="columnContainer">
          <i className="fa-solid fa-clock"></i>
            <div className="columnInfo">
              <h6>365 Days</h6>
              <p>For free return</p>
            </div>
          </Col>
          <Col sm className="columnContainer">
          <i className="fa-solid fa-credit-card"></i>
            <div className="columnInfo">
              <h6>Payment</h6>
              <p>Secure system</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Payment;
