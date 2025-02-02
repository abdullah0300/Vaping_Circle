import React from "react";
import Fixed_Component from "./Fixed_Component";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./Footer";

function VapesDeal({ categories, filters }) {
  return (
    <div>
      <Fixed_Component categories={categories} filters={filters} />

      <div className="mb-5" style={{ marginTop: 184 }}>
        <h1 class="fs-2 font-bold mb-5  text-center md:hidden block">
          Our Vape Deal
        </h1>
        <div class="md:block hidden">
          <Card className="rounded-none  text-white">
            <Card.Img
              src="https://ik.imagekit.io/p2slevyg1/nic_salts_5_for_11_vape_deal_slider_2_1920x1000.png?updatedAt=1705249286685"
              alt="Card image"
            />
            <Card.ImgOverlay>
              <Card.Title class="text-center p-5">
                <p class="fs-2 font-bold ">
                  Our <br /> Vape Deal
                </p>
              </Card.Title>
            </Card.ImgOverlay>
          </Card>
        </div>

        <Container className="mt-5 ">
          <Row>
            <Col sm={1}></Col>
            <Col sm={4}>
              <Card className="border-0">
                <Card.Img
                  variant="top"
                  class="transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-105 duration-150"
                  src="https://ik.imagekit.io/p2slevyg1/img.png?updatedAt=1705250304147"
                />
                <Card.Body>
                  <Card.Title>
                    <h2 class="text-center font-bold">Any 2 for £25</h2>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6}>
              <Card className="border-0">
                <Card.Img
                  variant="top"
                  class="relative rounded-2 mt-3 transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-105 duration-150"
                  src="https://ik.imagekit.io/p2slevyg1/b8b6b689-5311-4d70-a025-910c0db2491e.jpg?updatedAt=1705264393397"
                />
                {/* <Card.Img
                  variant="top"
                  class="absolute text-center"
                  width={450}
                  style={{ marginLeft: 91 }}
                  src="https://ik.imagekit.io/p2slevyg1/ICEDBERRYPEACH-FP_1024x1024-1-510x510-removebg-preview.png?updatedAt=1705258319627"
                /> */}
                <Card.Body>
                  <Card.Title>
                    <h2 class="text-center  font-bold">Any 5 for £20</h2>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={1}></Col>
          </Row>
        </Container>

        <Container className="mt-3">
          <Row class="">
            <Col sm={1}></Col>
            <Col sm={5}>
              <Card className="border-0">
                <Card.Img
                  variant="top"
                  class="relative rounded-2 transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-105 duration-150"
                  src="https://ik.imagekit.io/p2slevyg1/bfac1710-b5d2-45c1-b846-a73ca1d69eac.jpg?updatedAt=1705344789822"
                />
                {/* <Card.Img
                  class="absolute"
                  width={350}
                  style={{ marginLeft: 91 }}
                  src="https://ik.imagekit.io/p2slevyg1/images__6_-removebg-preview.png?updatedAt=1705261048159"
                /> */}
                <Card.Body>
                  <Card.Title>
                    <h2 class="text-center font-bold">Any 4 for £10</h2>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={5}>
              <Card className="border-0">
                <Card.Img
                  variant="top"
                  class="relative shadow-md transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-105 duration-150"
                  src="https://ik.imagekit.io/p2slevyg1/271b5ca0-98de-4f82-8aa9-5ff7d5f23a90.jpg?updatedAt=1705261645068"
                />
                {/* <Card.Img
                  variant="top"
                  class="absolute text-center"
                  width={350}
                  style={{ marginLeft: 91 }}
                  src=""
                /> */}
                <Card.Body>
                  <Card.Title>
                    <h2 class="text-center  font-bold">Any 3 for £20</h2>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={1}></Col>
          </Row>
        </Container>

        <Container className="mt-3 ">
          <Row>
            <Col sm={1}></Col>
            <Col sm={6}>
              <Card className="border-0">
                <Card.Img
                  variant="top"
                  class="shadow-md relative  transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-105 duration-150"
                  src="https://ik.imagekit.io/p2slevyg1/e88e8020-425b-41ce-b63c-79241a7af39e.jpg?updatedAt=1705262747477"
                />
                <Card.Body>
                  <Card.Title>
                    <h2 class="text-center font-bold">Any 3 for £20</h2>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}>
              <Card className="border-0">
                <Card.Img
                  variant="top"
                  class="relative shadow-md rounded-2 transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-105 duration-150"
                  width={295}
                  src="https://ik.imagekit.io/p2slevyg1/eliquid-classic-mint-shortfill-format-originals-by-eliquid-france-50ml-removebg-preview@2x.png?updatedAt=1705260396208"
                />

                <Card.Body>
                  <Card.Title>
                    <h2 class="text-center  font-bold">Any 4 for £20</h2>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={1}></Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </div>
  );
}

export default VapesDeal;
