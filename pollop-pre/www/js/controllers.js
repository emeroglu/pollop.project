app.controller("AppCtrl",function ($scope) {
	


});

app.controller("MaskCtrl",function ($scope,$mask,$popup) {
	
	$scope.show_mask = $mask.state;

	$scope.$on("set_showMask",function(){
	
		$scope.show_mask = $mask.state;
	
	});

	$scope.closePopup = function(){

		$popup.hide();

	};
	
});

app.controller("HeaderCtrl",function ($scope,$timeout) {
	
	$scope.show_Header = "p-show p-z-101";

	$timeout(function(){

		$scope.show_Header = "p-hide";

		$timeout(function(){

			$scope.show_Header = "p-hide p-z-97";			

		},1000);		

	},100);
	
});

app.controller("IndicatorCtrl",function ($scope,$timeout,$indicator) {
	
	$scope.state_Indicator = $indicator.state;

	$scope.$on("set_stateIndicator",function(){
	
		$scope.state_Indicator = $indicator.state;		

	});
	
});

app.controller("NavCtrl",function ($scope,$timeout,$indicator,$options,$slider) {		

	$scope.changeSlide = function($index){	

		$slider.pull($index);	

	};

});

app.controller("SliderCtrl",function ($scope,$timeout,$slider,$leftOptions,$createButton,$rightOptions,$settingsButton,$indicator,$options) {		

	$scope.indexSlider = $slider.index;

	$scope.$on("set_indexSlider",function(){

		$scope.indexSlider = $slider.index;
		$scope.onSlideChanged($slider.index);

	});

	$scope.onSlideChanged = function($index){	

		$scope.indexSlider = $index;				

		$indicator.pull($index);

		if ($index == 0)
		{
			$leftOptions.show();
			$createButton.hide();
			$rightOptions.hide();
			$settingsButton.show();
			$options.hide();
		}
		else if ($index == 5)
		{
			$leftOptions.hide();
			$createButton.show();
			$rightOptions.hide();
			$settingsButton.show();
			$options.show();			
		}		
		else if ($index == 6)
		{
			$leftOptions.hide();
			$createButton.show();
			$rightOptions.show();
			$settingsButton.hide();
			$options.hide();
		}
		else
		{
			$leftOptions.hide();
			$createButton.show();
			$rightOptions.hide();
			$settingsButton.show();
			$options.hide();
		}
	};

});

app.controller("DiscoverCtrl",function ($scope,$timeout,$slider) {		

});

app.controller("LandingCtrl",function ($scope,$timeout,$slider) {		

});

app.controller("SettingsButtonCtrl",function ($scope,$timeout,$indicator,$slider,$settingsButton,$leftOptions) {		

	$scope.show_settingsButton = $settingsButton.state;

	$scope.$on("set_showSettingsButton",function(){
		
		$scope.show_settingsButton = $settingsButton.state;

	});

	$timeout(function(){

		$settingsButton.show();
	
	},3000);

	$scope.toggleSettings = function(){		

		if ($leftOptions.state.indexOf("p-hide") != -1)
			openSettings();
		else
			closeSettings();

	};

	var lastState = 0;

	var openSettings = function(){

		lastState = $indicator.index;
		
		$slider.pull(0);	

	};

	var closeSettings = function(){	
		
		$slider.pull(lastState);

	};

});

app.controller("CreateButtonCtrl",function ($scope,$timeout,$indicator,$createButton,$rightOptions,$slider) {		

	$scope.show_createButton = $createButton.state;

	$scope.$on("set_showCreateButton",function(){

		$scope.show_createButton = $createButton.state;

	});

	$timeout(function(){
	
		$createButton.show();

	},3000);

	var lastState = 0;

	$scope.toggleCreate = function(){	

		if($rightOptions.state.indexOf("p-hide") != -1)
			openCreate();
		else
			closeCreate();

	};

	var openCreate = function(){

		lastState = $indicator.index;	

		$slider.pull(6);

	};

	var closeCreate = function(){	

		$slider.pull(lastState);

	};

});

app.controller("LeftOptionsCtrl",function($scope,$leftOptions){

	$scope.show_leftOptions = $leftOptions.state;

	$scope.$on("set_showLeftOptions",function(){

		$scope.show_leftOptions = $leftOptions.state;

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

});

app.controller("OptionsCtrl",function($scope,$options){

	$scope.show_options = $options.state;
	
	$scope.state_optionsIndicator = $options.indicatorState;	

	$scope.items = [

		"<text class='p-color'>Kişi</text>",
		"<text class='p-color'>Anket</text>",
		"<text class='p-color'>Sayfa</text>"

	];

	$scope.$on("set_showOptions",function(){

		$scope.show_options = $options.state;

	});

	$scope.$on("set_showOptionsWithItems",function($event,$items){

		$scope.show_options = $options.state;

		$scope.items = $items;

	});

	$scope.changeOption = function ($index) {
		
		$options.indicator.pull($index);

	};

	$scope.$on("set_stateOptionsIndicator",function () {
		
		$scope.state_optionsIndicator = $options.indicatorState;

	})

});

app.controller("RightOptionsCtrl",function($scope,$rightOptions,$modal,$popup){

	$scope.show_rightOptions = $rightOptions.state;

	$scope.$on("set_showRightOptions",function(){

		$scope.show_rightOptions = $rightOptions.state;

	});

	$scope.createOrder = function(){

		$modal.show("Sıralama Anketi Oluştur","");

	};

	$scope.createScore = function(){

		$popup.show("Puanlama Anketi Oluştur");

	};

});

app.controller("ModalCtrl",function($scope,$modal){

	$scope.show_modal = $modal.state;
	$scope.title = $modal.title;
	$scope.html = $modal.html;

	$scope.$on("set_showModal",function(){

		$scope.show_modal = $modal.state;
		$scope.title = $modal.title;
		$scope.html = $modal.html;

	});

	$scope.close = function(){

		$modal.hide();

	};

});

app.controller("PopupCtrl",function($scope,$popup){

	$scope.show_popup = $popup.state;
	$scope.html = $popup.html;

	$scope.$on("set_showPopup",function(){

		$scope.show_popup = $popup.state;
		$scope.html = $popup.html;	

	});

	$scope.close = function(){

		$popup.hide();

	};

});

app.controller("NotificationCtrl",function($scope,$notification,$timeout){

	$scope.show_notification = $notification.state;
	$scope.html = $notification.html;

	$scope.$on("set_showNotification",function(){

		$scope.show_notification = $notification.state;
		$scope.html = $notification.html;

		$timeout(function(){

			$notification.hide();

		},5000);

	});

	$scope.close = function(){

		$notification.hide();

	};

});