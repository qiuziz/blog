/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date: 2019-10-31 20:39:25
 * @Last Modified by: qiuz
 * @Last Modified time: 2021-01-29 12:03:12
 */

import React, { useState, useEffect, useCallback } from 'react';
import './index.less';
import { Resource } from 'service';
import { getUrlParams, dateFormat } from 'utils';
import Markdown from 'react-markdown';
import { Loading } from 'components';

interface PropsType {
  History: any;
  location: any;
  history: any;
}

export const Article = (props: PropsType) => {
  const { number } = getUrlParams();
  const [data, setData] = useState({} as any);
  const getArticle = useCallback(() => {
    Resource.issues.get({ number }).then((res: any) => {
      console.log(res);
      document.title = res.title;
      setData(res);
    });
  }, [number]);

  useEffect(() => {
    getArticle();
  }, [getArticle]);

  return (
    <div className="article content">
      {data.title ? (
        <React.Fragment>
          <h2>{data.title}</h2>
          <p className="publish-time">
            {data.updated_at && dateFormat(new Date(data.updated_at))} by{' '}
            <a href="https://github.com/qiuziz">qiuz</a>
          </p>
          <Markdown source={data.body} />
          <p className="commit">
            <label>
              <a href={`https://github.com/qiuziz/qiuziz.github.io/issues/${number}`}>去评论</a>
            </label>
          </p>
        </React.Fragment>
      ) : (
        <Loading className="fixed" />
      )}
    </div>
  );
};
