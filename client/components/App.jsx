import React from 'react'

import Header from './Header'
import Nav from './Nav'
import SignUpForm from './SignUpForm'
import ClothingContainer from '../containers/ClothingContainer'
import SingleView from './SingleView'
import Faq from './Faq'
import Footer from './Footer'

import {HashRouter as Router, Route} from 'react-router-dom'

const App = () =>
   (
   <Router>
      <div className='app'>
         <Header />
         <Route path="*" component={Nav} />
         <h1>Gurgl yo!</h1>
         <Route path="/signup" component={SignUpForm} />
         <Route path="/clothing" component={ClothingContainer} />
         <Route path="/singleview" component={SingleView} />
         <Route path="/faq" component={Faq} />
         <Footer />
      </div>
   </Router>
)

export default App
