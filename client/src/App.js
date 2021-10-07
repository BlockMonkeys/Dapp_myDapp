import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingComponent from "./components/Landing/Landing";
import LoginComponent from "./components/Login/Login";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingComponent} />
        <Route exact path="/login" component={LoginComponent} />
      </Switch>
      {/* 
        1. 라우팅만들기;
        2. 홈페이지 만들기;
        3. 홈페이지에 Metamask 연결 버튼 만들기;
        4. 버튼을 눌렀을 시에만 Metamask와 연동 시작; (백엔드에서는 스마트컨트렉트만 호출할 뿐, 메타마스크와의 연동은 필요가 없다);
        5. 이후 무슨 웹사이트 만들지 고민해볼 것;
      */}
    </div>
  );
}

export default App;
