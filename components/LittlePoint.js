import styled from "styled-components";

const Point = styled.span`
  display: inline-block;
  font-size: 0.8em;
  margin-left: 3px;
`;

const LittlePoint = props => <Point>▶</Point>;

export default LittlePoint;
