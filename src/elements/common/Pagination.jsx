import React from 'react';
import Paginate from 'react-paginate';

export default function Pagination(){

    const handlePagination = (idx) => {
        console.log(idx);
    }
    return (
        <div className="rn-pagination text-center">
            <Paginate onPageChange={handlePagination} previousLabel="Өмнөх" nextLabel="Дараагийнх" pageCount={10} containerClassName="page-list" activeClassName="active"/>
        </div>
    )
}
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaAngleRight } from "react-icons/fa";

// export default function Pagination() {
//     return (
//         <div className="rn-pagination text-center">
//             <ul className="page-list">
//                 <li className="active"><Link to="#">1</Link></li>
//                 <li><Link to="#">2</Link></li>
//                 <li><Link to="#">3</Link></li>
//                 <li><Link to="#">4</Link></li>
//                 <li><Link to="#"><FaAngleRight /></Link></li>
//             </ul>
//         </div>
//     )
// }