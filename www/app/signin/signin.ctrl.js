(function() {
  angular.module('starter').controller('SigninCtrl', SigninCtrl);

  SigninCtrl.$inject = ['starterConfig', 'utilService', '$state', '$scope', 'signinService'];

  function SigninCtrl(sc, utilService, $state, $scope, signinService) {
    // Variables section
    var logger = utilService.getLogger();
    logger.debug("SigninCtrl start");

    var signinCtrl = this;
    signinCtrl.isAddressPresent = false;

    // Functions section
    signinCtrl.signin = signin;
    var deploy = new Ionic.Deploy();

    // Update app code with new release from Ionic Deploy
    $scope.doUpdate = function() {
      deploy.update().then(function(res) {
        console.log('Ionic Deploy: Update Success! ', res);
      }, function(err) {
        console.log('Ionic Deploy: Update error! ', err);
      }, function(prog) {
        console.log('Ionic Deploy: Progress... ', prog);
      });
    };

    // Check Ionic Deploy for new code
    $scope.checkForUpdates = function() {
      console.log('Ionic Deploy: Checking for updates');
      deploy.check().then(function(hasUpdate) {
        console.log('Ionic Deploy: Update available: ' + hasUpdate);
        $scope.hasUpdate = hasUpdate;
      }, function(err) {
        console.error('Ionic Deploy: Unable to check for updates', err);
      });
    }

    function signin() {
      logger.debug("signin starts");

      if (!utilService.isAppOnlineService()) {
          utilService.appAlert(sc.msgs.noConnMsg);
          return;
      }

      var req = {};
      req.data = signinCtrl.sf;

      /*var promise = Ionic.Auth.login('basic', {
        'remember': true
      }, req);
      promise.then(function(sucResp) {
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
      }, function(errResp) {});*/
      var promise = signinService.signin(req);
      promise.then(function(sucResp) {
        try {
          logger.debug("success");
          var resp = sucResp.data;

          if (resp.status !== sc.httpStatus.SUCCESS) {
            utilService.appAlert(resp.messages);
            return;
          }
          $state.go(sc.hfStates.address);
        } catch (exception) {
          logger.error("exception: " + exception);
        }
      }, function(errResp) {});

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
