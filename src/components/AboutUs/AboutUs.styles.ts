import styled from 'styled-components'
import {colors, screenSizes} from '../../constants/cssConstants'
import { P, H4 } from '../../baseComponents/Typography/Typography.styles'

export const DivUserProfile = styled.div`
  display: flex;
    justify-content: center;
    align-items: center;
  text-align: center;
  margin-bottom: 50px;
  div {
    ${P} {
      font-weight: normal;
    }
    ${H4} {
      margin: 8px 0;
    }
    hr {
      width: 30%;
      height: 2px;
      margin-bottom: 12px;
      border: 0;
      background-color: ${colors.offBlack};
    }
  }

  @media (max-width: ${screenSizes.medium}) {
    flex-direction: column;
  }
`

export const DivAboutUs = styled.div`
  img {
    width: 40%;
  }
  @media (max-width: ${screenSizes.medium}) {
    img {
      width: 80%;
    }
  }
  
  ${DivUserProfile} {
    &:nth-of-type(2) {
      flex-direction: row-reverse;
      img {
        padding-left: 50px;
      }
      @media (max-width: ${screenSizes.medium}) {
        flex-direction: column;
        img {
          padding-left: 0;
          padding-bottom: 30px;
        }
      }
    }

    &:nth-of-type(3) {
      img {
        padding-right: 50px;
      }
      @media (max-width: ${screenSizes.medium}) {
        flex-direction: column;
        img {
          padding-right: 0;
          padding-bottom: 30px;
        }
      }
    }
  }
`

