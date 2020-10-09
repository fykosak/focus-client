import * as React from 'react';

export default class Footer extends React.Component<{}, {}> {
    public render() {
        return <footer className="container">
                <p className="text-center text-muted">{'Create with <love/> by FYKOS'}</p>
        </footer>;
    }
}
