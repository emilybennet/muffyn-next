import React from "react";
import NProgress from "nprogress";
import styled from "styled-components";

import MuffynLogoSvg from "../components/MuffynLogoSvg";
import Title from "../components/Title";
import Button from "../components/Button";
import LittlePoint from "../components/LittlePoint";

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  svg {
    height: auto;
    width: 100px;
    path,
    polygon {
      fill: white;
    }
  }
  img {
    max-width: 250px;
  }
`;

const StyledP = styled.p`
  line-height: 1.4em;
  margin-bottom: 1em;
  max-width: 300px;
`;

const FileInput = styled.input`
  height: 0;
  overflow: hidden;
  width: 0;
`;

const FileInputLabel = styled.label`
  border: 2px solid white;
  border-radius: 2px;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-size: 0.8em;
  letter-spacing: 0.09em;
  outline: none;
  padding: 1em 1.4em 1em 1.6em;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.2s;
  &:hover {
    box-shadow: inset 0 0 0 3px white;
  }
`;

const UploadForm = props => (
  <form
    onSubmit={async e => {
      e.preventDefault();
    }}
  >
    <FileInput
      type="file"
      id="file"
      name="file"
      required
      onChange={props.processAvatar}
    />
    <FileInputLabel htmlFor="file">
      Select A Photo <LittlePoint />
    </FileInputLabel>
  </form>
);

const CtaFooter = props => (
  <footer style={{ marginTop: "2em" }}>
    <Button text="Create Another Avatar" onClick={props.clearUpload} />
    <Button text="Festival Home" url="/" />
  </footer>
);

class CreateAvatarPage extends React.Component {
  state = {
    image: null
  };

  processAvatar = async e => {
    NProgress.start();
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "muffyn-avatar-overlay");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/bronycon/image/upload",
      {
        method: "POST",
        body: data
      }
    );
    const file = await res.json();
    this.setState(
      {
        image: file.secure_url
      },
      () => NProgress.done()
    );
  };

  clearUpload = () => {
    this.setState({
      image: false
    });
  };

  render() {
    return (
      <Container>
        <MuffynLogoSvg />
        <Title>Avatar Creater</Title>
        <StyledP>
          Spread the muffin by adding one to your social media avatar.
        </StyledP>
        {!this.state.image && <UploadForm processAvatar={this.processAvatar} />}
        {this.state.image && <img src={this.state.image} />}
        {this.state.image && <CtaFooter clearUpload={this.clearUpload} />}
      </Container>
    );
  }
}

export default CreateAvatarPage;
