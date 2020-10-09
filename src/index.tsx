import * as ReactDom from 'react-dom';
import * as React from 'react';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom'; // todo use browser router
import Nav from './Components/NavBar/Nav';
import Main from './Components/Main/MainRouter';
import { app } from './reducers';
import Footer from '@app/Components/Footer/Footer';

class App extends React.Component<{}, {}> {

    public render() {
        const store = createStore(app, applyMiddleware(logger));
        return <Provider store={store}>
            <HashRouter>
                <Nav/>
                <Main/>
                <Footer/>
            </HashRouter>
        </Provider>;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('root');
    ReactDom.render(<App/>, rootElement);
});
