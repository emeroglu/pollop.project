angular.module('pollop', ['ionic'])

.run(function($ionicPlatform) {
  
  $ionicPlatform.ready(function() {

    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
    }

    if(window.StatusBar) {
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

.factory('$service', function ($rootScope) {

    var sharedService = {};

    sharedService.broadcast = function (event,args) {

        $rootScope.$broadcast(event,args);

    };

    return sharedService;

})

.directive('mask', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/mask.html'
  };
})

.directive('header', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/header.html'
  };
})

.directive('topNavBar', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/top-nav-bar.html'
  };
})

.directive('sideBalls', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/side-balls.html'
  };
})

.directive('searchOptions', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/search-options.html'
  };
})

.directive('slider', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/slider.html'
  };
})

.directive('discover', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/discover.html'
  };
})

.directive('privatePolls', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/private-polls.html'
  };
})

.directive('landing', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/landing.html'
  };
})

.directive('notifications', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/notifications.html'
  };
})

.directive('search', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/search.html'
  };
})

.controller("AppCtrl",function ($scope,$ionicSideMenuDelegate,$service,$timeout) {  

  $scope.sh_Mask = "p-hidden p-mask-to-back";

  $scope.$on("toggle_Mask",function(){    

    if ($scope.sh_Mask == "p-hidden p-mask-to-back")
    {
      $scope.sh_Mask = "p-hidden";

      $timeout(function(){
        $scope.sh_Mask = "p-visible";
      },250);      
    }
    else
    {
      $scope.sh_Mask = "p-hidden";

      $timeout(function(){
        $scope.sh_Mask = "p-hidden p-mask-to-back";
      },1000);
    }

  });

  $scope.$on("toggle_leftMenu",function(){

    $scope.toggle_leftMenu();

  });

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

  $scope.toggle_leftMenu = function(){

    $ionicSideMenuDelegate.toggleLeft();

  };

})

.controller("HeaderCtrl",function ($scope,$timeout,$service) {
  
  $scope.sh_Header = "p-visible";

  $timeout(function() {

    $scope.sh_Header = "p-hidden";   

  }, 3000);

})

.controller("NavCtrl",function ($scope,$service) {

  $scope.navIcons = [

    {index:0,icon:"ion-planet"},
    {index:1,icon:"ion-chatbox-working"},
    {index:2,icon:"ion-home"},
    {index:3,icon:"ion-android-notifications"},
    {index:4,icon:"ion-search"}

  ];

  $scope.navItems = [
    "","", "p-border-top-color-light p-selected","",""
  ];

  $scope.toggle_navItem = function ($index) {
    
    $scope.navItems = [
      "","","","",""
    ];    

    $scope.navItems[$index] =  "p-border-top-color-light p-selected";

    $service.broadcast("toggle_activeSlide_" + $index);

  };

  $scope.$on("toggle_navItem_0",function(){

    $scope.toggle_navItem(0);

  });

  $scope.$on("toggle_navItem_1",function(){

    $scope.toggle_navItem(1);

  });

  $scope.$on("toggle_navItem_2",function(){

    $scope.toggle_navItem(2);

  });

  $scope.$on("toggle_navItem_3",function(){

    $scope.toggle_navItem(3);

  });

  $scope.$on("toggle_navItem_4",function(){

    $scope.toggle_navItem(4);

  });  

})

