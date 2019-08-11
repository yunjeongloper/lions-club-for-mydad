import React from 'react';
// typescript에서는 typed/styled-co..어쩌고 받아야한다.
// keyframe은 추가적으로 임포트해줘야 한다.
import styled, { ThemeProvider } from 'styled-components';    
import { theme } from '../../utils/Theme';
// styled-reset을 적용하자. ul,li가 너무 못생겼다.
import { Reset } from 'styled-reset'
// Router 적용하기
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Routes from '../../config/Routes';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppContainer>
          <Reset />
          <Routes />
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-color: ${props => props.theme.color.primary};
`;

const AppHeader = styled.div`
  // min-height: 100vh;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: center;
  // font-size: calc(10px + 2vmin);
  // color: white;
`;

export default App;
