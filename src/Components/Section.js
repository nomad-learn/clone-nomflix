import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  &:not(:last-child) {
    margin-bottom: 50px;
  }
`;

const Title = styled.span`
  font-size: 23px;
  font-weight: 600;
`;

const Grid = styled.div`
  margin-top: 30px;
`;

const Section = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <Grid>{children}</Grid>
  </Container>
);

Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node
  ])
};

export default Section;
