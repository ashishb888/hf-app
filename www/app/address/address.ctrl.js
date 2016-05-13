(function() {
  angular.module('starter').controller('AddressCtrl', AddressCtrl);

  AddressCtrl.$inject = ['starterConfig', 'utilService', '$scope', 'addressService', '$state'];

  function AddressCtrl(sc, utilService, $scope, addressService, $state) {
    // Variables section
    var addressCtrl = this;
    var logger = utilService.getLogger();
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
        logger.debug("address: " + JSON.stringify(addressCtrl.sa));

        $state.go(sc.hfStates.placeorder);
        return;

        if (!utilService.isAppOnlineService()) {
            utilService.retryService(screenTitle, screenState);
            return;
        }

        var promise = addressService.setAddress(addressCtrl.sa);
        promise.then(function(sucResp){
            try {
                var resp = sucResp.data;

                if (resp.status !== SUCCESS) {
                    utilService.showAlert(resp);
                    return;
                }
            } catch (exception) {
                logger.debug("exception: " + exception);
            }
        }, function(errResp){
        });
      } catch (exception) {
        logger.debug("exception: " + exception);
      }
    }

    logger.debug("AddressCtrl ends");
  }
})();
