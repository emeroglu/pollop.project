app.factory("$service", function ($rootScope) {

    var sharedService = {};

    sharedService.broadcast = function (event,args) {

        $rootScope.$broadcast(event,args);

    };

    return sharedService;

});

app.factory("$mask", function ($rootScope,$timeout) {

	var $service = {};

	$service.state = "p-hide p-z-99";

    $service.show = function(){

    	$service.state = "p-hide p-z-102";
    	$rootScope.$broadcast("set_showMask");

    	$timeout(function(){

    		$service.state = "p-show p-z-102";
    		$rootScope.$broadcast("set_showMask");

    	},100);    	

    };

    $service.hide = function(){

    	$service.state = "p-hide p-z-102";
    	$rootScope.$broadcast("set_showMask");

    	$timeout(function(){

    		$service.state = "p-hide p-z-99";
    		$rootScope.$broadcast("set_showMask");

    	},0);

    };

    return $service;

});

app.factory("$indicator", function ($rootScope,$timeout,$options) {

	var $service = {};

	$service.state = "p-state-3 p-z-100";
	$service.index = 3;

    $service.pull = function($index){    

    	if ($index == 0 || $index == 6)
    		$index = 3;    

    	$service.state = "p-state-" + $index + " p-z-100";
    	$service.index = $index;
    	$rootScope.$broadcast("set_stateIndicator");

    };

    $service.loading = function(){

    	lastState = $service.state;    

    	$service.pull(1);

    	recursive();

    };

    $service.loaded = function(){
    	go = false;
    };

    var lastState = 0;

    var go = true;
    var recursive = function(){    

    	$timeout(function(){

    		$service.pull(5);

    		$timeout(function(){

				$service.pull(1);

				if (go)
					recursive();
				else{
					$service.state = lastState;
					$rootScope.$broadcast("set_stateIndicator",lastState);
				}

			}, 1000);

    	}, 1000);

    };   

    return $service;

});

app.factory("$slider", function ($rootScope,$timeout) {

	var $service = {};
	
	$service.index = 3;

    $service.pull = function($index){
    	
    	$service.index = $index;
    	$rootScope.$broadcast("set_indexSlider");

    };     

    return $service;

});

app.factory("$settingsButton",function($rootScope,$timeout){

	var $service = {};

	$service.state = "p-hide p-z-100";

	$service.show = function(){

		$service.state = "p-show p-z-100";
		$rootScope.$broadcast("set_showSettingsButton");

	};

	$service.hide = function(){

		$service.state = "p-hide p-z-100";
		$rootScope.$broadcast("set_showSettingsButton");

	};

	return $service;	

});

app.factory("$createButton",function($rootScope,$timeout){

	var $service = {};

	$service.state = "p-hide p-z-100";

	$service.show = function(){

		$service.state = "p-show p-z-100";
		$rootScope.$broadcast("set_showCreateButton");

	};

	$service.hide = function(){

		$service.state = "p-hide p-z-100";
		$rootScope.$broadcast("set_showCreateButton");

	};

	return $service;	

});

app.factory("$leftOptions",function($rootScope,$timeout){

	var $service = {};

	$service.state = "p-hide p-z-100";

	$service.show = function(){

		$service.state = "p-show p-z-100";
		$rootScope.$broadcast("set_showLeftOptions");

	};

	$service.hide = function(){

		$service.state = "p-hide p-z-100";
		$rootScope.$broadcast("set_showLeftOptions");

	};

	return $service;	

});

app.factory("$options",function($rootScope,$timeout){

	var $service = {};

	$service.state = "p-hide p-z-99";

	$service.indicatorState = "p-state-2 p-z-97"
	$service.indicatorIndex = 2;

	$service.show = function(){

		$service.state = "p-show p-z-99";
		$rootScope.$broadcast("set_showOptions");

	};

	$service.showWithItems = function($items){

		$service.state = "p-show p-z-99";
		$rootScope.$broadcast("set_showOptionsWithItems",$items);

	};

	$service.hide = function(){

		$service.state = "p-hide p-z-97";
		$rootScope.$broadcast("set_showOptions");

	};

	$service.indicator = {

		pull: function ($index) {

			$service.indicatorState = "p-state-" + $index + " p-z-99";
			$service.indicatorIndex = $index;
			$rootScope.$broadcast("set_stateOptionsIndicator");

		}

	};

	return $service;	

});

app.factory("$rightOptions",function($rootScope,$timeout){

	var $service = {};

	$service.state = "p-hide p-z-100";

	$service.show = function(){

		$service.state = "p-show p-z-100";
		$rootScope.$broadcast("set_showRightOptions");

	};

	$service.hide = function(){

		$service.state = "p-hide p-z-100";
		$rootScope.$broadcast("set_showRightOptions");

	};

	return $service;	

});

app.factory("$modal",function($rootScope,$timeout){

	var $service = {};

	$service.state = "p-hide p-z-97";
	$service.title = "";
	$service.html = "";

	$service.show = function($title,$html){

		$service.state = "p-show p-z-102";
		$service.title = $title;
		$service.html = $html;
		$rootScope.$broadcast("set_showModal");

	};

	$service.hide = function(){

		$service.state = "p-hide p-z-97";
		$rootScope.$broadcast("set_showModal");

	};

	return $service;	

});

app.factory("$popup",function($rootScope,$timeout,$mask){

	var $service = {};

	$service.state = "p-hide p-z-99";
	$service.html = "";

	$service.show = function($html){		

		$mask.show();

		$timeout(function(){

			$service.state = "p-hide p-z-103";	
			$service.html = "";		
			$rootScope.$broadcast("set_showPopup");

			$timeout(function(){

				$service.state = "p-show p-z-103";				
				$rootScope.$broadcast("set_showPopup");

				$timeout(function(){

					$service.html = $html;
					$rootScope.$broadcast("set_showPopup");

				}, 550);

			}, 500);

		},100);

	};

	$service.hide = function(){
		
		$service.html = "";
		$service.state = "p-hide p-z-103";
		$rootScope.$broadcast("set_showPopup");

		$timeout(function(){			

			$service.state = "p-hide p-z-99";
			$rootScope.$broadcast("set_showPopup");

			$timeout(function(){
				
				$mask.hide();	

			}, 550);

		},500);

	};

	return $service;	

});

app.factory("$notification",function($rootScope,$timeout){

	var $service = {};

	$service.state = "p-hide p-z-97";
	$service.html = "";

	$service.show = function($html,$type){

		$service.state = "p-show-" + $type + " p-z-101";
		$service.html = $html;
		$rootScope.$broadcast("set_showNotification");

	};

	$service.hide = function(){

		$service.state = "p-hide p-z-97";
		$rootScope.$broadcast("set_showNotification");

	};

	return $service;	

});