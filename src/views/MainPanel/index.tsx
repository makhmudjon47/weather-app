import React, { FunctionComponent } from 'react'
import Info from '../../components/main/Info'
import Chart from '../../components/main/Chart'
import { Route, Switch, Redirect } from 'react-router-dom'

const MainPanel: FunctionComponent = () => {
    return (
        <div className="z-10 flex items-center justify-center relative">
            <Switch>
                <Route path="/:week" component={Chart}/>
                <Route path="/" component={Info} />
            </Switch>
        </div>
    )
}

export default MainPanel