import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  
`;

// export const Button = styled.button`
//   background: #007bff;
//   color: white;
//   font-size: 16px;
//   padding: 10px 16px;
//   border: none;
//   border-radius: 6px;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   gap: 8px;
//   transition: background 0.3s ease;

//   &:hover {
//     background: #0056b3;
//   }
// `;

export const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  text-align: center;
  color: #FFFFFF;
  background: #633CFF;
  border: 1px solid #ddd;
  border-radius: 6px;
  margin-top: 5px;
  padding: 0;
  list-style: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  z-index: 10;
`;

export const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;
  transition: background 0.2s;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;

  &:hover {
    background: #f0f0f0;
  }
`;