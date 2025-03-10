import React from "react";
import { getPaginationArray } from "./paginate";
import { PaginationContainer, PageButton } from "./PaginationStyles"


interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const paginationArray = getPaginationArray(currentPage, totalPages);

  return (
    <PaginationContainer>
      <PageButton
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Prev
      </PageButton>
      {paginationArray.map((item, index) => (
        <PageButton
          key={index}
          $active={currentPage === index + 1}
          onClick={() => onPageChange(index + 1)}
        >
          {item}
        </PageButton>
      ))}
      <PageButton
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </PageButton>
    </PaginationContainer>
  );
};
