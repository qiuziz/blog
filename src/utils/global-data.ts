/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date: 2020-06-01 19:13:52
 * @Last Modified by: qiuz
 * @Last Modified time: 2020-08-11 12:21:44
 */

const globalData: any = {};

const TK = ["4", "3", "0", "7", "e", "6", "d", "4", "b", "b", "b", "8", "6", "5", "e", "6", "e", "1", "f", "4", "5", "b", "d", "b", "3", "4", "1", "6", "3", "8", "6", "d", "3", "e", "c", "0", "c", "1", "3", "b"];

globalData['TK'] = TK.join('');

const setGlobalData = (key: string, val: any) => {
  globalData[key] = val;
};

const getGlobalData = (key: string) => {
  return globalData[key];
};

export { setGlobalData, getGlobalData };
