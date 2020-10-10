import * as React from 'react';
import { Link } from 'react-router-dom';
import LocalString from '@app/components/lang/LocalString';
import { Store } from '@app/reducers';
import { connect } from 'react-redux';
import { TaskDefinition } from '@app/reducers/tasksStorage';


interface OwnProps {
    url: string;
}

interface StoreProps {
    tasks: TaskDefinition[];
    lines: any[];
}

class List extends React.Component<OwnProps & StoreProps, {}> {

    public render() {
        const {url, lines, tasks} = this.props;
        const availableTasks = tasks.filter((task) => {
            return task.status === 'available';
        });
        const linesNodes = lines.map((line) => {
            return <div key={line.lineId}>
                <h3><LocalString object={line.name}/></h3>
                <ul>
                    {availableTasks.filter((task) => {
                        return task.lineId === line.lineId;
                    }).map((task) => {
                        const {taskId, name, label} = task;
                        return <li key={taskId}><Link to={`${url}/${taskId}`}>
                            <LocalString object={label}/>: <LocalString object={name}/>
                        </Link>
                        </li>
                    })}
                </ul>
            </div>;
        });
        return <>
            <h1>Tasks</h1>
            <h2>Available tasks</h2>
            {linesNodes}
            <h2>Solved tasks</h2>
            <h2>Unsolved tasks</h2>
        </>;
    }
}

const mapStateToProps = (state: Store): StoreProps => {
    return {
        tasks: state.tasksStorage.tasks,
        lines: state.tasksStorage.lines,
    }
}

export default connect(mapStateToProps, null)(List)
