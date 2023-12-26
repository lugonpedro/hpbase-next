interface PaginationProps {
  pageNumbers: number;
}

export function Pagination(props: PaginationProps) {
  const array: Number[] = [];

  function makePaginationArray() {
    for (let i = 0; i < props.pageNumbers; i++) {
      array.push(i + 1);
    }

    // props.pageNumbers
  }

  makePaginationArray();

  return (
    <nav>
      <ul className="flex flex-row items-center gap-2 justify-center">
        {array.map((number) => (
          <li key={number.toString()}>{number.toString()}</li>
        ))}
        {/* {props.pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))} */}
      </ul>
    </nav>
  );
}
