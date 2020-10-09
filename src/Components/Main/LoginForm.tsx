import * as React from 'react';

export default class LoginForm extends React.Component<{}, {}> {
    public render() {
        return <main className="container">
            <div className="container mb-3" style={{borderBottom: 'solid 1px #18f3bd'}}>
                <h1 className="text-center" style={{ fontSize: '8rem'}}>{'>'}FOCUS</h1>
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
                    <label htmlFor="exampleInputEmail1">Team name</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="Team name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <button type="submit" className="btn btn-fol">Submit</button>
            </form>
        </main>
    }
}
