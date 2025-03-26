import './App.scss';
import Contact from './parts/contact/contact';
import Footer from './parts/footer/footer';
import Header from './parts/header/header';
import Services from './parts/services/services';
import Studies from './parts/studies/studies';
import Team from './parts/team/team';
import Testimonials from './parts/testimonials/testimonials';
import WorkProcess from './parts/workprocess/workprocess';

const App = () => {
  return (
    <div className="app-container">
      <Header/>
      <Services/>
      <Studies/>
      <WorkProcess/>
      <Team/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