.controller("SideBallCtrl",function($scope,$timeout,$service){

  $scope.sh_SideBalls = "p-hidden";  

  var purpose = "p-hidden";

  $scope.sh_multipleChoice = purpose;
  $scope.sh_combination = purpose;  
  $scope.sh_yesNo = purpose; 
  $scope.sh_score = purpose; 
  $scope.sh_order = purpose; 

  $timeout(function() {

    $scope.sh_SideBalls = "p-visible";      

  }, 3000);

  $scope.open_settings = function(){

    $service.broadcast("toggle_leftMenu");

  };

  $scope.toggle_newPoll = function(){

    if (purpose == "p-visible")
      purpose = "p-hidden";
    else
      purpose = "p-visible";

    if (purpose == "p-visible")
    {              
      $service.broadcast("toggle_Mask");  

      $timeout(function(){

        $scope.sh_multipleChoice = purpose;

        $timeout(function() {

          $scope.sh_combination = purpose;      

          $timeout(function() {

            $scope.sh_yesNo = purpose;      

            $timeout(function() {

              $scope.sh_score = purpose;      

              $timeout(function() {

                $scope.sh_order = purpose;                        

              }, 50);

            }, 50);

          }, 50);

        }, 50);

      },500);      
    }
    else
    {
      $scope.sh_multipleChoice = purpose;

        $timeout(function() {

          $scope.sh_combination = purpose;      

          $timeout(function() {

            $scope.sh_yesNo = purpose;      

            $timeout(function() {

              $scope.sh_score = purpose;      

              $timeout(function() {

                $scope.sh_order = purpose;  

                $timeout(function(){

                  if (purpose == "p-hidden")
                    $service.broadcast("toggle_Mask");      

                }, 50);          

              }, 50);

            }, 50);

          }, 50);

        }, 50);
    }    

  };

})

.controller("SlideCtrl",function($scope,$service){

  $scope.activeSlide = 2;

  $scope.onSlideChanged = function ($index) {        

    $service.broadcast("toggle_navItem_" + $index);    

    $scope.activeSlide = $index;                

    if ($index == 4)
        $scope.showOptions = "";
    else
        $scope.showOptions = "hidden";

  };

  $scope.$on("toggle_activeSlide_0",function(){

    $scope.activeSlide = 0;

    $service.broadcast("hide_searchOptions");

  });

  $scope.$on("toggle_activeSlide_1",function(){

    $scope.activeSlide = 1;

    $service.broadcast("hide_searchOptions");

  });

  $scope.$on("toggle_activeSlide_2",function(){

    $scope.activeSlide = 2;

    $service.broadcast("hide_searchOptions");

  });

  $scope.$on("toggle_activeSlide_3",function(){

    $scope.activeSlide = 3;

    $service.broadcast("hide_searchOptions");

  });

  $scope.$on("toggle_activeSlide_4",function(){

    $scope.activeSlide = 4;

    $service.broadcast("show_searchOptions");

  });

})

.controller("LandingCtrl",function($scope,$timeout){

  $scope.sh_refresher = "p-hidden";

  $scope.sh_landingItems = "p-hidden-immidiate";
  $scope.sb_profileAvatar = "p-big-immidiate";

  $timeout(function() {
                
    $scope.sb_profileAvatar = "p-normal";    

    $timeout(function(){

      $scope.sh_landingItems = "p-visible";              

    }, 1000);

  }, 5500);

  $scope.refresh = function(){
      
      $scope.$apply(function(){

        $scope.sh_refresher = "p-visible";
        $scope.sh_landingItems = "p-hidden";

        $timeout(function(){

          $scope.sb_profileAvatar = "p-big";

          $timeout(function() {                            

            $scope.sh_refresher = "p-hidden";

            $timeout(function(){

              $scope.$broadcast('scroll.refreshComplete');

              $timeout(function(){

                $scope.sb_profileAvatar = "p-normal";            

                $timeout(function(){

                  $scope.sh_landingItems = "p-visible";          

                }, 1000);

              }, 500);

            }, 500);                                

          }, 5000);

        }, 2000);      

      });

    };

})

.controller("SearchOptionsCtrl",function($scope,$service){

  $scope.sh_searchOptions = "p-hidden";

  $scope.$on("show_searchOptions",function(){

    $scope.sh_searchOptions = "p-visible";

  });

  $scope.$on("hide_searchOptions",function(){

    $scope.sh_searchOptions = "p-hidden";

  });

  $scope.searchOptions = [
    "","p-selected",""
  ];

  $scope.selectOption = function($index){

    $scope.searchOptions = [
      "","",""
    ];

    $scope.searchOptions[$index] = "p-selected";
    
    $service.broadcast("set_searchPlaceholder",$index);
    $service.broadcast("toggle_searchResult",$index);        

  };

})

