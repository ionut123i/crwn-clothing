// import { createSelector } from "reselect";

// const selectDirectory= state=> state.selectDirectory

// export const selectDirectorySections=createSelector(
//     [selectDirectory],
//     directory=>directory.sections
// )
import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  directory => directory.sections
);