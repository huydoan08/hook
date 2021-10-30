import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import UseReducer from "./components/use-reducer";
import ThemeContextProvider from "./components/themecontext";
import UseState from "./components/useState/useState";
import UseEffect from "./components/useEffect/useEffect";
import UseRef from "./components/useRef/useRef";
import UseMemo from "./components/useMemo/useMemo";
import UseCallback from './components/useCallback/useCallback';
import UseHistory from "./components/useHistory/useHistory";
import Formik from "./components/formik/formik";
import Axios from "./components/axios/axios";
import UseLocation from "./components/uselocation/use-location";
import UseParams from "./components/useprams/use-params";
import UseRouteMatch from "./components/useroutematch/use-routematch";

function App() {
  return (
    <ThemeContextProvider>
      <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/usestate">
              <UseState />
            </Route>
			<Route path="/useeffect">
              <UseEffect />
            </Route>
			<Route path="/useref">
				<UseRef/>
			</Route>
			<Route path="/uselocation">
				<UseLocation/>
			</Route>
			<Route path="/usememo">
				<UseMemo/>
			</Route>
			<Route path="/usecallback">
				<UseCallback/>
			</Route>
			<Route path="/axios">
				<Axios/>
			</Route>
            <Route path="/usehistory">
              <UseHistory />
            </Route>
            <Route path="/useparams/:id">
              <UseParams />
            </Route>
            <Route path="/useroutematch">
              <UseRouteMatch />
            </Route>
            <Route path="/formik">
              <Formik />
            </Route>     
            <Route path="/usereducerhook">
              <UseReducer />
            </Route>
          </Switch>
      </Router>
    </ThemeContextProvider>
  );
}

export default App;
