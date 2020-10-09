import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Store } from '@app/reducers';
import { connect } from 'react-redux';

interface StoreProps {
    isLoggedIn: boolean;
}

class Nav extends React.Component<StoreProps, {}> {
    public render() {
        return <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-fol text-fol">
            <a className="navbar-brand" href="#">
                <img src="./images/logo.svg" width="30" height="30"
                     className="d-inline-block align-top" alt=""/>
            </a>
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
                        <NavLink activeClassName="active" to="login" className="nav-link">Logout</NavLink>
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

export default connect(mapStateToProps, null)(Nav)
