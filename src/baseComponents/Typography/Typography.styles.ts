import styled, {css} from 'styled-components'
import {colors, screenSizes} from '../../constants/cssConstants'

type TypographyTypes = {
  color?: string,
  addBackground?: boolean
}

export const BackgroundStyle = css`
  padding: 30px 20px;
  border-radius: 15px;
  background-color: ${colors.white};
  box-shadow: 0px 1px 4px #aaaaaa85;
`

export const H2 = styled.h2<TypographyTypes>`
  margin: 30px 0;
  color: ${p => p.color ?? colors.offBlack};
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  ${p => p.addBackground && BackgroundStyle}
  @media (max-width: ${screenSizes.medium}) {
    font-size: 30px;
  }
`

export const H3 = styled.h3<TypographyTypes>`
  margin: 30px 0;
  color: ${p => p.color ?? colors.offBlack};
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  ${p => p.addBackground && BackgroundStyle}
  @media (max-width: ${screenSizes.medium}) {
    font-size: 20px;
  }
`

export const H4 = styled.h4<TypographyTypes>`
  color: ${p => p.color ?? colors.offBlack};
  font-size: 25px;
  font-weight: 600;
  text-align: center;
  ${p => p.addBackground && BackgroundStyle};
  @media (max-width: ${screenSizes.medium}) {
    font-size: 15px;
  }
`

export const P = styled.p<TypographyTypes>`
  color: ${p => p.color ?? colors.offBlack};
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  ${p => p.addBackground && BackgroundStyle};
  @media (max-width: ${screenSizes.medium}) {
    font-size: 13px;
  }
`