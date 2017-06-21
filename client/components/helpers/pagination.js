import React from 'react'

export default function renderPagination (o) {
  let total = totalPages(o.itemsOnPage, o.clothing)
  let startEdge = Math.min(5, total)
  let endEdge = Math.max(1, total - 4)
  let pageArray = o.currentPage < 3
  ? [1, startEdge]
  : o.currentPage > total - 2
  ? [endEdge, total]
  : [o.currentPage - 2, o.currentPage + 2]
  let numberArray = [
    renderButton('prev', o),
    renderButton('next', o)
  ]

  for (let i = pageArray[1]; i >= pageArray[0]; i--) {
    numberArray.splice(1, 0,
      renderButton(i, o)
    )
  }

  return (
    <div className="paginationRow row">
      { numberArray }
    </div>
  )
}

export function totalPages (itemsOnPage, clothing) {
  return Math.ceil(clothing.length / itemsOnPage)
}

export function disableButton (type, {currentPage, itemsOnPage, clothing}) {
  if (type === 'next' && currentPage === totalPages(itemsOnPage, clothing)) return true
  else if (type === 'prev' && currentPage === 1) return true
  else if (type === currentPage) return true
  return false
}

export function navigateToPage (e, {currentPage, itemsOnPage, clothing, stepPage}) {
  if (e.target.name === 'next' && currentPage !== totalPages(itemsOnPage, clothing)) stepPage(currentPage + 1)
  else if (e.target.name === 'prev' && currentPage !== 1) stepPage(currentPage - 1)
  else if (!isNaN(e.target.name)) {
    stepPage(e.target.name)
  }
}

export function renderButton (type, o) {
  return (
    <button
      className={`
        paginationButton
        ${disableButton(type, o) ? 'disabled' : ''}
      `}
      name={type}
      key={type}
      id={`paginate-${type}`}
      onClick={(e) => navigateToPage(e, o)}>
      {type}
    </button>
  )
}
