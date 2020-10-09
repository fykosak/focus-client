import * as ReactDom from 'react-dom';
import * as React from 'react';

class App extends React.Component<{}, {}> {

    public render() {
        return <div className="container my-3">
            <h1 className="text-center" style={{marginTop: '5rem', fontSize: '12rem'}}>{'>'}FOCUS</h1>
            <p className="text-center" style={{marginTop: '1rem', fontSize: '3rem'}}>
                <span style={{color: '#666'}}>
                    <span style={{color: '#18f3bd'}}
                    >F</span>YKOS <span style={{color: '#18f3bd'}}
                >O</span>nline <span style={{color: '#18f3bd'}}
                >C</span>ontest <span style={{color: '#18f3bd'}}
                >U</span>niversal <span style={{color: '#18f3bd'}}
                >S</span>ystem
                </span>
            </p>
        </div>;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('main');
    ReactDom.render(<App/>, rootElement);
});

