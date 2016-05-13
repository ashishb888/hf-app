(function() {
    angular.module('starter').controller('ForgotPasswordCtrl', ForgotPasswordCtrl);

    ForgotPasswordCtrl.$inject = ['starterConfig', 'utilService', 'forgotPasswordService'];

    function ForgotPasswordCtrl(starterConfig, utilService, forgotPasswordService) {
      // Variables section
      var logger = utilService.getLogger();

      logger.debug("ForgotPasswordCtrl start");

      var fpCtrl = this;

      // Functions section
      fpCtrl.forgotPassword = forgotPassword;

      function forgotPassword() {
        try {
          logger.debug("forgotPassword starts");

          if (!utilService.isAppOnlineService()) {
            utilService.retryService(screenTitle, screenState);
            return;
          }

          var promise = forgotPasswordService.forgotPassword(fpCtrl.fp);
          promise.then(function(sucResp) {
            try {
              var resp = sucResp.data;

              if (resp.status !== SUCCESS) {
                utilService.showAlert(resp);
                return;
              }
            } catch (exception) {
              logger.debug("exception: " + exception);
            }
          }, function(errResp) {
          });

          logger.debug("forgotPassword ends");
        } catch (exception) {
          logger.debug("exception: " + exception);
        }
      }

    logger.debug("ForgotPasswordCtrl end");
  }
})();
