import * as React from 'react';
import { Store } from '@app/reducers';
import { connect } from 'react-redux';
import { TaskDefinition } from '@app/reducers/tasksStorage';
import { availableLanguages } from '@app/components/lang/interface';

interface OwnProps {
    factory: TaskDefinition;
}

interface StoreProps {
    lang: availableLanguages;
}

class Source extends React.Component<OwnProps & StoreProps, {}> {

    public render() {
        const {factory, lang} = this.props;
        return <div className="row my-5">
            {factory.files[lang].sort(() => {
                return Math.random() - 0.5;
            }).map((file, index) => {
                return <div className="col text-center" key={index}>
                    <a href={file} className="btn btn-lg btn-fol"><i className="fa fa-pdf"/>Mirror {index + 1}</a>
                </div>;
            })}
        </div>;
    }
}

const mapStateToProps = (state: Store): StoreProps => {
    return {
        lang: 'pl',
    }
}

export default connect(mapStateToProps, null)(Source);
