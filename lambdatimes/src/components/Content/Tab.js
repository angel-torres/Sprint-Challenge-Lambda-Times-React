import React from 'react';
import styled from 'styled-components';

const StyledTab = styled.div`
  padding: 0 20px;
  &:hover {
    background-color: black;
    color: white;
  }
`;

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/

  render() {
    return (
      <StyledTab
        className={this.props.tab === this.props.selectedTab ? "tab active-tab" : "tab"}
        onClick={this.props.changeSelected}
      >
        {this.props.tab.toUpperCase()}
      </StyledTab>
    );
  }

};
// Make sure you include PropTypes on your props.

export default Tab;
