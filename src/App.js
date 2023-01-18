import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="hello">
          <h1>Hello</h1>
        </Route>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

/*
1. package.json에 있는 scripts를 확인
2. package.json에는 build라는 script가 존재
3. 해당 script를 실행 (npm run build) 하면 웹사이트의 production ready가 되며, 이 과정은 코드가 압축되고 모든게 최적화 된다는 의미
4. 




*/
