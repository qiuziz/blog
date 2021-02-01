/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date: 2019-10-31 20:39:25
 * @Last Modified by: qiuz
 * @Last Modified time: 2021-02-01 22:35:46
 */

import React, { useEffect, useRef, useState } from 'react';
import './index.less';
import { Resource } from 'service';
import { Post } from 'components';
import { useViewport } from 'hooks';
import useLoading from 'hooks/use-loading';

const PER_PAGE = 5;

export const Home = () => {
  const [postList, setPostList] = useState<any[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [isReq, setReq] = useState(false);
  const ref = useRef(null);
  const loading = useLoading(ref);

  const getPosts = (page = 1) => {
    if (!hasMore || isReq) return;
    setReq(true);
    Resource.issues
      .get({ per_page: PER_PAGE, page: page })
      .then((res: any) => {
        setPostList([...postList, ...res]);
        setPage((page) => page + 1);
        setHasMore(!(res.length < PER_PAGE));
      })
      .finally(() => {
        setReq(false);
      });
  };

  useEffect(() => {
    loading && getPosts(page);
  }, [loading]);

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
      <Post data={postList} />
      {hasMore && <div ref={ref}>loading...</div>}
    </div>
  );
};
