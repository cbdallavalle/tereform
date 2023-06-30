import metalsImage from '../../assets/metals.jpg'
import oxygenImage from '../../assets/sky.jpg'
import wasteTextilesImage from '../../assets/laundry.jpg'
import textilesImage from '../../assets/textiles.jpg'
import SectionHeader from '../PageComponents/SectionHeader/SectionHeader';
import Section from '../PageComponents/Section/Section';
import useScrollHook from "../../hooks/useScrollHook";
import { useRef, useState } from 'react'
import Typography from '../../baseComponents/Typography/Typography';
import { colors } from '../../constants/cssConstants';

import {
  DivIntroduction,
  ArticleIngredients,
  DivIngredient,
  DivIngredientBanner,
  DivLine,
  DivItemP
} from './WhatWeDo.styles';

export default function WhatWeDo() {
  const [fadeInOne, setFadeInOne] = useState(false)
  const [fadeInTwo, setFadeInTwo] = useState(false)
  const [fadeInThree, setFadeInThree] = useState(false)
  const banner = useRef<HTMLInputElement>(null)
  useScrollHook(isIngredientInFocus)

  function setFadeIn() {
    setFadeInOne(true)
    setTimeout(() => setFadeInTwo(true), 500)
    setTimeout(() => setFadeInThree(true), 1000)
  }

  function isIngredientInFocus(_event: Event, topOffset: number) {
    const bannerPositions = banner?.current?.getBoundingClientRect()
    if (bannerPositions && topOffset > bannerPositions.y) setFadeIn()
  }

  function createIngredientSection(
    fadeIn: boolean,
    text: string,
    backgroundImg: string,
  ) {
    return (
      <DivIngredient ref={banner}>
        <DivIngredientBanner fadeIn={fadeIn} backgroundImg={backgroundImg}>
          <DivItemP>
            <p>{text}</p>
          </DivItemP>
        </DivIngredientBanner>
      </DivIngredient>
    )
  }

  return (
    <DivIntroduction>
      <Section addPadding={true}>
        <DivLine/>
        <article>
          <SectionHeader headerText='WHAT WE DO' />
          <Typography tag='h2' addBackground={true}>
            Tereform combines three components:
          </Typography>
        </article>
        <ArticleIngredients>
          {createIngredientSection(fadeInOne, 'EARTH-ABUNDANT METALS', metalsImage)}
          {createIngredientSection(fadeInTwo, 'OXYGEN', oxygenImage)}
          {createIngredientSection(fadeInThree, 'WASTE FABRICS', wasteTextilesImage)}
        </ArticleIngredients>
      </Section>
      <Section addPadding={false} noRole={true} background={`url(${textilesImage})`}>
        <Typography tag='h2' addBackground={true}>
          To create fully-recycled textiles while lowering greenhouse gas emissions.
        </Typography>
      </Section>
      <Section addPadding={true}>
        <Typography tag='h2' color={colors.white}>
          <span>Now, we have the power</span> to recycle fabrics sustainably.
        </Typography>
      </Section>
    </DivIntroduction>
  );
}