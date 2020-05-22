import React from "react";

import '../../index.css';
import LoadingBar from "./index";

export default {
  component: LoadingBar,
  title: "LoadingBar",
};

export const Empty = () => <LoadingBar color="default"/>;
export const Loading = () => <LoadingBar loading percent="63.33"/>;
export const Loaded = () => <LoadingBar loaded />;