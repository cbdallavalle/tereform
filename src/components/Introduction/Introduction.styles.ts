import styled from 'styled-components'
import {colors, fonts} from '../../constants/cssConstants'

export const DivIntroduction = styled.div`
  position: relative;
  flex-grow: 1;
  min-height: 400px;
`

export const DivBanner = styled.div`
  position: relative;
  height: 50px;
  div {
    position: absolute;
      top: -3px;
      left: 0;
    &:last-of-type {
      top: 20px;
      hr {
        background-color: ${colors.lightBlue};
      }
    }
  }
`

export const HrLine = styled.hr`
  width: 200vw;
  height: 50px;
  border: none;
  background-color: ${colors.seafoamGreen};
  box-shadow: 0 2px 10px #0000007a;
`

export const DivDescription = styled.div`
  margin: 120px 100px;
  font-family: ${fonts.openSans};
  h2 {
    font-size: 40px;
    font-style: italic;
    &:last-of-type {
      font-size: 35px;
    }
  }
  ul {
    display: flex;
    padding: 0;
    margin: 100px 0;
    list-style: none;
    li {
      width: 30.33%;
      padding: 0 10px;
    }
  }
`

export const DivListItem = styled.div<{ reverseRow?: boolean }>`
  position: relative;
  display: flex;
    flex-direction: column-reverse;
    align-items: center;
  width: 100%;
  height: 100%;
  p {
    text-align: center;
    font-size: 30px;
    height: 80px;
    margin-top: 20px;
  }
`

export const ImgMetals = styled.img`
  width: 250px;
`

export const DivImageContainer = styled.div`
  position: relative;
`

export const DivEarthColorBlock = styled.div`
  z-index: -1;
  position: absolute;
    top: 65px;
    right: 13px;
  width: 220px;
  height: 220px;
  border-radius: 100%;
  background-color: ${colors.seafoamGreen};
`

export const ImgOxygen = styled.img`
  width: 200px;
  height: 294px;
`

export const DivBubblesColorBlock = styled.div`
  z-index: -1;
  position: absolute;
    top: 1px;
    left: 2px;
  width: 146px;
  height: 133px;
  border-radius: 100%;
  background-color: ${colors.lightBlue};
  &:nth-last-of-type(2) {
    top: unset;
    bottom: 62px;
    left: 101px;
    width: 95px;
    height: 90px;
  }
  &:nth-last-of-type(3) {
    top: unset;
    bottom: 6px;
    left: 50px;
    width: 51px;
    height: 45px;
  }
`

export const ImgPlastics = styled.img`
  height: 293px;
`

export const DivPlasticBox = styled.div`
  z-index: -1;
  position: absolute;
    top: 35px;
    left: 39px;
  height: 237px;
  width: 209px;
  background-color: orange;
  border-radius: 15px;
`

export const DivPlasticLongBox = styled.div`
  z-index: -1;
  position: absolute;
    top: 20px;
    left: 90px;
  height: 19px;
  width: 113px;
  background-color: orange;
  border-radius: 15px;
`