import * as React from 'react';

interface OwnProps {
    units: string[];
}

export default class Unit extends React.Component<OwnProps, {}> {


    public render() {
        const {units} = this.props;
        switch (units.length) {
            case 0:
                return <>{this.props.children}</>;
            case 1:
                return <div className="input-group">
                    {this.props.children}
                    <div className="input-group-append">
                        <div className="input-group-text">{units[0]}</div>
                    </div>
                </div>
            default:
                return <div className="form-row">
                    <div className="col-md-9 mb-3">
                        {this.props.children}
                    </div>
                    <div className="col-md-3 mb-3">
                        <select name={'unit'} className="form-control">
                            {units.map((unit) => {
                                return <option key={unit} value={unit}>{unit}</option>;
                            })}
                        </select>
                    </div>
                </div>
        }
    }
}
