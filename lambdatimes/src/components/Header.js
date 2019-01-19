import React from 'react';
import styled from 'styled-components';


// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;
`;

const StyledDate = styled.span`
  margin-left: 25px;
  flex: 1;
`;

const StyledTemp = styled.span`
  text-align: right;
  margin-right: 25px;
  flex: 1;
`;

const StyledHeaderH1 = styled.h1`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`;

const Header = () => {
  return (
    <StyledHeader className="header">
      <StyledDate className="date">SMARCHO 32, 2018</StyledDate>
      <StyledHeaderH1>Lambda Times</StyledHeaderH1>
      <StyledTemp className="temp">98°</StyledTemp>
    </StyledHeader>
  )
}

export default Header