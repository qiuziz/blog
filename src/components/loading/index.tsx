/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date: 2019-11-07 15:36:30
 * @Last Modified by: qiuz
 * @Last Modified time: 2021-01-29 12:08:40
 */

import React from 'react';
import './index.less';

interface Props {
	className?: string;
	zoom?: number
}

export const Loading = (props:Props) => {
	const { className = '', zoom } = props;
	return (
		<div className={`loading__box ${className}`}>
			<div className="loading__box-lds" style={{zoom: zoom}}>
					<div /><div /><div />
			</div>
		</div>
	);
};
