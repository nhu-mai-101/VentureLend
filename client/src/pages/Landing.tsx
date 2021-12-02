import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  width: 100vw;
  height: 60vh;
  background-image: url('https://content1.getnarrativeapp.com/static/453cc1b7-7a5d-45ad-873f-aaa41845d566/family-in-home-connecticut-candid.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`

const LandingPage = () => {
  return (
    <div>
      <Background />
    </div>
  )
}

export default LandingPage;
