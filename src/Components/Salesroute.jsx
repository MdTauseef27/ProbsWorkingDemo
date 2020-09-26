import React, { useState } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { Displaysalesdetails } from "./Displaysalesdetails";

export const Salesroute = () => {
  const [salesname, setsalesname] = useState("Alex");
  const [location, setlocation] = useState("New York");
  const optionsalesname = ["Zubair", "Salman", "Khuddus", "Khawja"];
  //const defaultOptionsalesname = optionsalesname[0];
  const optionsaleslocation = ["Nanded", "Pune", "Mumbai", "Hyderabad"];
  //const defaultoptionsaleslocation = optionsaleslocation[0];
  const handleonselectsales = (e) => setsalesname(e.value);
  const handleonselectlocation = (e) => setlocation(e.value);
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <p>Select the Sales Name</p>
          </Col>
          <Col>
            <Dropdown
              options={optionsalesname}
              value={optionsalesname[0]}
              placeholder="Select an option"
              onChange={(e) => handleonselectsales(e)}
            />
          </Col>
          <Col>
            <p>Select Location</p>
          </Col>
          <Col>
            <Dropdown
              options={optionsaleslocation}
              value={optionsaleslocation[3]}
              placeholder="Select an option"
              onChange={handleonselectlocation}
            />
          </Col>
        </Row>
        <Displaysalesdetails salesname={salesname} location={location} />
      </Container>
    </div>
  );
};
