import React, { ComponentType, Suspense } from "react";
import Preloader from "../common/Preloader/Preloader";


export function withSuspense<WCP extends object>(WrappedComponent: ComponentType<WCP>) {
	return (props: WCP) => {
		return <Suspense fallback={<div> <Preloader /> </div>} >
			<WrappedComponent {...props} />
		</Suspense>
	}
}