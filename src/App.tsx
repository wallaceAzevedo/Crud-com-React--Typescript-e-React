import { Header } from './components/Header';
import { Page, usePage} from './contexts/Page';
import { ArticlesIndex } from './pages/Article/index';

const App = () => {
  const {page} = usePage();
  const renderSwitch = () => {
    switch (page) {
      case Page.Articles:
        return <ArticlesIndex/>;
      case Page.Authors:
        return <div>Authors</div>;
        default:
          return'';
    }
  }

  return (
    <div className="App">
      <Header/>
      {renderSwitch}
    </div>
  );
}

export default App;
