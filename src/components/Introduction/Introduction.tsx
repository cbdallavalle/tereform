import {useParallax} from 'react-scroll-parallax';
import earthImage from '../../assets/planet.png'
import bubbleImage from '../../assets/bubbles.png'
import plasticsImage from '../../assets/clothes.png'
import {
  DivIntroduction,
  DivBanner,
  HrLine,
  DivDescription,
  DivListItem,
  ImgMetals,
  DivEarthColorBlock,
  DivBubblesColorBlock,
  ImgOxygen,
  DivImageContainer,
  ImgPlastics,
  DivPlasticBox,
  DivPlasticLongBox
} from './Introduction.styles';

function Introduction() {
  const parallaxGreen = useParallax<HTMLDivElement>({
    translateX: [-100, 0],
  });
  const parallaxBlue = useParallax<HTMLDivElement>({
    translateX: [-100, 0],
  });
  const parallaxPlanet = useParallax<HTMLDivElement>({
    translateX: [30, 0],
    translateY: [-30, 0],
  })
  const parallaxSmallBubble = useParallax<HTMLDivElement>({
    translateY: [0, -50],
  })
  const parallaxMediumBubble = useParallax<HTMLDivElement>({
    translateY: [0, -50],
  })
  const parallaxLargeBubble = useParallax<HTMLDivElement>({
    translateY: [0, -50],
  })
  const parallaxShirt = useParallax<HTMLDivElement>({
    translateX: [20, 0],
  })
  
  
  return (
    <DivIntroduction>
      <DivBanner>
        <div ref={parallaxGreen.ref}>
          <HrLine/>
        </div>
        <div ref={parallaxBlue.ref}>
          <HrLine/>
        </div>
      </DivBanner>
      <DivDescription>
        <h2>Tereform combines three ingredients</h2>
        <ul>
          <li>
            <DivListItem>
              <p>Earth-abundant Metals</p>
              <DivImageContainer>
                <DivEarthColorBlock ref={parallaxPlanet.ref}/>
                <ImgMetals src={earthImage} alt='Earth icon' />
              </DivImageContainer>
            </DivListItem>
          </li>
          <li>
            <DivListItem reverseRow={true}>
              <p>Oxygen</p>
              <DivImageContainer>
                <DivBubblesColorBlock ref={parallaxSmallBubble.ref} />
                <DivBubblesColorBlock ref={parallaxMediumBubble.ref} />
                <DivBubblesColorBlock ref={parallaxLargeBubble.ref} />
                <ImgOxygen src={bubbleImage} alt='Oxygen icon' />
              </DivImageContainer>
            </DivListItem>
          </li>
          <li>
            <DivListItem>
              <p>Plastic Textiles</p>
              <DivImageContainer>
                <DivPlasticBox ref={parallaxShirt.ref}/>
                <DivPlasticLongBox/>
                <ImgPlastics src={plasticsImage} alt='Clothing icon' />
              </DivImageContainer>
            </DivListItem>
          </li>
        </ul>
        <h2>To create Nylon and other usable products</h2>
      </DivDescription>
    </DivIntroduction>
  );
}

export default Introduction;