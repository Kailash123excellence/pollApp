// import React from "react";
// import { Link } from "react-router-dom";
// import TablePagination from "@mui/material/TablePagination";
// import Pagination from "@mui/material/Pagination";
// import Stack from "@mui/material/Stack";

// const PaginationPage = ({ postPerPage, totalPost, paginate }) => {
//   const pageNumbers = [];
//   for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   console.log(pageNumbers,"@@@@@@");
//   // const handleChangeRowsPerPage = (event) => {
//   //     setRowsPerPage(event.target.value);
//   //     setPage(0);
//   //   };

//   return (
    

//     <nav>
//       <ul className='pagination'>
//         {pageNumbers.map((number)=>{
//           return (
//             <>
//               <li key={number} className="page-item">
//                 <Link
//                   onClick={() => paginate(number)}
//                   to="#"
//                   className="page-link"
//                   >
//                   {number}
//                 </Link>
//               </li>
//             </>
//           );
//         })}
//       </ul>
//     </nav>
//   )
// };

// export default PaginationPage;
