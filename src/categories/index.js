import React from 'react';
import {
  Button,
  CardText,
  Card,
  CardTitle,
  CardMenu,
  CardActions,
  IconButton,
  Grid,
  Cell,
  Icon,
} from 'react-mdl';
import Layout from '../../components/Layout';
import s from './styles.css';
import history from '../history';
import text from '../../text';
import Categories from './categories';
import CategoryCard from '../../components/CategoryCard/CategoryCard';


class AboutPage extends React.Component {

  componentDidMount() {
    document.title = text.categories;
  }
  gotoHome = () => { history.push({ pathname: '/' }); }

  render() {
    const CardWidth = '300px';

    return (
      <Layout className={s.content}>
        <h1
          className={s.fontstyle1} style={{
            marginTop: '20px',
          }}
        >
          <Grid className="demo-grid-1" >
            <Cell col={1}>
              <IconButton style={{ color: '#263238' }} name="arrow_back" colored onClick={this.gotoHome} />
            </Cell>
            <Cell col={1} style={{ color: '#263238', width: '80%' }}>{text.categories}</Cell>
          </Grid>
        </h1>
        <div
          style={{
            width: '100%',
            margin: 'auto',
            display: 'flex',
            marginTop: '100px',
          }}
        >
          {Categories.map(category =>
            <CategoryCard
              image={category.image}
              onClick={() => { history.push({ pathname: category.path }); }}
              width={CardWidth}
              text={category.text}
              height="300px"
              cardHeight="250px"
            />,
          )}


        </div>
      </Layout>
    );
  }

}

export default AboutPage;
