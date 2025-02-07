import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, setCurrentPage }) => {
  return (
    <div className="pagination">
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <span>Page {currentPage} of {totalPages}</span>
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage >= totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
