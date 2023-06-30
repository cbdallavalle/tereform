import styled from 'styled-components'
import { colors } from '../../../constants/cssConstants';

type SectionWrapperProps = {
  addPadding?: boolean,
  background?: string
}

export const SectionWrapper = styled.section<SectionWrapperProps>`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100vw;
  height: fit-content;
  min-height: max(100vh, 400px);
  padding: ${({addPadding}) => addPadding ? 50 : 0}px;
  padding-bottom: 60px;
  background: ${({background}) => background || colors.greyWhite};
`

type WrapperProps = {
  addPadding?: boolean;
  children: React.ReactNode;
  background?: string;
  noRole?: boolean;
};

export default function Section({
  addPadding, background, children, noRole = false
}: WrapperProps) {
  return (
    <SectionWrapper addPadding={addPadding} background={background} aria-hidden={noRole}>
      {children}
    </SectionWrapper>
  )
}