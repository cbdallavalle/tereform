import {DivInTheNews} from './InTheNews.styles';
import SectionHeader from '../PageComponents/SectionHeader/SectionHeader';
import Section from '../PageComponents/Section/Section';
import Typography from '../../baseComponents/Typography/Typography';
import { LiNewsArticle, UiNewArticles } from './InTheNews.styles';
import { NewsArticleType, articles } from './newsArticles';

function NewsArticle({article}: {article: NewsArticleType}) {
  return (
    <LiNewsArticle>
      <Typography tag='h3'>{article.title}</Typography>
      <Typography tag='p'>{article.body}</Typography>
      {
        article.urls.map(article => {
          return (
            <a href={article.url}>
              {article.title ? article.title : 'Click here to read more'}
            </a>
          )
        })
      }
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