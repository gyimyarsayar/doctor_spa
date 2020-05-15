import { SET_STATE } from "./types";

export const setState = (data) => ({
  type: SET_STATE,
  payload: { ...data }
});
