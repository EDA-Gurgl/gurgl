import test from 'ava'
import sinon from 'sinon'

import * as p from '../../client/components/helpers/pagination'

test('totalPages returns correct number', t => {
  let testArray = [{},{},{},{},{},{},{},{},{},{}]
  t.is(p.totalPages(5, testArray), 2)
})

test('disableButton returns correct value if button is next and at the end of pages', t => {
  // let totalPages = sinon.stub(p, 'totalPages').callsFake(console.log)
  let testObject = {
    currentPage: 2,
    itemsOnPage: 1,
    clothing: [{}, {}]
  }
  t.is(p.disableButton('next', testObject), true)
})

test('disableButton returns correct value if button is prev and at the start of pages', t => {
  // sinon.stub(p, 'totalPages').callsFake(console.log)
  let testObject = {
    currentPage: 1,
    itemsOnPage: 1,
    clothing: [{}, {}]
  }
  t.is(p.disableButton('prev', testObject), true)
})

test('disableButton returns correct value if button is a number and currently selected', t => {
  // sinon.stub(p, 'totalPages').callsFake(console.log)
  let testObject = {
    currentPage: 1,
    itemsOnPage: 1,
    clothing: [{}, {}]
  }
  t.is(p.disableButton(1, testObject), true)
})

test('disableButton returns correct value for button shouldnt be disabled', t => {
  // sinon.stub(p, 'totalPages').callsFake(console.log)
  let testObject = {
    currentPage: 2,
    itemsOnPage: 1,
    clothing: [{}, {}]
  }
  t.is(p.disableButton(1, testObject), false)
})

test('navigateToPage calls stepPage for appropriate number if button is next', t => {
  let stepPage = sinon.stub()
  let testObject = {
    currentPage: 1,
    itemsOnPage: 1,
    clothing: [{}, {}],
    stepPage
  }

  let e = {
    target: {
      name: 'next'
    }
  }
  p.navigateToPage(e, testObject)
  t.is(stepPage.calledWith(2), true)
})

test('navigateToPage calls stepPage for appropriate number if button is previous', t => {
  let stepPage = sinon.stub()
  let testObject = {
    currentPage: 2,
    itemsOnPage: 1,
    clothing: [{}, {}],
    stepPage
  }

  let e = {
    target: {
      name: 'prev'
    }
  }
  p.navigateToPage(e, testObject)
  t.is(stepPage.calledWith(1), true)
})

test('navigateToPage calls stepPage for appropriate number if button is number', t => {
  let stepPage = sinon.stub()
  let testObject = {
    currentPage: 2,
    itemsOnPage: 1,
    clothing: [{}, {}],
    stepPage
  }

  let e = {
    target: {
      name: 1
    }
  }
  p.navigateToPage(e, testObject)
  t.is(stepPage.calledWith(1), true)
})

// export function renderButton (type, o) {
//   return (
//     <button
//       className={`
//         paginationButton
//         ${disableButton(type, o) ? 'disabled' : ''}
//       `}
//       name={type}
//       key={type}
//       id={`paginate-${type}`}
//       onClick={(e) => navigateToPage(e, o)}>
//       {type}
//     </button>
//   )
// }

test('renderButton returns appropriate button', t => {
  let stepPage = sinon.stub()
  let testObject = {
    currentPage: 2,
    itemsOnPage: 1,
    clothing: [{}, {}],
    stepPage
  }

  let e = {
    target: {
      name: 1
    }
  }
  let button = p.renderButton(1, testObject)
  t.is(button.props.id, 'paginate-1')
  
  button.props.onClick(e, testObject)
  t.is(stepPage.calledOnce, true)
})
