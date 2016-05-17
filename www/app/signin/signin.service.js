(function() {
  angular.module('starter').factory('signinService', signinService);
  signinService.$inject = ['$http', 'utilService', 'starterConfig'];
  function signinService($http, utilService, sc) {
    var logger = utilService.getLogger();
    var ss = this;

    ss.signin = signin;

    function signin(req) {
      logger.debug("signin() service");
      return $http.post(sc.ws + '/signin', JSON.stringify(req), sc.httpReq.config);
    }

    return ss;
  }
})();
