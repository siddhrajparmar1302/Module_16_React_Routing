import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
  margin-top: 20px;
  font-size: 18px;
  color: red;
`;

const Contact = () => {
  return (
    <Page>
      <h1>Contact Page</h1>
      <p>Welcome to Contact Us Page</p>
    </Page>
  );
};

export default Contact;
