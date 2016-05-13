(function() {
  angular.module('starter').factory('forgotPasswordService', forgotPasswordService);
  forgotPasswordService.$inject = ['$http', 'utilService', 'starterConfig'];
  function forgotPasswordService($http, utilService, sc) {
    var logger = utilService.getLogger();
    var fp = this;

    fp.forgotPassword = forgotPassword;

    function forgotPassword(req) {
      logger.debug("forgotPassword() service");
      return $http.post(sc.ws + '/forgotpassword', JSON.stringify(req),
      sc.httpReq.config);
    }

    return fp;
  }
})();
