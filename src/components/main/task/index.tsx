import * as React from 'react';
import { Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom';
import TaskList from '@app/components/main/task/list';
import Task from '@app/components/main/task/task';

class Index extends React.Component<RouteComponentProps, {}> {

    public render() {
        const {url} = this.props.match;
        return <main className="container">
            <Switch>
                <Route path={`${url}/:id`}>
                    <Task/>
                </Route>
                <Route path="*">
                    <TaskList url={url}/>
                </Route>
            </Switch>
        </main>;
    }
}

export default withRouter(Index);
