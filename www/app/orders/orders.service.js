(function() {
  angular.module('starter').factory('ordersService', ordersService);
  ordersService.$inject = ['$http', 'utilService', 'starterConfig'];

  function ordersService($http, utilService, sc) {
    var logger = utilService.getLogger();
    var os = this;

    os.placeOrder = placeOrder;

    function placeOrder(req) {
      logger.debug("placeOrder() service");
      return $http.post(sc.ws + '/placeorder', JSON.stringify(req),
        sc.httpReq.config);
    }

    return os;
  }
})();
