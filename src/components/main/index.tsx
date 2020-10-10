import * as React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import LoginForm from '@app/components/main/loginForm';
import Tasks from '@app/components/main/task/';
import Index from '@app/components/main/discusion/';
import { connect } from 'react-redux';
import { Store } from '@app/reducers';

interface StoreProps {
    isLoggedIn: boolean;
}

class MainRouter extends React.Component<StoreProps, {}> {
    public render() {
        if (!this.props.isLoggedIn) {
            return <LoginForm/>
        }
        return <Switch>
            <Route path="/task">
                <Tasks/>
            </Route>
            <Route path="/results">
                <main className="container-fluid">
                    <h1>Results</h1>
                </main>
            </Route>
            <Route path="/Discussion">
                <Index/>
            </Route>
            <Route exact path="/">
                <main className="container">
                    <h1>Dispatch</h1>
                    <div>
                        {this.createNavItem('task', 'Task', 'icon')}
                    </div>
                </main>
            </Route>
            <Route path="*">
                <main className="container">
                    <h1>Page not found</h1>
                </main>
            </Route>
        </Switch>;
    }

    private createNavItem(link: string, label: string, icon: string) {
        return <Link to={link}>
            <button className="btn btn-nav"><i className={icon}/>{label}</button>
        </Link>;
    }
}

const mapStateToProps = (state: Store): StoreProps => {
    return {
        isLoggedIn: state.userStorage.isLoggedIn,
    }
}

export default connect(mapStateToProps, null)(MainRouter)