.controller("SearchCtrl",function($scope,$timeout){

  $scope.sh_searchResults = "p-hidden p-none";
  $scope.d_searchResultFooter = "";
  $scope.d_searchResultIcon = "";
  $scope.sh_titleBig = "";
  $scope.resultTitle = "Türkiye sizce hükümetsiz daha ne kadar devam edecek?";
  $scope.resultImage = "https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-9/10338221_10152576853520996_5185319332419852678_n.jpg?oh=1050ca99ab67aecce729b25a462b8393&oe=5623A992&__gda__=1444212935_5bd3e7b096d2e0e3740093c3cadfc9f1";

  $scope.searchType = 1;

  $scope.state_loading = "p-initial p-hidden";
  $scope.searchPlaceholder = "Anket ID...",
  $scope.searchText = "";

  $scope.$on("set_searchPlaceholder",function(event,$index){

    $scope.searchType = $index;

    if ($index == 0)
      $scope.searchPlaceholder = "Ad, Soyad...";
    else if ($index == 1)
      $scope.searchPlaceholder = "Anket ID...";
    else if ($index == 2)
      $scope.searchPlaceholder = "Sayfa Adı...";

  });

  $scope.$on("toggle_searchResult",function(event,$index){
    
    $scope.searchText = "";

    $scope.sh_searchResults = "p-hidden";      

    $timeout(function(){                  

      if ($index != 1)
      {
        $scope.d_searchResultFooter = "p-none";
        $scope.d_searchResultIcon = "p-none";
        $scope.sh_titleBig = "p-search-result-big";

        if ($index == 0)
        {
          $scope.resultTitle = "Erhan Emre Eroğlu";
          $scope.resultImage = "https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-9/10338221_10152576853520996_5185319332419852678_n.jpg?oh=1050ca99ab67aecce729b25a462b8393&oe=5623A992&__gda__=1444212935_5bd3e7b096d2e0e3740093c3cadfc9f1";
        }
        else
        {
          $scope.resultTitle = "Survivor Türkiye"; 
          $scope.resultImage = "https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-9/10942583_881241645274237_1649581748216337502_n.jpg?oh=8b2095df2f51a5232e8a766e605fd848&oe=564204AF&__gda__=1447989542_7010ce8de513e5f0176e53522cfda832";
        }
      }
      else
      {
        $scope.d_searchResultFooter = "";
        $scope.d_searchResultIcon = "";
        $scope.sh_titleBig = "";
        
        $scope.resultTitle = "Türkiye sizce hükümetsiz daha ne kadar devam edecek?";
        $scope.resultImage = "https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-9/10338221_10152576853520996_5185319332419852678_n.jpg?oh=1050ca99ab67aecce729b25a462b8393&oe=5623A992&__gda__=1444212935_5bd3e7b096d2e0e3740093c3cadfc9f1";
      }

    }, 1000);  

  });

  $scope.search = function(){

    if ($scope.searchText.length != 1)
      return;      

    $scope.sh_searchResults = "p-hidden";

    $scope.state_loading = "p-initial p-visible";

    $scope.state = true;

    $scope.loading();

    $timeout(function(){

      $scope.state = false;    

      $scope.sh_searchResults = "p-visible";    

    },3000);  

  };

  $scope.loading = function(){  

    $scope.state_loading = "p-active";

    $timeout(function(){

      $scope.state_loading = "p-initial p-visible";

      $timeout(function(){

        if($scope.state)
          $scope.loading(); 
        else
        {
          $scope.state_loading = "p-active p-hidden";

          $timeout(function(){

            $scope.state_loading = "p-initial p-hidden";

          },750);          
        }

      },750);   

    },750);

  };

});
