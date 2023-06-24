import { useState } from 'react';
import usePosts from '../hooks/usePosts';
import React from 'react';

const PostList = () => {
  const pageSize = 10;
  const { data: posts, error, isLoading, fetchNextPage, isFetching } = usePosts({ pageSize });
  
  if (isLoading) return <p>Loading...</p>
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul className="list-group">
        {posts.pages.map((page, index) => 
            <React.Fragment key={index}>
              {page.map(post => <li key={post.id} className="list-group-item">
                {post.title}
              </li>)}
            </React.Fragment>)}
      </ul>
      <button  
      className="btn btn-primary my-3 ms-1"
      disabled={isFetching}
      onClick={() => fetchNextPage()}
      >
      Load more
      </button>
    </>
  );
};

export default PostList;
