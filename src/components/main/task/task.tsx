import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Store } from '@app/reducers';
import { connect } from 'react-redux';
import { TaskDefinition } from '@app/reducers/tasksStorage';
import LocalString from '@app/components/lang/LocalString';
import AnswerForm from '@app/components/main/task/answer/answerForm';
import { availableLanguages } from '@app/components/lang/interface';
import TaskSource from '@app/components/main/task/source';

interface OwnProps extends RouteComponentProps<{ id: string }> {
}

interface StoreProps {
    tasks: TaskDefinition[];
    lines: any[];
    lang: availableLanguages;
}

class Task extends React.Component<OwnProps & StoreProps, {}> {

    public render() {
        const {tasks, match: {params: {id}}, lang} = this.props;
        const candidates = tasks.filter((task) => {
            return task.taskId === +id;
        });
        if (!candidates.length) {
            return <h1>Task not found</h1>
        }
        const task = candidates[0];
        return <>
            <h1><LocalString object={task.label}/>: <LocalString object={task.name}/></h1>
            <h2>Zadanie?!</h2>
            <TaskSource factory={task}/>
            <h2>Submit Answer</h2>
            <div>
                <AnswerForm factory={task.factory}/>
            </div>

            <h2>Submitted answers</h2>
        </>;
    }
}

const mapStateToProps = (state: Store): StoreProps => {
    return {
        tasks: state.tasksStorage.tasks,
        lines: state.tasksStorage.lines,
        lang: 'pl',
    }
}

export default withRouter(connect(mapStateToProps, null)(Task));
