export const getPaginationArray = (
    currentPage: number,
    totalPages: number,
    maxVisiblePages: number = 5
  ) => {
    const pagination: (number | string)[] = [];
    const start = Math.max(2, currentPage - Math.floor(maxVisiblePages / 2));
    const end = Math.min(
      totalPages - 1,
      currentPage + Math.floor(maxVisiblePages / 2)
    );

    pagination.push(1);
  

    if (start > 2) {
      pagination.push("...");
    }
  

    for (let i = start; i <= end; i++) {
      pagination.push(i);
    }
  
   
    if (end < totalPages - 1) {
      pagination.push("...");
    }
  
    
    if (totalPages > 1) {
      pagination.push(totalPages);
    }
  
    return pagination;
  };
  