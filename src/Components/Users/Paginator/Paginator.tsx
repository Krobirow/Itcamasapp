import React, { useState } from "react";
import s from "./paginator.module.css";

type PropsType = {
	currentPage: number,
	totalUsersCount: number,
	pageSize: number,
	onPageChanger: (pageNumber: number) => void,
	portionSize?: number,
}

const Paginator: React.FC<PropsType> = ({ currentPage, totalUsersCount, pageSize, onPageChanger, portionSize = 15 }) => {
	const pagesCount = Math.ceil(totalUsersCount / pageSize);

	const pages: Array<number> = [];
	for (let i = 1; i <= pagesCount; i++) pages.push(i);

	const [portionNumber, setPortionNumber] = useState(1);
	const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
	const rightPortionPageNumber = portionNumber * portionSize;

	return (
		<div className={s.paginationWrapp} >
			
			<button type="button" disabled={portionNumber === 1}
				onClick={() => {setPortionNumber(portionNumber - 1);}}>
				PREV
			</button>

			{pages
				.filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
				.map(page => {
					return (
						<span
							key={page}
							onClick={() => onPageChanger(page)}
							className={currentPage === page ? s.selectedPage : undefined}>
							{page}
						</span>
					);
				})}

			<button  type="button" disabled={pages.length < rightPortionPageNumber}
				onClick={() => setPortionNumber(portionNumber + 1)}>
				NEXT
			</button>
		</div>
	);
};

export default Paginator;
