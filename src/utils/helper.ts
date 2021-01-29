/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date:  2021-01-29 10:46:45
 * @Last Modified by: qiuz
 */

import queryString from 'qs';

/**
 * @description 时间对象格式化
 * @param date
 * @param format
 */
export const dateFormat = (date: Date, format: string = 'yyyy-MM-dd hh:mm:ss'): string => {
	if (!date) return '';
	let args = {
		'M+': date.getMonth() + 1,
		'd+': date.getDate(),
		'h+': date.getHours(),
		'm+': date.getMinutes(),
		's+': date.getSeconds(),
		'q+': Math.floor((date.getMonth() + 3) / 3), // quarter
		'S': date.getMilliseconds()
	};
	if (/(y+)/.test(format)) { format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length)); }
	for (let i in args) {
		// @ts-ignore
		let n = args[i];
		if (new RegExp('(' + i + ')').test(format)) { format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? n : ('00' + n).substr(('' + n).length)); }
	}
	return format;
}



/**
 * @description 获取当前url参数
 * @returns object
 */
export const getUrlParams = (): any => {
	const search = window.location.href.split('?')[1];
	return queryString.parse(search);
}
