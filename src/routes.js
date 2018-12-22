import React from 'react';
import Layout from './Hoc/Layout'
import { Switch , Route} from 'react-router-dom'

import Home from './Components/home';

const Routes = (props) => {
  return(
    <Layout>
      <Switch>
        <Route component={Home} path='/' />
      </Switch>
    </Layout>
  )
}

export default Routes;


// Here is where my routes are going. 