import * as React from 'react';
import { TaskFactoryDefinition } from '@app/reducers/tasksStorage';
import Index from '@app/components/main/task/answer/default';

interface OwnProps {
    factory: TaskFactoryDefinition;
}

export default class Form extends React.Component<OwnProps, {}> {

    public render() {
        const {factory} = this.props;
        switch (factory.type) {
            case 'default':
                return <Index factory={factory}/>;
            default:
                return null;
        }
    }
}
