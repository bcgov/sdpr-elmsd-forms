import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import Form from './Components/Form/Form'
import PrivateRoute from './routes/PrivateRoute'



function Main() {
    return (
        
        <main role="main">
                <Switch>
                    <PrivateRoute component={Form} roles={['elmsd-form']} path="/form"   />
                    <Route exact path="/" component={Home} />
                </Switch>
        </main>
    )
    
}

export default Main