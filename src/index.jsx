import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./views/Home";
import About from "./views/About";
import Q1Tabs from "./views/Q1Tabs";
import Q2SkipToMainContent from "./views/Q2SkipToMainContent";
import Q3PageTitle from "./views/Q3PageTitle";
import Q4Headings from "./views/Q4Headings";
import Q5SemanticElements from "./views/Q5SemanticElements";
import Q6EnableZoom from "./views/Q6EnableZoom";
import Q7AccessibleBasket from "./views/Q7AccessibleBasket";
import Q8AccessibleForm from "./views/Q8AccessibleForm";
import Q9ColorContrast from "./views/Q9ColorContrast";
import Q10Language from "./views/Q10Language";
import Q11DisableAnimation from "./views/Q11DisableAnimation";

import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/q1-tab" component={Q1Tabs} />
        <Route
          exact
          path="/q2-skip-to-main-content"
          component={Q2SkipToMainContent}
        />
        <Route exact path="/q3-page-title" component={Q3PageTitle} />
        <Route exact path="/q4-headings" component={Q4Headings} />
        <Route
          exact
          path="/q5-semantic-elements"
          component={Q5SemanticElements}
        />
        <Route exact path="/q6-enable-zoom" component={Q6EnableZoom} />
        <Route
          exact
          path="/q7-accessible-basket"
          component={Q7AccessibleBasket}
        />
        <Route exact path="/q8-accessible-form" component={Q8AccessibleForm} />
        <Route exact path="/q9-color-contrast" component={Q9ColorContrast} />
        <Route exact path="/q10-language" component={Q10Language} />
        <Route
          exact
          path="/q11-disable-animation"
          component={Q11DisableAnimation}
        />
      </Switch>
    </Router>
  </React.StrictMode>,
);
