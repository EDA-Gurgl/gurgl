import React from 'react'

const Landing = () =>
   (
   <div className="landing">
     <img className="cute-bird" src="/images/cute-bird.png" alt="cute bird"/>
     <h2>Kids grow. Clothes don&#39;t.</h2>
      <h3> Our mission is to save resources, save our planet and save you money.</h3>
      <img className="cute-bird-mobile" src="/images/cute-bird.png" alt="cute bird"/>
      <p>
      Through donations from individuals (like you), and organisations with clothing to spare, <br/>we hope to create a circular-economy. Where we reduce the amount of newly purchased fast-fashion items in production.
      Replacing them with rescued items, which have lots more love to give.
      </p>
      <p>
      We provide a fun, easy platform for you to recycle your childrens wardrobes, and borrow more! With your help, we can save perfectly good clothing from going to waste, and give it back to growing kids who need them.
      </p>
      <p>
      We can all play our part. We can have a positive impact on our planet and leave it in a better, preloved condition for the next generations of Kiwis.
      </p>
      <div className="centered">
      <a className="button button-primary" href="/#/faq">Learn more</a>
      <p>
         If you would like to donate your preloved infant clothing - under 24 months - let us know. We can save you from clothing clutter!
         Drop us a line at <b><a href ="mailto:hello@gurgl.nz">hello@gurgl.nz</a></b> to arrange a collection.
      </p>
      <p>
      What you want from a service like Gurgl? Feel free to send us your suggestions and feedback.
      </p>
      </div>
   </div>
   )

export default Landing
