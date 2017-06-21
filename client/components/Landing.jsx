import React from 'react'

const Landing = () =>
   (
   <div className="landing">
     <img className="cute-bird" src="/images/cute-bird.png" alt="cute bird"/>
     <h2>Kids grow. Clothes do<span>n</span><span id='apostrophe'>&#39;</span>t.</h2>
      <h3> Our mission is to save resources, save our planet and save you money.</h3>
      <img className="cute-bird-mobile" src="/images/cute-bird.png" alt="cute bird"/>
      <p>
      Through donations from individuals (like you), and organisations with clothing to spare. <br/>We hope to create a circular-economy. Where we reduce the amount of newly purchased fast-fashion items in production.
      Replacing them with rescued items, which have lots more love to give.
      </p>
      <p>
      We provide a fun, easy platform for you to recycle your childrens wardrobes, and borrow more! With your help, we can redirect perfectly good clothing out of the landfill waste pile and onto the backs of children who need them.
      </p>
      <p>
      We can all play our part. We can have a positive impact on our planet and leave it in a better, preloved condition for the next generations of Kiwis.
      </p>
      <div className="centered">
      <a className="button button-primary" href="/#/faq">Learn more</a>
      </div>
   </div>
   )

export default Landing
