import styled from "styled-components";

const StyledH1 = styled.h1`
  color: ${props => props.theme.white};
  font-family: ${props => props.theme.dawning};
  font-size: 3em;
  line-height: 1;
  margin: 0.5em 0;
`;

const Title = props => <StyledH1>{props.children}</StyledH1>;

export default Title;
