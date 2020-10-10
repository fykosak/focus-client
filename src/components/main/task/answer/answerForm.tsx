import * as React from 'react';
import { TaskFactoryDefinition } from '@app/reducers/tasksStorage';
import AnswerInput from '@app/components/main/task/answer/answerInput';

interface OwnProps {
    factory: TaskFactoryDefinition;
}

export default class AnswerForm extends React.Component<OwnProps, {}> {

    public render() {
        const {factory: {inputs}} = this.props;
        const inputNodes = [];
        for (const name in inputs) {
            if (inputs.hasOwnProperty(name)) {
                const input = inputs[name];
                inputNodes.push(<AnswerInput key={name} name={'answerInput' + name} input={input}/>);
            }
        }
        return <>
            {inputNodes}
            <button className="btn btn-fol">Submit</button>
        </>;
    }
}
