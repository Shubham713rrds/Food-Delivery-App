import Featured from './components/Featured';
import TopNav from './components/TopNav'
import Delivery from './components/Delivery'
import Toppicks from './components/TopPicks' 
import Meal from './components/Meal'
import Categories from './components/Categories';
import NewsLetter from './components/NewsLetter';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <TopNav/>
      <Featured/>
      <Delivery/>
      <Toppicks/>
      <Meal/>
      <Categories/>
      <NewsLetter/>
      <Footer/>
    </div>
  );
}

export default App;
