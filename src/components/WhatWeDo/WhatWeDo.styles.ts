import styled, {css} from 'styled-components'
import {colors, fonts, screenSizes} from '../../constants/cssConstants'
import { SectionWrapper } from '../PageComponents/Section/Section'

export const DivIntroduction = styled.div`
  position: relative;
  span {
    color: ${colors.offBlack}
  }
  ${SectionWrapper} {
    min-height: unset;
    &:nth-of-type(1) {
      height: fit-content;
    }
    &:nth-of-type(2) {
      display: flex;
        justify-content: center;
      height: 400px;
      padding: 0 50px;
      margin-bottom: 160px;
      h2 {
        margin: 0;
      }
    }
    &:nth-of-type(3) {
      background-image: radial-gradient(${colors.seafoamGreen}, ${colors.lightSeafoamGreen});
      h2 {
        margin: 0;
      }
    }
  }
`

export const ArticleIngredients = styled.article`
  display: flex;
  justify-content: space-between;
  height: 350px;
  margin-top: 60px;
  margin-bottom: 60px;
  padding: 0px 30px;
  @media (max-width: ${screenSizes.medium}) {
    flex-direction: column;
    align-items: center;
    height: unset;
    margin-top: 30px;
  }
`

export const DivIngredient = styled.div`
  width: 25vw;
  height: 25vw;
  min-width: 200px;
  min-height: 200px;
  @media (max-width: ${screenSizes.medium}) {
    width: 70vw;
    height: 70vw;
    margin-bottom: 12px;
  }
`

type DivIngredientBannerProps = {
  fadeIn: boolean
  backgroundImg: string
  isTextile?: boolean
}

export const DivIngredientBanner = styled.div<DivIngredientBannerProps>`
  position: relative;
  display: flex;
    flex-grow: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  height: 100%;
  max-height: 300px;
  max-width: 300px;
  overflow: hidden;
  box-sizing: border-box;
  margin: auto;
  border-radius: 100%;
  box-shadow: 2px 2px 4px #6d6d6db5;;
  font-family: ${fonts.openSans};
  font-size: 20px;
  font-weight: 500;
  opacity: ${(props) => (props.fadeIn ? "100%" : "0%")};
  transition: opacity 0.7s ease;
  background-image: url(${props => props.backgroundImg});
  background-size: cover;
    background-position: center;
  @media (max-width: ${screenSizes.medium}) {
    max-width: unset;
    max-height: unset;
    margin-bottom: 12px;
  }
`

export const DivItemP = styled.div`
  z-index: 1;
  width: 80%;
  padding: 12px;
  border-radius: 15px;
  background-color: #000000de;
  p {
    color: ${colors.white};
    font-family: ${fonts.openSans};
    font-size: 18px;
    font-weight: 600;
    text-align: center;
  }
`

export const DivLine = styled.div`
  position: absolute;
  top: 0;
  border-radius: 100%;
  border: 1px solid ${colors.seafoamGreen};
`