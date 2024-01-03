import styled from 'styled-components'
import {colors, screenSizes} from '../../constants/cssConstants'
import { H3 } from '../../baseComponents/Typography/Typography.styles'
import { SectionWrapper } from '../PageComponents/Section/Section'

export const DivContactUs = styled.div`
  article {
    display: flex;
      flex-direction: column;
    }

  ${SectionWrapper} {
    min-height: unset;
    height: fit-content;
    background-image: radial-gradient(${colors.brightBlue}, ${colors.lightBlue});
  }
`

export const DivContactLinks = styled.div`
  display: flex;
    justify-content: center;

  margin-top: 50px;

  img {
    margin-top: 16px;
    width: 50px; 
  }
  a {
    display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  
    color: ${colors.white};
    text-decoration: none;
    border-radius: 8px;
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    &:nth-of-type(2) {
      margin-left: 20px;
    }
  }
  @media (max-width: ${screenSizes.medium}) {
      flex-direction: column;
      a {
        font-size: 20px;
        &:nth-of-type(2) {
          margin-left: 0px;
          margin-top: 20px;
        }
      }
    }
`
