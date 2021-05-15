import React from 'react';
import HomeSection from './js/HomeSection';
import AboutSection from './js/AboutSection';
import EducationSection from './js/EducationSection';
import ProjectWork from './js/ProjectWork';
import Experience from './js/Experience';
import Contact from './js/Contact';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Email from './js/Email';
export default function App() {
    return (
        <div>
            <Switch>
                <Route path="/" component={HomeSection} exact />
                <Route path="/abt" component={AboutSection} />
                <Route path="/edu" component={EducationSection} />
                <Route path="/exp" component={Experience} />
                <Route path="/pro" component={ProjectWork} />
                <Route path="/con" component={Contact} />
            </Switch>
        </div>
    );
}
