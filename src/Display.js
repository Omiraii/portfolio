import Home from './HomePage';
import Projects from './ProjectsPage';
import About from './AboutPage';
import Contact from './ContactPage';

const Display = (props) => {
    return props.page === 'home' ? <Home changePage={props.changePage}/> :
    props.page === 'projects' ? <Projects /> :
    props.page === 'about' ? <About /> :
    <Contact />;
}

export default Display;