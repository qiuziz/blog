/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date: 2019-10-31 20:39:25
 * @Last Modified by: qiuz
 * @Last Modified time: 2021-01-29 12:08:30
 */

import React from 'react';
import './index.less';
import { dateFormat, getGlobalData } from 'utils';
import { useViewport } from 'hooks';

interface PropsType {
  data: any[];
  onClick?: (...args: any) => void;
}

export const Post = (props: PropsType) => {
  const { data, onClick = () => {} } = props;

  const prefix = getGlobalData('PREFIX');

  const onPostClick = (data: any) => () => {
    onClick(data);
  };

  const { width } = useViewport();

  return (
    <div className="post-container">
      {data.map((post: any) => {
        return (
          <div key={post.id} className="post__content" onClick={onPostClick(post)}>
            <h2 className={`title ${width <= 600 ? 'h2-max-width-600' : ''}`}>
              <a href={`${prefix}/blog/article?number=${post.number}`}>{post.title}</a>
            </h2>
            <p className="publish-time">
              {dateFormat(new Date(post.updated_at))} by{' '}
              <a href="https://github.com/qiuziz">qiuz</a>
            </p>
            <p className="intro">
              <a className={`${width <= 600 ? 'a-max-width-600' : ''}`} href={`${prefix}/blog/article?number=${post.number}`}>
                {post.body.slice(0, 200)}...
              </a>
            </p>
          </div>
        );
      })}
    </div>
  );
};
