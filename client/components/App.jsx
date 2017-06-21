import React from 'react'

import ClothingContainer from '../containers/ClothingContainer'
import SignUpFormContainer from '../containers/SignUpFormContainer'
import SignInFormContainer from '../containers/SignInFormContainer'

import Nav from './Nav'
import Account from './Account'
import ErrorMessage from './ErrorMessage'
import SingleView from './SingleView'

import Header from './Header'
import Landing from './Landing'
import PageNotFound from './PageNotFound'
import Faq from './Faq'
import Terms from './Terms'
import Footer from './Footer'


import {HashRouter as Router, Route, Switch} from 'react-router-dom'

const App = () =>
   (
   <Router>
      <div className='app'>
         <Header />
         <div className="container-fluid">
           <Route component={Nav} />
           <Route component={ErrorMessage} />
           <Switch>
             <Route path="/" exact component={Landing} />
             <Route path="/clothing/:id" exact component={SingleView} />
             <Route path="/clothing" exact component={ClothingContainer} />
             <Route path="/signup" component={SignUpFormContainer}/>
             <Route path="/signin" component={SignInFormContainer}/>
             <Route path="/account" component={Account}/>
             <Route path="/singleview" component={SingleView} />
             <Route path="/faq" component={Faq} />
             <Route path="/terms" component={Terms} />
             <Route component={PageNotFound} />
           </Switch>
          </div>
         <Footer />
      </div>
   </Router>
)
export default App
