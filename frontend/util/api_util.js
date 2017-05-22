var SessionActions = require('../actions/session_actions');

export const login = (loginData) => {
  return $.ajax({
    method: 'POST',
    url: 'api/session',
    data: { loginData },
  });
};
