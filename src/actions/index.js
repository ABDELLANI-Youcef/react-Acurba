const CREATE_TOKEN = 'CREATE_TOKEN';
const REMOVE_TOKEN = 'REMOVE_TOKEN';

const createToken = (token) => ({
  type: CREATE_TOKEN,
  payload: token,
});

const removeToken = () => ({
  type: REMOVE_TOKEN,
});

export {
  CREATE_TOKEN, REMOVE_TOKEN, createToken, removeToken,
};
