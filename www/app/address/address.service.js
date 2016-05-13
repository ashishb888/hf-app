(function () {
  angular.module('starter').factory('addressService', addressService);
  addressService.$inject = ['$http', 'utilService', 'starterConfig'];
  function addressService($http, utilService, sc) {
    var logger = utilService.getLogger();
    var as = this;

    as.setAddress = setAddress;

    function setAddress(req) {
      logger.debug("setAddress() service");
      return $http.post(sc.ws + '/address', JSON.stringify(req),
      sc.httpReq.config);
    }

    return as;
  }
})();
