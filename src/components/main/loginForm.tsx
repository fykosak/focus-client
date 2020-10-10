import * as React from 'react';
import { Action, Dispatch } from 'redux';
import { actionLogin } from '@app/actions/userStorage';
import { connect } from 'react-redux';

interface DispatchProps {
    login(): void;
}

class LoginForm extends React.Component<DispatchProps, {}> {
    public render() {
        return <main className="container">
            <div className="container mb-3" style={{borderBottom: 'solid 1px #18f3bd'}}>
                <h1 className="text-center" style={{fontSize: '8rem'}}>{'>'}FOCUS</h1>
                <p className="text-center" style={{marginTop: '1rem', fontSize: '2rem'}}>
                <span style={{color: '#666'}}>
                    <span style={{color: '#18f3bd'}}
                    >F</span>YKOS <span style={{color: '#18f3bd'}}
                >O</span>nline <span style={{color: '#18f3bd'}}
                >C</span>ontest <span style={{color: '#18f3bd'}}
                >U</span>niversal <span style={{color: '#18f3bd'}}
                >S</span>ystem
                </span>
                </p>
            </div>
            <h1>Login</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="inputEmail">Team name</label>
                    <input type="email" className="form-control" id="inputEmail" placeholder="Team name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputPassword">Password</label>
                    <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
                </div>
                <button type="submit" className="btn btn-fol" onClick={() => {
                    this.props.login();
                }}>Submit
                </button>
            </form>
        </main>
    }
}

const mapDispatchToProps = (dispatch: Dispatch<Action<string>>): DispatchProps => {
    return {
        login: () => dispatch(actionLogin()),
    }
}

export default connect(null, mapDispatchToProps)(LoginForm)

