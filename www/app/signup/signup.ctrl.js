(function() {
  angular.module('starter').controller('SignupCtrl', SignupCtrl);

  SignupCtrl.$inject = ['$state', 'starterConfig', 'utilService', 'signupService'];
  function SignupCtrl($state, sc, utilService, signupService) {
    // Variables section
    var logger = utilService.getLogger();

    logger.debug("SignupCtrl start");

    var signupCtrl = this;
    // Functions section
    signupCtrl.signup = signup;

    function signup() {
      try {
        logger.debug("signup starts");

        if (!utilService.isAppOnlineService()) {
            utilService.retryService(screenTitle, screenState);
            return;
        }

        logger.debug("signupCtrl.sf: " + JSON.stringify(signupCtrl.sf));

        var req = {};
        req.data = signupCtrl.sf;
        /*req.email = signupCtrl.sf.email;
        req.password = signupCtrl.sf.password;
        req.custom = signupCtrl.sf;*/
        var promise = signupService.signup(req);
        promise.then(function(sucResp){
            try {
                var resp = sucResp.data;
                if (resp.status !== sc.httpStatus.SUCCESS) {
                    logger.debug("ERROR");
                    return;
                }
                logger.debug("SUCCESS");
            } catch (exception) {
                logger.error("exception: " + exception);
            }
        }, function(errResp){
        });
      } catch (exception) {
        logger.error("exception: " + exception);
      }
    }

    logger.debug("SignupCtrl end");
  }
})();
