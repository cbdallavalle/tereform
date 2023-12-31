import styled, {keyframes} from 'styled-components'
import backgroundImg from '../../assets/colorado-fall.jpg'
import {colors, fonts} from '../../constants/cssConstants'
import {SectionWrapper} from '../PageComponents/Section/Section'

const rotationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    transform-origin: center;
  }
  100% {
    transform: rotate(359deg);
    transform-origin: center;
  }
  
`

export const DivTitle = styled.div`
  ${SectionWrapper} {
    padding-bottom: 0;
  }
`

export const DivTitleBackground = styled.div`
  display: flex;
    justify-content: center;
    align-items: center;
  position: relative;
  flex-grow: 1;
  background-image: url(${backgroundImg});
    background-size: cover;
    background-attachment: fixed;
    background-position: top;
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
  hr {
    width: 100%;
    border: none;
    height: 5px;
    background-color: ${colors.white};
  }
  p {
    font-family: ${fonts.abel};
    width: 100%;
    color: ${colors.white};
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
    border-radius: 100%;
    height: calc(100% + 10px);
    position: absolute;
    top: 0;
    right: 26%;
    animation: ${rotationAnimation} 50s infinite linear;
  }
`