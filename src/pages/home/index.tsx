/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date: 2019-10-31 20:39:25
 * @Last Modified by: qiuz
 * @Last Modified time: 2021-01-29 12:03:28
 */

import React, { useState } from 'react';
import './index.less';
import { Resource } from 'service';
import { Post } from 'components';
import InfiniteScroll from 'react-infinite-scroller';
import { useViewport } from 'hooks';

export const Home = () => {
  const [postList, setPostList] = useState<any[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const getPosts = (page = 1) => {
    if (!hasMore) return;
    Resource.issues.get({ per_page: '10', page }).then((res: any) => {
      setPostList([...postList, ...res]);
      setHasMore(res.length >= 5);
    });
  };

  const { width } = useViewport();

  const maxWidth600 =
    width <= 600
      ? {
          margin: 0,
          width: '100%'
        }
      : {};

  return (
    <div className="home" style={maxWidth600}>
      <InfiniteScroll
        pageStart={0}
        loadMore={getPosts}
        hasMore={hasMore}
        loader={<div key={0}>loading...</div>}
      >
        <Post data={postList} />
      </InfiniteScroll>
    </div>
  );
};
