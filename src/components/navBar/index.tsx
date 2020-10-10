import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Store } from '@app/reducers';
import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';
import { actionLogout } from '@app/actions/userStorage';

interface StoreProps {
    isLoggedIn: boolean;
}

interface DispatchProps {
    logout(): void;
}

class Index extends React.Component<StoreProps & DispatchProps, {}> {
    public render() {
        return <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-fol text-fol">
            <Link to="/" className="navbar-brand">
                <img src="./images/logo.svg" width="30" height="30"
                     className="d-inline-block align-top" alt=""/>
            </Link>
            <a className="navbar-brand" href="#">Fyziklani online</a>

            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            {this.props.isLoggedIn && <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink activeClassName="active" to="/task" className="nav-link">Tasks</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="active" to="/results" className="nav-link">Results</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="active" to="/discussion" className="nav-link">Discussion</NavLink>
                    </li>
                </ul>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => {
                            this.props.logout()
                        }}>Logout
                        </a>
                    </li>
                </ul>
            </div>}

        </nav>;
    }
}


const mapStateToProps = (state: Store): StoreProps => {
    return {
        isLoggedIn: state.userStorage.isLoggedIn,
    }
}

const mapDispatchToProps = (dispatch: Dispatch<Action<string>>): DispatchProps => {
    return {
        logout: () => dispatch(actionLogout()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
