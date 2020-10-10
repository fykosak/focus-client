import * as React from 'react';
import { TaskFactoryInputDefinition } from '@app/reducers/tasksStorage';
import LocalString from '@app/components/lang/localString';
import Unit from '@app/components/main/task/answer/default/unit';

interface OwnProps {
    input: TaskFactoryInputDefinition;
    name: string;
}

export default class InputFactory extends React.Component<OwnProps, {}> {

    public render() {
        const {input, name} = this.props;

        const inputNode = this.createInput();
        return <div className="form-group">
            <label htmlFor={name}><LocalString object={input.label}/></label>
            {inputNode}
            {input.description &&
            <small className="form-text text-muted"><LocalString object={input.description}/></small>}
        </div>;
    }

    private createInput() {
        const {input} = this.props;
        switch (input.type) {
            case 'int':
                return this.createInputContainer(this.createInt());
            case 'string':
                return this.createInputContainer(this.createString());
            case 'real':
                return this.createInputContainer(this.createReal());
        }
    }

    private createInputContainer(inputNode: JSX.Element): JSX.Element {
        const {input} = this.props;
        return <Unit units={input.units}>{inputNode}</Unit>;
    }

    private createString(): JSX.Element {
        const {name} = this.props;
        return <input name={name} type="text" className="form-control" id={'answerInput' + name}/>;
    }

    private createInt(): JSX.Element {
        const {name} = this.props;
        return <input name={name} type="number" step="1" className="form-control" id={'answerInput' + name}/>;
    }

    private createReal(): JSX.Element {
        const {name} = this.props;
        return <input name={name} type="text" className="form-control" id={'answerInput' + name}/>;
    }
}
