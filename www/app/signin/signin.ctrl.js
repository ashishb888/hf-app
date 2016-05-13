(function() {
  angular.module('starter').controller('SigninCtrl', SigninCtrl);

  SigninCtrl.$inject = ['starterConfig', 'utilService', '$state'];

  function SigninCtrl(sc, utilService, $state) {
    // Variables section
    var logger = utilService.getLogger();
    logger.debug("SigninCtrl start");

    var signinCtrl = this;
    signinCtrl.isAddressPresent = false;

    // Functions section
    signinCtrl.signin = signin;

    function signin() {
      logger.debug("signin starts");
      var req = {};
      req.email = "as@aa.aa";
      req.password = signinCtrl.sf.password;
      var promise = Ionic.Auth.login('basic', { 'remember': true }, req);
      promise.then(function(sucResp){
          try {
            logger.debug("success");
              var resp = sucResp.data;

              if (resp.status !== SUCCESS) {
                  utilService.showAlert(resp);
                  return;
              }
          } catch (exception) {
              logger.error("exception: " + exception);
          }
      }, function(errResp){
      });
      /*if (signinCtrl.isAddressPresent) {
        $state.go(sc.hfStates.placeorder);
      }else{
        $state.go(sc.hfStates.address);
      }
*/
      logger.debug("signin ends");
    }

    logger.debug("SigninCtrl end");
  }
})();
