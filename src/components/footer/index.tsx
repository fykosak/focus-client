import * as React from 'react';

export default class Index extends React.Component<{}, {}> {
    public render() {
        return <footer className="container">
            <p className="text-center text-muted">{'Create with '}<span
                style={{color: '#FFB6C1'}}>{'<love/>'}</span>{' by FYKOS'}</p>
        </footer>;
    }
}
