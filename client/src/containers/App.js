import React from "react";
import { Menu } from "./menu/Menu";
import Dashboard from "./dashboard";
import { TaskBoard } from "./taskBoard/TaskBoard";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import { MobileView } from "./mobileView";
import Settings from "./settings";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./../helpers/themeStyles";
import { useSelector } from "react-redux";
import Notes from "./notes";
import Login from "../components/login";
import SignUp from "../components/signup";
const AppContainer = styled.div`
    display: flex;
    height: 100%;
`;

function App() {
    const isDarkTheme = useSelector((s) => s.settings.darkTheme);

    if (!isMobile)
        return (
            <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
                <>
                    <GlobalStyles />
                    <AppContainer>
                        <Router>
                            
                            <Switch>
                                <Route exact path="/">
                                    <Login/>
                                </Route>
                                <Route exact path="/signup">
                                    <SignUp/>
                                </Route>
                                <Route exact path="/notes">
                                    <Menu />
                                    <Notes />
                                </Route>
                                <Route exact path="/settings">
                                    <Menu />
                                    <Settings />
                                </Route>
                                <Route exact path="/main">
                                    <>
                                        <Menu />
                                        <Dashboard />
                                        <TaskBoard />
                                    </>
                                </Route>
                            </Switch>
                        </Router>
                    </AppContainer>
                </>
            </ThemeProvider>
        );
    else {
        return (
            <AppContainer>
                <MobileView />
            </AppContainer>
        );
    }
}

export default App;