import React from 'react';
import styled from 'styled-components';

import backgroundImage from '../blue_texture.jpg'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width:100%;
  background-color: #0d19a3;
  background-image: url(${backgroundImage});
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  padding: 0px 30px;
  box-sizing: border-box;
  text-transform: uppercase;
`;

const Title = styled.h1`
  font-size: 50px;
  text-align: center;
`;

const Thanks = () => (
  <Wrapper>
    <Title>See you at the disco<br />👶🏻🐻💃</Title>
    <div title="Add to Calendar" className="addeventatc">
      Add to Calendar
      <span className="start">06/07/2018 07:00 PM</span>
      <span className="end">06/07/2018 11:59 PM</span>
      <span className="timezone">Africa/Johannesburg</span>
      <span className="title">Chantals super suprise disco party</span>
      <span className="description">Chantals 30th Birthday @ House of H</span>
      <span className="location">112 Loop Street, Cape Town, 8001</span>
    </div>
  </Wrapper>
)

export default Thanks