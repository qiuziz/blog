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
import { Post, Loading } from 'components';
import InfiniteScroll from 'react-infinite-scroller';

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
  const style =
    postList.length <= 0
      ? {
          className: 'fixed'
        }
      : {
          zoom: 0.2
        };
  return (
    <div className="home">
      <InfiniteScroll
        pageStart={0}
        loadMore={getPosts}
        hasMore={hasMore}
        loader={<Loading key={0} {...style} />}
      >
        <Post data={postList} />
      </InfiniteScroll>
    </div>
  );
};
