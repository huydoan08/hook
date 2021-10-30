import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import Topic from "../Topic";
export default function UseRouteMatch() {
  const match = useRouteMatch();
  console.log(match)
  const atRouteMatch = match.url === '/useroutematch'  // sử dụng tương tự như uselocation
  return atRouteMatch && <p>useroutematchJSX</p>
}
