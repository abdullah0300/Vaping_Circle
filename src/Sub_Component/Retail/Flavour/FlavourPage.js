import "../flavor.css";
import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import { data } from "./../../../data/Fdata.js";
import Fixed_Component from "../Fixed_Component.js";
import React, { useState } from "react";
import { Button, Drawer } from "antd";

function FlavourPage() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div class="mt-36 md:mt-64 mb-5">
        <Fixed_Component />{" "}
        <h1 class="fs-1 font-bold mb-5 text-center">Flavour</h1>
        <Container fluid class="flex justify-center items-center mb-5">
          {" "}
          <Row xs={2} md={3} class="gap-3 ">
            {data.categories.map((category) => (
              <Col
                id="content"
                key={category.id}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="item e6 relative flex justify-center items-center ">
                  <img
                    src={category.image}
                    alt=""
                    class="w-[21rem] h-[16rem] md:h-[19rem] object-cover"
                    style={{ borderRadius: "24px 24px 24px 24px" }}
                  />
                  <p class="absolute bottom-0 rounded-b-[24px] text-center w-full bg-[#ffffff40] py-3 md:px-[42px] text-[16px] md:text-[22px] tracking-wider font-semibold text-white">
                    {category.name}
                  </p>
                  <div className="text6 ">
                    <ul
                      class="flex flex-col"
                      style={{
                        boxShadow: "inset 0px -8px 20px 8px #dee2e67a",
                        borderRadius: "0px 0px 24px 24px",
                      }}
                    >
                      {category.items.map((item) => (
                        <>
                          <li
                            key={item.id}
                            class=" flex justify-around s items-center text-left border-b py-1"
                          >
                            <span>{item.name}</span>
                            <span class="bg-[#59a0b8] py-1 px-2 rounded-full text-white">
                              {item.qty}
                            </span>
                          </li>{" "}
                        </>
                      ))}
                      <button
                        class="flex items-baseline py-2 justify-center"
                        onClick={showDrawer}
                      >
                        Show All &#62;&#62;
                      </button>{" "}
                    </ul>{" "}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
        <Drawer
          title="Choose Your Flavour"
          class="p-0 font-semibold"
          onClose={onClose}
          open={open}
          style={{ padding: "0" }}
        >
          <ul class="p-0 ">
            <div class="mb-1 cursor-pointer">
              {" "}
              <li class="flex border-b justify-between items-center px-5 py-3">
                <span class="fs-6 tracking-wide">Apple Pie</span>
                <span class="bg-[#59A0B8] rounded-full px-2 py-1 text-white fs-6">
                  29
                </span>
              </li>
            </div>
            <div class=" mt-1 cursor-pointer">
              {" "}
              <li class="flex border-t border-b justify-between items-center px-5 py-3">
                <span class="fs-6 tracking-wide">Caramel</span>
                <span class="bg-[#59A0B8] rounded-full px-2 py-1 text-white fs-6">
                  34
                </span>
              </li>
            </div>
            <div class=" mt-1 cursor-pointer">
              {" "}
              <li class="flex border-t border-b justify-between items-center px-5 py-3">
                <span class="fs-6 tracking-wide">Cereal</span>
                <span class="bg-[#59A0B8] rounded-full px-2 py-1 text-white fs-6">
                  51
                </span>
              </li>
            </div>

            <div class=" mt-1 cursor-pointer">
              {" "}
              <li class="flex border-t border-b justify-between items-center px-5 py-3">
                <span class="fs-6 tracking-wide">Cake</span>
                <span class="bg-[#59A0B8] rounded-full px-2 py-1 text-white fs-6">
                  56
                </span>
              </li>
            </div>
            <div class=" mt-1 cursor-pointer">
              {" "}
              <li class="flex border-t border-b justify-between items-center px-5 py-3">
                <span class="fs-6 tracking-wide">Donut</span>
                <span class="bg-[#59A0B8] rounded-full px-2 py-1 text-white fs-6">
                  08
                </span>
              </li>
            </div>
            <div class=" mt-1 cursor-pointer">
              {" "}
              <li class="flex border-t border-b justify-between items-center px-5 py-3">
                <span class="fs-6 tracking-wide">Brownie</span>
                <span class="bg-[#59A0B8] rounded-full px-2 py-1 text-white fs-6">
                  38
                </span>
              </li>
            </div>
            <div class=" mt-1 cursor-pointer">
              {" "}
              <li class="flex border-t border-b justify-between items-center px-5 py-3">
                <span class="fs-6 tracking-wide">Honey</span>
                <span class="bg-[#59A0B8] rounded-full px-2 py-1 text-white fs-6">
                  76
                </span>
              </li>
            </div>
            <div class=" mt-1 cursor-pointer">
              {" "}
              <li class="flex border-t border-b justify-between items-center px-5 py-3">
                <span class="fs-6 tracking-wide">Jam</span>
                <span class="bg-[#59A0B8] rounded-full px-2 py-1 text-white fs-6">
                  24
                </span>
              </li>
            </div>
            <div class=" mt-1 cursor-pointer">
              {" "}
              <li class="flex border-t border-b justify-between items-center px-5 py-3">
                <span class="fs-6 tracking-wide">Pancake</span>
                <span class="bg-[#59A0B8] rounded-full px-2 py-1 text-white fs-6">
                  19
                </span>
              </li>
            </div>
            <div class=" mt-1 cursor-pointer">
              {" "}
              <li class="flex border-t border-b justify-between items-center px-5 py-3">
                <span class="fs-6 tracking-wide">Pastry</span>
                <span class="bg-[#59A0B8] rounded-full px-2 py-1 text-white fs-6">
                  39
                </span>
              </li>
            </div>
            <div class=" mt-1 cursor-pointer">
              {" "}
              <li class="flex border-t border-b justify-between items-center px-5 py-3">
                <span class="fs-6 tracking-wide">Short Cake</span>
                <span class="bg-[#59A0B8] rounded-full px-2 py-1 text-white fs-6">
                  12
                </span>
              </li>
            </div>
            <div class=" mt-1 cursor-pointer">
              {" "}
              <li class="flex border-t border-b justify-between items-center px-5 py-3">
                <span class="fs-6 tracking-wide">Popcorn</span>
                <span class="bg-[#59A0B8] rounded-full px-2 py-1 text-white fs-6">
                  11
                </span>
              </li>
            </div>
            <div class=" mt-1 cursor-pointer">
              {" "}
              <li class="flex border-t border-b justify-between items-center px-5 py-3">
                <span class="fs-6 tracking-wide">Rice Pudding</span>
                <span class="bg-[#59A0B8] rounded-full px-2 py-1 text-white fs-6">
                  65
                </span>
              </li>
            </div>
            <div class=" mt-1 cursor-pointer">
              {" "}
              <li class="flex border-t border-b justify-between items-center px-5 py-3">
                <span class="fs-6 tracking-wide">Toast</span>
                <span class="bg-[#59A0B8] rounded-full px-2 py-1 text-white fs-6">
                  343
                </span>
              </li>
            </div>
            <div class=" mt-1 cursor-pointer">
              {" "}
              <li class="flex border-t border-b justify-between items-center px-5 py-3">
                <span class="fs-6 tracking-wide">Caramel</span>
                <span class="bg-[#59A0B8] rounded-full px-2 py-1 text-white fs-6">
                  34
                </span>
              </li>
            </div>
          </ul>
        </Drawer>
        <Footer />
      </div>
      <Outlet />
    </div>
  );
}

export default FlavourPage;
