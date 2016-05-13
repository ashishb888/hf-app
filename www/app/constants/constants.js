angular.module('starter').constant('starterConfig', (function() {
  console.debug("env: " + env);
  var ws;
  var staticResUrl;
  var tcUrl = urls.tcUrl;
  var helpUrl;
  var httpReq = {
    timeout: 60000,
    config: {
      timeout: 60000,
      headers: {
        'Content-Type': 'applcation/json'
      }
    }
  };
  var sweetMsgs = {
    globalCommonError: "Oops. Something went wrong. Please try again later.",
    noConnMsg: "Unable to reach server. Please check your internet connection and try again.",
    walletAddSuc: "Wallet added",
    error: "Error",
    success: "Success",
    accIbanMismatch: "Account number does not match with IBAN",
    ibanInvalid: "Invalid IBAN",
    passwdMisMatches: "New password and confirm new password does not match"
  };
  var httpStatus = {
    ERROR: "error",
    SUCCESS: "success"
  };
  var tokenErrorCodes = {
    token_not_provided: "token_not_provided",
    token_expired: "token_expired",
    token_invalid: "token_invalid"
  };
  var tokenErrorMsgs = {
    token_not_provided: "Authentication token is not provided. Please signin again.",
    token_expired: "Authentication token is expired. Please signin again.",
    token_invalid: "Authentication token is invalid. Please signin again."
  };
  var hfStates = {
    address: "address",
    placeorder: "menu.placeorder",
    signin: "signin"
  };
  var screenTitles = {
    signin: "Sign in",
    signup: "Sign up",
    offerslist: "Offers",
    wallets: "Money",
    settings: "Settings"
  };
  var sweetWIUs = {
    offerdetails: "offerdetails"
  };
  var httpKeys = {
    req: "req",
    resp: "resp",
    respErr: "respErr"
  };
  var modal = {
    animation: "slide-in-up"
  };
  var pullRefresher = {
    text: "Pull to refresh..."
  };
  var sweetSlider = {
    interval: 4000,
    autoPlay: true
  };

  var dbConfig = {
    dbName: "ashtest",
    dbVersion: "1.0",
    dbDescription: "Test database",
    dbSize: -1,
    tables: [{
      name: 'documents',
      columns: [{
        name: 'id',
        type: 'text'
      }, {
        name: 'title',
        type: 'text'
      }]
    }, {
      name: 'test',
      columns: [{
        name: 'id',
        type: 'text'
      }, {
        name: 'name',
        type: 'text'
      }]
    }, {
      name: 'user',
      columns: [{
        name: 'fullname',
        type: 'text'
      }, {
        name: 'username',
        type: 'text'
      }, {
        name: 'password',
        type: 'text'
      }]
    }]
  };


  switch (env) {
    case envLs.prod:
      ws = urls.prod;
      staticResUrl = urls.prodStaticResUrl;
      break;
    case envLs.uat:
      ws = urls.uat;
      staticResUrl = urls.uatStaticResUrl;
      break;
    case envLs.dev:
      ws = urls.dev;
      staticResUrl = urls.devStaticResUrl;
      break;
    case envLs.local:
      ws = urls.local;
      staticResUrl = urls.devStaticResUrl;
      break;
    default:
      ws = urls.prod;
      staticResUrl = urls.prodStaticResUrl;
  }

  helpUrl = ws + "/help/help-";

  return {
    ws: ws,
    staticResUrl: staticResUrl,
    tcUrl: tcUrl,
    sweetMsgs: sweetMsgs,
    tokenErrorCodes: tokenErrorCodes,
    tokenErrorMsgs: tokenErrorMsgs,
    hfStates: hfStates,
    httpKeys: httpKeys,
    sweetWIUs: sweetWIUs,
    httpStatus: httpStatus,
    screenTitles: screenTitles,
    helpUrl: helpUrl,
    httpReq: httpReq,
    modal: modal,
    pullRefresher: pullRefresher,
    sweetSlider: sweetSlider,
    dbConfig: dbConfig
  };

})());
