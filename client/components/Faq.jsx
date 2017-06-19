import React from 'react'

import { Link } from 'react-router-dom'

const Faq = () =>
(
   <div className="faq">
      <h3> Why does Gurgl exist? </h3>
      <p>
      Inspired to reduce the impact on our planet, to lessen our footprint and to support local communities, Gurgl is the brainchild of a newly qualified web-developer who wanted an excuse to practise her skills. The idea was solidified during excitable conversations and dinners with friends and their new borns...
      </p>
      <p>
      With little encouragement the developer set about creating a business model, a network and a website. She now dreams of bringing Gurgl to every town, and anyone who can benefit from the borrow-a-bib service they provide. So please, spread the news, tell your friends and feel free to oooh and ahhh over <em>her</em> new baby!
      </p>

      <h3> How does it work? </h3>
      <p>
      We take donations of preloved clothing from individuals and organisations with clothing to spare. Each item is checked over and cleaned. So that you can flick through our gallery and choose the gurgl-iscious items you would like to borrow. Select and add them to your basket, once you are done, you simply complete your details and we will send you your items. They are due back 2 months from the day you book them out - or when your little-ones grow out of them. Once you return the items you have borrowed, you can borrow more!
      </p>
      <p>
      Obviously the cleaning and the postage all cost money, which is why we ask for a membership fee, this payment is required at the point you place your first order and from that month onwards it goes directly to continuing all the services we provide. Gurgl is a not-for-profit community organisation, so any excess funds will be donated to a local charitable cause.
      </p>

      <h3> What are the rankings? </h3>
      <p>
      When you place your first order with Gurgl you are allocated an 'Early Gurg' membership. Assuming you follow our T&C's and behaviour standards, your ranking organically increases every year that you continue to be a member. The other ranks to aspire to are, Gurglerino, Gurgler and Gurglest. Gurglezilla ranking is reserved for people who have also been contributors.
      </p>

      <h3> How many items can I hire? </h3>
      <p>
         Choeckut the below table for timelines and guidelines on borrowing. Please note if you want to hire have 5 t-shirts, that is cool with us!
      </p>
      <table>
        <thead>
          <tr>
            <th>Time as active member</th>
            <th>Member status</th>
            <th>Number of items</th>
            <th>Example items</th>
          </tr>
        </thead>
        <tbody>
           <tr>
             <td>0 - 12 Months</td>
             <td>Early Gurg</td>
             <td>5</td>
             <td>2 vests, 1 t-shirt, 1 skirt/pants, 1 outerwear</td>
           </tr>
          <tr>
            <td>12 - 24 Months</td>
            <td>Gurglerino</td>
            <td>8</td>
            <td>2 vests, 2 t-shirts, 1 skirt/pants, 1 outerwear, 1 pj set, 1 dress or 1 other </td>
          </tr>
          <tr>
            <td>24 - 36 Months</td>
            <td>Gurgler</td>
            <td>12</td>
            <td>2 vests, 2 t-shirts, 2 skirt/pants, 2 outerwear, 2 pj sets, 1 dress or 1 other </td>
          </tr>
          <tr>
            <td>36 - 48 Months</td>
            <td>Gurglest</td>
            <td>15</td>
            <td>3 vests, 2 t-shirts, 2 skirt/pants, 2 outerwear, 2 pj sets, 2 dresses or 2 others </td>
          </tr>
          <tr>
           <td>Over 48 Months <br />or a contributor</td>
           <td>Gurglzilla</td>
           <td>Not sure yet?</td>
           <td>Leave it with us... we'll get back to you, in a few years</td>
          </tr>
        </tbody>
      </table>

      <h3> Can I make a clothing donation? </h3>
      <p>
      We would love that! Please get in touch either by email or calling on the number at the bottom of the page, and we can arrange the details.
      </p>

      <h3>Where are your terms and conditions?</h3>
      <p>
        Right here! <Link to ={`/terms`}><a>Our Terms & Conditions</a></Link >
      </p>

   </div>
)

export default Faq
