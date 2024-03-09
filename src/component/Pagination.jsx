 
function Pagination({
  filteredDishes,
  itemsPerPage,
  setCurrentPage,
}) {

  let numberOfPages = [];
  for (let i = 1; i <= Math.ceil(filteredDishes.length / itemsPerPage); i++) {
    numberOfPages.push(i);
  }
  function getNextDishes(event) {
    let pageNumber = event.target.id;
    setCurrentPage(pageNumber);
    
  }

  let pages = numberOfPages.map((pageNumber, key) => {
    return (
      <li id={pageNumber} onClick={getNextDishes} key={key}>
        {pageNumber}
      </li>
    );
  });

  return <ul className="pagination flex">{pages}</ul>;
}

export default Pagination;
