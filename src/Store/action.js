import { OPEN_COMPOSE, CLOSE_COMPOSE , SIGN_IN, SIGN_OUT } from "./Constants";
export const openCompose = () => {
  return {
    type: "OPEN_COMPOSE",
  };
};

export const closeCompose = () => {
  return {
    type: "CLOSE_COMPOSE",
  };
};

export const openMessage = (messageData) => {
  return {
    type: "OPEN_MESSAGE",
    payload: messageData,
  };
};

export const signin = (data) => {
  return {
    type: "SIGN_IN",
    payload: data,
  };
};

export const signout = (data) => {
  return {
    type: "SIGN_OUT",
    payload: data,
  };
};
