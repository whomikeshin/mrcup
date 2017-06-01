// var SessionActions = require('../actions/session_actions');
import SessionActions from '../actions/session_actions';

// import $ from 'jquery';

const ApiUtil = {
  login: function (credentials, callback) {
      $.ajax({
      type: 'POST',
      url: 'api/session',
      data: credentials,
      success: function (currentUser) {
        SessionActions.currentUserReceived(currentUser);
        callback && callback();
      }
    });
  },
};

export { ApiUtil as default };
