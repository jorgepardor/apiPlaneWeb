import { configureStore } from "@reduxjs/toolkit";
import getCurrentPlanes from "./features/getPlanesSlice";

export default configureStore({
  reducer: {
    post: getCurrentPlanes,
  },
});
