

angular.module('pollop', ['ionic', 'ngCordova'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

    .state("home", {

        url: "/home",
        templateUrl: "templates/home.html"

    });

    $urlRouterProvider.otherwise("/home");

})

.controller("AppCtrl", function ($scope, $ionicSideMenuDelegate, $timeout, $ionicModal,$cordovaCamera,$cordovaImagePicker) {
    
$scope.getPhotos = function(){

try
{
    var options = {
   maximumImagesCount: 10,
   width: 800,
   height: 800,
   quality: 80
  };

  $cordovaImagePicker.getPictures(options)
    .then(function (results) {
      for (var i = 0; i < results.length; i++) {
        console.log('Image URI: ' + results[i]);
      }
    }, function(error) {
      // error getting photos
    });

}
catch(e)
{
    $scope.openModal("poll");
}

};

    $scope.getPhoto = function() {
try
{

            var options = {
              quality: 50,
              destinationType: Camera.DestinationType.DATA_URL,
              sourceType: Camera.PictureSourceType.CAMERA,
              allowEdit: true,
              encodingType: Camera.EncodingType.JPEG,
              targetWidth: 100,
              targetHeight: 100,
              popoverOptions: CameraPopoverOptions,
              saveToPhotoAlbum: true
            };

            $cordovaCamera.getPicture(options).then(function(imageData) {
              var image = document.getElementById('myImage');
              image.src = "data:image/jpeg;base64," + imageData;
            }, function(err) {
              // error
            });

            }
catch(e)
{
    $scope.openModal("poll");
}
      };

    $scope.goFullscreen = function (){

        if (document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled) 
        {
            var e = document.documentElement;
             
            if (e.requestFullscreen) {
                e.requestFullscreen();
            } else if (e.webkitRequestFullscreen) {
                e.webkitRequestFullscreen();
            } else if (e.mozRequestFullScreen) {
                e.mozRequestFullScreen();
            } else if (e.msRequestFullscreen) {
                e.msRequestFullscreen();
            }
        }  

    };

    $scope.toggleLeftSideMenu = function () {

        $ionicSideMenuDelegate.toggleLeft();

    };

    $scope.refresh = function () {    

        $timeout(function () {        

            $scope.$broadcast('scroll.refreshComplete');

        }, 5000);

    };

    $scope.activeSlide = 2;

    $scope.changeSlide = function (index) {
        $scope.activeSlide = index;
    };

    $scope.modals = [

        "stats","wall","poll"

    ];

    $ionicModal.fromTemplateUrl('templates/stats.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.modals["stats"] = modal;
    });

    $ionicModal.fromTemplateUrl('templates/wall.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.modals["wall"] = modal;
    });

      $ionicModal.fromTemplateUrl('templates/poll.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.modals["poll"] = modal;
    });

      $ionicModal.fromTemplateUrl('templates/multiSelectPoll.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.modals["multiSelectPoll"] = modal;
    });

      $ionicModal.fromTemplateUrl('templates/yesNoPoll.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.modals["yesNoPoll"] = modal;
    });

      $scope.openModal = function(modal) {
        $scope.modals[modal].show();
      };
      $scope.closeModal = function(modal) {        
        $scope.modals[modal].hide();
      };
      $scope.closeAll = function() {

        try
        {
            $scope.closeModal("stats").hide();
            $scope.closeModal("wall").hide();
            $scope.closeModal("poll").hide();
            $scope.closeModal("multiSelectPoll").hide();
            $scope.closeModal("yesNoPoll").hide();
        }
        catch(e)
        {
            try
            {
                $scope.closeModal("wall").hide();
                $scope.closeModal("poll").hide();
                $scope.closeModal("multiSelectPoll").hide();
                $scope.closeModal("yesNoPoll").hide();
            }
            catch(e2)
            {                
                try
                {
                    $scope.closeModal("poll").hide();
                    $scope.closeModal("multiSelectPoll").hide();
                    $scope.closeModal("yesNoPoll").hide();
                }
                catch(e3)
                {
                    try
                    {
                        $scope.closeModal("multiSelectPoll").hide();
                        $scope.closeModal("yesNoPoll").hide();
                    }
                    catch(e4)
                    {
                        try
                        {
                            $scope.closeModal("yesNoPoll").hide();
                        } catch(e5) {}
                    }
                }
            }
        }            
        
      };
      //Cleanup the modal when we're done with it!
      $scope.$on('$destroy', function() {
        $scope.modal.remove();
      });
      // Execute action on hide modal
      $scope.$on('modal.hidden', function() {
        // Execute action
      });
      // Execute action on remove modal
      $scope.$on('modal.removed', function() {
        // Execute action
      });

      $scope.icons = [
            "","","active","",""
        ];

        $scope.showOptions = "hidden";

      $scope.onSlideChanged = function ($index) {        

        $scope.icons = [
            "","","","",""
        ];

        for (var i = 0; i < $scope.icons.length; i++) {            

            if (i == $index){

                $scope.icons[i] = "active";

            }

        }    

        $scope.activeSlide = $index;                

        if ($index == 4)
            $scope.showOptions = "";
        else
            $scope.showOptions = "hidden";

    };


    $scope.nextPoll = "";
    $scope.answerColor = "";

    $scope.pollActiveSlide = 0;

    $scope.onPollSlideChanged = function ($index) {            

        $scope.pollActiveSlide = $index;

        $scope.nextPoll = "";
        $scope.answerColor = "";        

    };

    $scope.showFooter = function (source) {        

        if (source == "btn")
        {
            $timeout(function() {
                $scope.nextPoll = "nextPoll";
            }, 250);                    
        }
        else if (source == "div")
        {
            if ($scope.nextPoll == "nextPoll")
                $scope.nextPoll = "";
            else
                $scope.nextPoll = "nextPoll";
        }


    };

});