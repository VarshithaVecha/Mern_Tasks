
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ClassComponent from './components/ClassComponent';
import ClickCount from './components/ClickCount';
import FormHandling from './components/FormHandling';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      <ClassComponent />
      <ClickCount />
      <br/>
      <FormHandling />
    </div>
  );
}

export default App;
