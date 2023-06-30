import styled from 'styled-components'
import {colors, fonts} from '../../../constants/cssConstants'

type DivSectionHeaderTypes = {
  headerColor?: string
}

export const DivSectionHeader = styled.div<DivSectionHeaderTypes>`
  display: flex;
    align-items: center;
  flex-grow: 1;
  margin: 60px 0 30px 0;
  hr {
    width: 30px;
    height: 2px;
    margin: 0;
    border: none;
    background-color: ${p => p.headerColor ?? colors.offBlack};
  }
  h3 {
    margin-left: 6px;
    color: ${p => p.headerColor ?? colors.offBlack};
    font-family: ${fonts.openSans};
    font-size: 18px;
    font-weight: 600;
  }
`

type HeaderProps = {
  headerText: string,
  headerColor?: string
}

export default function SectionHeader({headerText, headerColor}: HeaderProps) {
  return (
    <DivSectionHeader headerColor={headerColor}>
      <hr/><h3>{headerText.toUpperCase()}</h3>
    </DivSectionHeader>
  );
}