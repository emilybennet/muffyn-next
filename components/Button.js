import Link from "next/link";
import styled from "styled-components";
import LittlePoint from "./LittlePoint";

const Anchor = styled.a`
  background: transparent;
  border: 2px solid white;
  border-radius: 2px;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-size: 0.8em;
  letter-spacing: 0.09em;
  padding: 1em 1.4em 1em 1.6em;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.2s;
  &:hover {
    box-shadow: inset 0 0 0 3px white;
  }

  &:not(:last-child) {
    margin-bottom: 2em;
    margin-right: 2em;
  }
`;

const Button = ({ text, url = false, ...props }) => {
  if (url)
    return (
      <Link href={url} passHref>
        <Anchor>
          {text} <LittlePoint />
        </Anchor>
      </Link>
    );

  return (
    <Anchor as="span" {...props}>
      {text} <LittlePoint />
    </Anchor>
  );
};

export default Button;
