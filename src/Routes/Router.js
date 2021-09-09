import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ListJokes from '../ListJokes/ListJokes'
import SelectJokes from '../SelectJokes/SelectJokes'
import StylizedJokes from '../StylizedJokes/StylizedJokes'

function Router() {
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path= "/">
                <ListJokes/>
            </Route>
            <Route exact path= "/piada/:id">
                <SelectJokes/>
            </Route>
            <Route exact path= "/piada/random">
                <StylizedJokes/>
            </Route>
        </Switch>
        </BrowserRouter>
    )
}
export default Router;