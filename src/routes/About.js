import React from "react";
import styled, { createGlobalStyle, css, keyframes } from "styled-components";
import "./About.css";

const GlobalStyle = createGlobalStyle`
div{
    padding: 10px;
  }
`;

const ColorPen = css`
  border-bottom: 3px solid #e7fa11;
  box-shadow: inset 0 -4px 0 #e7fa11;
`;

function About() {
  return (
    <div className="about__container">
      <GlobalStyle />
      <Span>
        “Freedom is the freedom to say that two plus two make four. If that is
        granted, all else follows.”
      </Span>
      <Anchor href="https://ko.wikipedia.org/wiki/%EC%A1%B0%EC%A7%80_%EC%98%A4%EC%9B%B0">
        <Span writer>− George Orwell, 1984</Span>
      </Anchor>
    </div>
  );
}

const Span = styled.span`
  color: ${props => (props.writer ? "#22d022" : "darkgray")};
  ${props => {
    if (props.writer) {
      return css`
        animation: ${Blinker} 1s infinite;
      `;
    }
  }};
  ${ColorPen}
`;

const Blinker = keyframes`
  0% { opacity: 0; } 
  50% { opacity: 1; } 
  100% { opacity: 0; }
`;

const Anchor = Span.withComponent("a");

export default About;
