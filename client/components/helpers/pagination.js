import React from 'react'

export default function renderPagination (currentPage, itemsOnPage, clothing, stepPage) {
  let total = totalPages(itemsOnPage, clothing)
  let startEdge = Math.min(5, total)
  let endEdge = Math.max(1, total - 4)
  let pageArray = currentPage < 3
  ? [1, startEdge]
  : currentPage > total - 2
  ? [endEdge, total]
  : [currentPage - 2, currentPage + 2]
  let numberArray = [
    renderButton('prev', currentPage, itemsOnPage, clothing, stepPage),
    renderButton('next', currentPage, itemsOnPage, clothing, stepPage)
  ]

  for (let i = pageArray[1]; i >= pageArray[0]; i--) {
    numberArray.splice(1, 0,
      renderButton(i, currentPage, itemsOnPage, clothing, stepPage)
    )
  }

  return (
    <div className="paginationRow row">
      { numberArray }
    </div>
  )
}

function totalPages (itemsOnPage, clothing) {
  return Math.ceil(clothing.length / itemsOnPage)
}

function disableButton (type, currentPage, itemsOnPage, clothing) {
  if (type === 'next' && currentPage === totalPages(itemsOnPage, clothing)) return true
  else if (type === 'prev' && currentPage === 1) return true
  else if (type === currentPage) return true
  return false
}

function navigateToPage (e, currentPage, itemsOnPage, clothing, stepPage) {
  if (e.target.name === 'next' && currentPage !== totalPages(itemsOnPage, clothing)) stepPage(currentPage + 1)
  else if (e.target.name === 'prev' && currentPage !== 1) stepPage(currentPage - 1)
  else if (!isNaN(e.target.name)) {
    stepPage(e.target.name)
  }
}

function renderButton (type, currentPage, itemsOnPage, clothing, stepPage) {
  return (
    <button
      className={`
        paginationButton
        ${disableButton(type, currentPage, itemsOnPage, clothing) ? 'disabled' : ''}
      `}
      name={type}
      key={type}
      onClick={(e) => navigateToPage(e, currentPage, itemsOnPage, clothing, stepPage)}>
      {type}
    </button>
  )
}
