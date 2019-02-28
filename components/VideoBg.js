import styled from "styled-components";

const StyledVideo = styled.video`
  height: 100%;
  left: 0;
  object-fit: cover;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;

  @media (max-aspect-ratio: 16/9) {
    width: 300%;
    left: -100%;
  }
`;

const VideoBg = props => (
  <StyledVideo
    autoPlay
    loop
    muted
    playsInline
    webkitPlaysInline
    poster="/static/muffyn-videobg-cover.jpg"
  >
    <source
      src="/static/muffyn-videobg.webm"
      type='video/webm;codecs="vp8, vorbis"'
    />
    <source
      src="/static/muffyn-videobg-low.mp4"
      type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'
    />
  </StyledVideo>
);

export default VideoBg;
