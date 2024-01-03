import {DivInTheNews} from './InTheNews.styles';
import SectionHeader from '../PageComponents/SectionHeader/SectionHeader';
import Section from '../PageComponents/Section/Section';
import Typography from '../../baseComponents/Typography/Typography';
import { LiNewsArticle, UiNewArticles } from './InTheNews.styles';

type NewsArticle = {
  title: string;
  url: string;
  description: string;
}

const articles = [
  {
    title: 'Tereform joins with I-Corps',
    description: 'I-Corps is a program offered via NREL that gives new businesses a head start.',
    url: 'https://www.energy.gov/eere/bioenergy/articles/tereform-enabling-circularity-textiles'
  },
  {
    title: 'Article 2',
    description: 'beee',
    url: 'https://www.energy.gov/technologytransitions/articles/tereform-enabling-circularity-textiles'
  },
  {
    title: 'Article 3',
    description: 'asdfsdf',
    url: 'https://www.energy.gov/technologytransitions/articles/energy-i-corps-cohort-15-welcomes-dozens-new-scientists'
  },
  {
    title: 'Article 4',
    description: 'jflkajdsf',
    url: 'https://www.nrel.gov/news/program/2022/first-cohort-of-innovators-enter-west-gate.html'
  },
  { 
    title: 'Article 5',
    description: 'abksjdhf',
    url: 'https://hmfoundation.com/2023/06/08/hm-foundation-doubles-gca-grant-and-winners/'
  },
  {
    title: 'Article 6',
    description: 'fblksdf',
    url: 'https://www.youtube.com/watch?v=bTKWNcXDnt4'
  }
] as NewsArticle[]

function NewsArticle({article}: {article: NewsArticle}) {
  return (
    <LiNewsArticle>
      <Typography tag='h3'>{article.title}</Typography>
      <Typography tag='p'>{article.description}</Typography>
      <a href={article.url}>
        Click here to see more!
      </a>
    </LiNewsArticle>
  )
}

export default function InTheNews() {
  return (
  <DivInTheNews>
      <Section addPadding={true}>
        <SectionHeader headerText='Tereform in the News'/>
        <UiNewArticles>
          {
            articles.map(article => <NewsArticle article={article} />)
          }
        </UiNewArticles>
      </Section>
    </DivInTheNews>
  );
}