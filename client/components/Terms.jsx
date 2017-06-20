import React from 'react'
import { Link } from 'react-router-dom'

const Terms = () =>
(
   <div className="terms">
      <audio id='Mashup' src="/audio/laugh.mp3" autoPlay={true}>
        Your browser does not support the <code>audio</code> element.
      </audio>
      <h3> TERMS AND CONDITIONS OF HIRE </h3>
      <p>Gurgl agrees to hire garments listed on the website to the Customer Account listed on the website under the following terms and conditions.</p>
      <ul>
         <li> Any garment hired from Gurgl belongs to Gurgl.</li>
         <li>Upon establishing a loan, the Hirer agrees to all terms and conditions.</li>
         <li>The full cost of the hire must be paid prior to postage.</li>
         <li>The shortest membership period with Gurgl is 2 months - the length of one hire period. Returning items early will not permit a shorter subscription period.</li>
         <li>Gurgl agrees to post your loan items to you by the end of the working day following the day we receive payment for the order.</li>
         <li>Cancellation of an order or early return will not result in a reduction of the cost of membership, please ensure if you no longer require an item you return it as soon as practical.</li>
         <li>Consumer protection law does not apply to Change of Mind, or Change in Circumstances cancellations, refunds on cancellations are at the owners discretion. Refunds may be given in exceptional circumstances.</li>
         <li>The Hirer agrees to keep Gurgl's items in their position at all times throughout the hire period until the clothing is returned to Gurgl.</li>
         <li>If any garment hired from Gurgl does not meet your requirements, you can return it and loan an alternative but we do not refund any of the membership fee.</li>
         <li>Once a clothing item is posted it is deemed hired, regardless of whether it is used/worn or not - Gurgl has fulfilled its end of the Hire Agreement.</li>
         <li>The Hirer agrees to return the garments belonging to Gurgl on the date agreed. Late returns will incur a weekly late fee until returned. This will be charged to the card details used at point of hire.</li>
         <li>The Hirer is liable for any loss or damage beyond normal wear and tear to any hire garment and this will be assessed at retail value. This includes all accessories hired.</li>
         <li>The Hirer agrees to notify Gurgl on or prior to return of any garment has damage or requires repair in any way.</li>
         <li>The Hirer will be liable for costs for un-returned or damage beyond normal wear and tear, including, but not limited to debt collection.</li>
         <li> Gurgl is not liable to the Hirer or any third party for any costs incurred. Such cause presumes an absence of any negligence on the part of Gurgl.</li>
      </ul>
      <p>Gurgl recommends that all items are tried on to ensure fit etc. If you have any problems or concerns please contact Gurgl, on 021 1322 187.</p>
      <h4>Your smile is our Success.</h4>
         <p>
           Thanks, I am done here! <Link to ={'/faq'}>Back to the FAQ</Link >
         </p>
   </div>
)

export default Terms
