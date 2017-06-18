import React from 'react'

import Header from './Header'
import Nav from './Nav'
import Landing from './Landing'
import SignUpForm from './SignUpForm'
import ClothingContainer from '../containers/ClothingContainer'
import SingleView from './SingleView'
import SignUpForm from './SignUpForm'
import Faq from './Faq'
import Footer from './Footer'

import {HashRouter as Router, Route} from 'react-router-dom'

const App = () =>
   (
   <Router>
      <div className='app'>
         <Header />
         <Route path="*" component={Nav} />
         <Route path="/" exact={true} component={Landing} />
         <Route path="/signup" component={SignUpForm} />
         <Route exact path="/" component={Landing} />
         <Route path="/clothing" component={ClothingContainer} />
         <Route path="/singleview" component={SingleView} />
         <Route path="/faq" component={Faq} />
         <Footer />
      </div>
   </Router>
)

export default App
