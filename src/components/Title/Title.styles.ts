import styled, {keyframes} from 'styled-components'
import backgroundImg from '../../assets/colorado-fall.jpg'
import {colors, fonts} from '../../constants/cssConstants'

const rotationAnimation = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(359deg);
  }
`

export const DivTitle = styled.div`
  position: relative;
  height: 100vh;
  min-height: 400px;
  /* background-image: url(${backgroundImg});
    background-size: cover; */
    /* background-attachment: fixed; */
    /* background-position: top; */
`

export const DivOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to bottom right,#161616d9,#ffffff00);
`

export const DivTitleWrapper = styled.div`
  z-index: 1;
  width: 80vw;
  margin: auto;
  hr {
    width: 100%;
    border: none;
    height: 5px;
    background-color: ${colors.boneWhite};
  }
  p {
    font-family: ${fonts.abel};
    width: 100%;
    color: ${colors.boneWhite};
    margin: 0;
    font-size: 25px;
    font-weight: bold;
    font-style: italic;
    text-align: right;
    @media (max-width: 500px) {
      font-size: 20px;
    }
    @media (max-width: 400px) {
      font-size: 18px;
    }
  }
`

export const DivTitleImages = styled.div`
  position: relative;
  display: flex;
  img {
    max-width: 100%;
    height: 100%;
  }
  img:last-of-type {
    width: 15%;
    height: calc(100% + 3px);
    position: absolute;
    top: 0;
    right: 25.5%;
    animation: ${rotationAnimation} 20s infinite linear;
  }
`