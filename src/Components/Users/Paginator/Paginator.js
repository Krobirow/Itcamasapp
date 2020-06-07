import React, { useState } from "react";
import s from "./paginator.module.css";

const Paginator = ({
	currentPage,
	totalUsersCount,
	pageSize,
	onPageChanger,
	portionSize = 15,
}) => {
	let pagesCount = Math.ceil(totalUsersCount / pageSize);

	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	let portionCount = Math.ceil(pagesCount / portionSize);
	let [portionNumber, setPortionNumber] = useState(1);
	let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
	let rightPortionPageNumber = portionNumber * portionSize;

	return (
		<div className={s.paginationWrapp}>
			{
				<button disabled={portionNumber === 1}
					onClick={() => {
						setPortionNumber(portionNumber - 1);
					}}>
					PREV
				</button>
			}

			{pages
				.filter(page =>
						page >= leftPortionPageNumber && page <= rightPortionPageNumber
				)
				.map(page => {
					return (
						<span
							key={page}
							onClick={(e) => {
								onPageChanger(page);
							}}
							className={currentPage === page ? s.selectedPage : undefined}>
							{page}
						</span>
					);
				})}
			{
				<button
                    disabled={pages.length < rightPortionPageNumber}
					onClick={() => {
						setPortionNumber(portionNumber + 1);
					}}>
					NEXT
				</button>
			}
		</div>
	);
};

export default Paginator;
