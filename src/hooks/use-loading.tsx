/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date:  2021-02-01 17:58:31
 * @Last Modified by: qiuz
 */

import React, { useEffect, useState } from 'react';

const useLoading = (
  ref: React.MutableRefObject<null>,
  option?: IntersectionObserverInit | undefined
) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!ref.current) {
      return () => {};
    }
    const node = ref.current;
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        setLoading(entry.isIntersecting);
      });
    }, option);
    if (node != null) {
      observer.observe(node);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return loading;
};

export default useLoading;
