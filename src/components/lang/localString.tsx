import * as React from 'react';
import { Store } from '@app/reducers';
import { connect } from 'react-redux';
import { availableLanguages, localisedType } from '@app/components/lang/interface';

interface StoreProps {
    lang: availableLanguages;
}

interface OwnProps {
    object: localisedType<string>;
}

class LocalString extends React.Component<StoreProps & OwnProps, {}> {

    public render() {
        const {object, lang} = this.props;
        if (object.hasOwnProperty(lang)) {
            return <>{object[lang]}</>
        }
        if (object.hasOwnProperty('common')) {
            return <>{object.common}</>
        }
        return null;
    }
}

const mapStateToProps = (state: Store): StoreProps => {
    return {
        lang: 'pl',
    }
}

export default connect(mapStateToProps, null)(LocalString)
