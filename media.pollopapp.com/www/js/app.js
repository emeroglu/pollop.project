var app = angular.module('pollop', ['ionic','ngCordova'])

.run(function($ionicPlatform,$cordovaStatusbar,$cordovaKeyboard) {
  
  $ionicPlatform.ready(function() {     

    //$cordovaStatusbar.hide();
    //$cordovaKeyboard.disableScroll(true);  

  });

});
