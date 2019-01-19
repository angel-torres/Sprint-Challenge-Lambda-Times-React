import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledTab = styled.div`
  padding: 0 20px;
  &:hover {
    background-color: black;
    color: white;
  }
`;

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/

    return (
      <StyledTab
        className={props.tab === props.selectedTab ? "tab active-tab" : "tab"}
        onClick={props.changeSelected}
      >
        {props.tab.toUpperCase()}
      </StyledTab>
    );

};
// Make sure you include PropTypes on your props.

Tab.propTypes = {
  tab: PropTypes.string,
  selectedTab: PropTypes.string,
  changeSelected: PropTypes.func
}

export default Tab;
