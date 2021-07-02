import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import Form from './Components/Form/Form'



function Main() {
    return (
        
        <main role="main">
                <Switch>
                    <Route exact path="/form" component={Form} />
                    <Route exact path="/" component={Home} />
                </Switch>
        </main>
    )
    
}

export default Main