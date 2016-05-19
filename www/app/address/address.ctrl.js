(function() {
  angular.module('starter').controller('AddressCtrl', AddressCtrl);

  AddressCtrl.$inject = ['starterConfig', 'utilService', '$scope', 'addressService', '$state'];

  function AddressCtrl(sc, utilService, $scope, addressService, $state) {
    // Variables section
    var addressCtrl = this;
    var logger = utilService.getLogger();
    var req = {};
    logger.debug("AddressCtrl starts");
    addressCtrl.sa = {};
    addressCtrl.cityArr = ["Mumbai"];
    addressCtrl.sa.city = addressCtrl.cityArr[0];
    addressCtrl.areaArr = ["Vashi", "Ghansoli", "Tubhre"];
    addressCtrl.sa.area = addressCtrl.areaArr[0];
    addressCtrl.residenceArr = ["College", "Hostel", "Room"];
    addressCtrl.sa.residence = addressCtrl.residenceArr[0];
    addressCtrl.sa.sector;
    addressCtrl.sa.residenceAddr;

    // Functions section
    addressCtrl.setAddress = setAddress;

    function setAddress() {
      try {
        logger.debug("setAddress function");

        if (!utilService.isAppOnlineService()) {
            utilService.appAlert(sc.msgs.noConnMsg);
            return;
        }

        req.data = addressCtrl.sa;
        logger.debug("req: " + JSON.stringify(req));
        return;
        var promise = addressService.setAddress(req);
        promise.then(function(sucResp){
            try {
                var resp = sucResp.data;

                if (resp.status !== SUCCESS) {
                    utilService.appAlert(resp.messages);
                    return;
                }
                $state.go(sc.hfStates.placeorder);
            } catch (exception) {
                logger.error("exception: " + exception);
            }
        }, function(errResp){
        });
      } catch (exception) {
        logger.error("exception: " + exception);
      }
    }

    logger.debug("AddressCtrl ends");
  }
})();
