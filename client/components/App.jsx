import React from 'react'

import Header from './Header'


import Collection from './Collection'
import SingleView from './SingleView'
import Faq from './Faq'
import Footer from './Footer'
import Account from './Account'
import SignUpFormContainer from '../containers/SignUpFormContainer'
import SignInFormContainer from '../containers/SignInFormContainer'

import {HashRouter as Router, Route} from 'react-router-dom'

const App = () =>
   (
   <Router>
      <div className='app'>
         <Header />
         <Route path="/signup" component= {SignUpFormContainer} />
         <Route path="/signin" component= {SignInFormContainer} />
         <Route path="/collection" component= {Collection} />
         <Route path="/singleview" component= {SingleView} />
         <Route path="/faq" component= {Faq} />
         <Route path="/account" component= {Account} />
         <Footer />
      </div>
   </Router>
)

export default App
