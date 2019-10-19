import get from "lodash/get";

export const theme = propStringPath => props =>
  get(props.theme, propStringPath);
