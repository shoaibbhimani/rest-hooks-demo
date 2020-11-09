import React, { Suspense } from "react";
import { Box } from "@chakra-ui/core";
import { NetworkErrorBoundary } from "rest-hooks";

import { PostList } from "./components/post-list/post-list";
import { CreatePost } from "./components/create-post/create-post";
import { DelayedPostList } from "./components/delayed-post-list/delay-post-list";
import { CustomShape } from "./components/custom-shape/custom-shape";

import "./App.css";

const ErrorComponent = () => <div>Error</div>;

function App() {
  return (
    <>
      <Box marginTop=".7rem" textAlign="center">
        REST Hooks Session
      </Box>
      <div className="wrapper">
        <div className="box">
          <Suspense fallback={<div>Loading....</div>}>
            <NetworkErrorBoundary fallbackComponent={ErrorComponent}>
              <PostList />
            </NetworkErrorBoundary>
          </Suspense>
        </div>
        <div className="box">
          <DelayedPostList />
        </div>
        <div className="box">
          <CreatePost />
        </div>
      </div>
      <div className="wrapper">
        <Box className="box">
          <Suspense fallback={<div>Loading Product...</div>}>
            <NetworkErrorBoundary fallbackComponent={ErrorComponent}>
              <CustomShape />
            </NetworkErrorBoundary>
          </Suspense>
        </Box>
      </div>
    </>
  );
}

export default App;
