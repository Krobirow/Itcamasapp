import React from 'react';
import s from './paginator.module.css';


const Paginator = ({currentPage, totalUsersCount, pageSize, onPageChanger, ...props}) => {
	let pagesCount = Math.ceil(totalUsersCount / pageSize);

	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	return (
        <div className={s.paginationWrapp}>
            {pages.map((page) => {
                {/* if (page <= 25) { */}
                    return (
                        <span
                            key={page}
                            onClick={(e) => {
                                onPageChanger(page);
                            }}
                            className={
                                currentPage === page ? s.selectedPage : undefined
                            }>
                            {page}
                        </span>
                    );
                {/* } */}
            })}
        </div>
        )
}

export default Paginator;