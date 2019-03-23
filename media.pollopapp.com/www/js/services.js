app.factory("$broadcaster", function ($rootScope) {

	var $factory = {};

	$factory.spread = function($event,$args){

		$factory.args = $args;

		$rootScope.$broadcast($event);

	};

	return $factory;

});

app.factory("$data", function ($rootScope) {

	var $factory = {};

	$factory.results = false;

	$factory.polls = [
	  	
	    {
	      id: 0,
	      type: "image",
	      avatar: "img/erkek.jpg",
	      title: "Musa Sönmez",
	      question: "Girls, which dress should I be wearing for the first-date?",
	      attendance: 2,
	      remaining: 53,
	      end: "p-show",
	      choices: [

	        {
				index: 0,
				image: "img/blue.jpg",
				text: "Blue",
				state: "p-initial"
			},
			{
				index: 1,
				image: "img/green.jpg",
				text: "Green",
				state: "p-initial"
			}

	      ]
	    },
	  	{
	  		id: 1,
	  		type: "image",
	  		avatar: "img/erkek.jpg",
	  		title: "Musa Sönmez",
	  		question: "Do these ear-rings fit my dress?",
	  		attendance: 35,
	  		remaining: 13,
	      	end: "p-show",
	  		choices: [

	    			{
	    				index: 0,
	    				image: "http://bilder.t-online.de/b/64/16/33/20/id_64163320/tid_da/heidi-klum.jpg",
	    				text: "Heidi Klum",
	    				state: "p-initial"
	    			},
	    			{
	    				index: 1,
	    				image: "http://data.whicdn.com/images/67816427/original.jpg",
	    				text: "Adriana Lima",
	    				state: "p-initial"
	    			},
	    			{
	    				index: 2,
	    				image: "http://static.vibe.com/uploads/2013/12/VIBE-Vixen-Tyra-Banks-Instagram-Post11.jpg",
	    				text: "Tyra Banks",
	    				state: "p-initial"
	    			},
	    			{
	    				index: 3,
	    				image: "http://media1.popsugar-assets.com/files/2014/10/15/748/n/1922398/a1a47a5d33b5d77e_10725098_308214552700069_1971204584_nIodKnc.xxxlarge/i/Bar-Refaeli-showed-off-her-makeup-free-look.jpg",
	    				text: "Bar Rafaeli",
	    				state: "p-initial"
	    			}

	  		  ]
	      },
	      {
	          id: 2,
	          type: "text",
	          avatar: "img/erkek.jpg",
	          title: "Musa Sönmez",
	          question: "Who comes to the party tonight?",
	          attendance: 24,
	          remaining: 2,
	          end: "p-show",
	          choices: [

				    { index: 0, text: "Evet", state: "p-initial" },
				    { index: 1, text: "Hayır", state: "p-initial" }

			    ]
	      },
	      {
	        id: 3,
	        type: "text",
	        avatar: "img/erkek.jpg",
	        title: "Musa Sönmez",
	        question: "Bugün ne yesem?",
	        attendance: 6,
	        remaining: 27,
	        end: "p-show",
	        choices: [

	          { index: 0, text: "Evet", state: "p-initial" },
	          { index: 1, text: "Evet, neden olmasın?", state: "p-initial" },
	          { index: 2, text: "Evet, çok isterim", state: "p-initial" }

	        ]
	      }

	  ];

	  $factory.poll = {};

	return $factory;

});

app.factory("$service", function ($rootScope) {

});

// Device
app.factory("$push", function ($rootScope) {

});

app.factory("$keyboard", function ($rootScope) {

});

app.factory("$capture", function ($rootScope) {

});

app.factory("$imagePicker", function ($rootScope) {

});

app.factory("$device", function ($rootScope) {

});

app.factory("$geo", function ($rootScope) {

});

app.factory("$net", function ($rootScope) {

});

app.factory("$contacts", function ($rootScope) {

});

app.factory("$datePicker", function ($rootScope) {

});

app.factory("$mail", function ($rootScope) {

});

app.factory("$webBrowser", function ($rootScope) {

});

app.factory("$share", function ($rootScope) {

});

app.factory("$qr", function ($rootScope) {

});

app.factory("$vibration", function ($rootScope) {

});

app.factory("$apps", function ($rootScope) {

});

app.factory("$transfer", function ($rootScope) {

});

app.factory("$battery", function ($rootScope) {

});

// Front-End
app.factory("$splash", function ($rootScope,$timeout) {

	var $factory = {};

	$factory.state = "p-disp p-z-103 p-show";	

	$factory.hide = function($duration){

		$factory.state = "p-disp p-z-103 p-hide";
		$rootScope.$broadcast("stateSplash");

		$timeout(function(){

			$factory.state = "p-none p-z-103 p-hide";
			$rootScope.$broadcast("stateSplash");

			$timeout(function(){

				$factory.state = "p-none p-z-97 p-hide";
				$rootScope.$broadcast("stateSplash");

			},250)

		},$duration);

	};

	return $factory;

});

app.factory("$mask", function ($rootScope,$timeout) {

	$factory = {};

	$factory.state = "p-none p-z-97 p-hide";

	$factory.show = function(){

		if($factory.state == "p-disp p-z-103 p-show")
			return;

		$factory.state = "p-none p-z-103 p-hide";
		$rootScope.$broadcast("stateMask");

		$timeout(function(){

			$factory.state = "p-disp p-z-103 p-hide";
			$rootScope.$broadcast("stateMask");

			$timeout(function(){

				$factory.state = "p-disp p-z-103 p-show";
				$rootScope.$broadcast("stateMask");

			},250);

		},250);

	};

	$factory.hide = function($duration){

		if($factory.state == "p-none p-z-97 p-hide")
			return;

		$factory.state = "p-disp p-z-103 p-hide";
		$rootScope.$broadcast("stateMask");

		$timeout(function(){

			$factory.state = "p-none p-z-103 p-hide";
			$rootScope.$broadcast("stateMask");

			$timeout(function(){

				$factory.state = "p-none p-z-97 p-hide";
				$rootScope.$broadcast("stateMask");

			},250);

		},$duration);

	};

	return $factory;

});

app.factory("$indicator", function ($rootScope,$timeout) {

	var $factory = {};

	$factory.state = "p-state-3";
	$factory.index = 3;

	$factory.inProgress = false;

	$factory.pull = function($index){

		if ($index == 0 || $index == 6)
    		$index = 3;    

    	$factory.state = "p-state-" + $index;
    	$factory.index = $index;

    	$rootScope.$broadcast("stateIndicator");

	};

	$factory.loading = function(){

		$factory.inProgress = true;

        go = true;

    	lastState = $factory.state;    

    	$factory.pull(1);

    	recursive();

    };

    $factory.loaded = function(){

    	$factory.inProgress = false;

    	go = false;

    };

    var lastState = 0;

    var go = true;
    var recursive = function(){            

    	$timeout(function(){

    		$factory.pull(5);

    		$timeout(function(){

				$factory.pull(1);

				if (go)
					recursive();
				else{
					$factory.state = lastState;
					$rootScope.$broadcast("stateIndicator",lastState);
				}

			}, 500);

    	}, 500);

    };

	return $factory;

});

app.factory("$success", function ($rootScope,$timeout) {

	var $factory = {};

	$factory.state = "p-none p-z-97 p-hide";

	$factory.show = function($message){

		if ($factory.state == "p-disp p-z-101 p-show")
			return;

		$factory.message = $message;

		$factory.state = "p-none p-z-101 p-hide";		
		$rootScope.$broadcast("stateSuccess");

		$timeout(function(){

			$factory.state = "p-disp p-z-101 p-hide";
			$rootScope.$broadcast("stateSuccess");

			$timeout(function(){

				$factory.state = "p-disp p-z-101 p-show";
				$rootScope.$broadcast("stateSuccess");

				$timeout(function(){

					hide(1000);

				},3000);

			},250);

		},250);

	};

	var hide = function($duration){

		if($factory.state == "p-none p-z-97 p-hide")
			return;

		$factory.state = "p-disp p-z-101 p-hide";
		$rootScope.$broadcast("stateSuccess");

		$timeout(function(){

			$factory.state = "p-none p-z-101 p-hide";
			$rootScope.$broadcast("stateSuccess");

			$timeout(function(){

				$factory.state = "p-none p-z-97 p-hide";
				$rootScope.$broadcast("stateSuccess");

			},250);

		},$duration);

	};

	return $factory;

});

app.factory("$failure", function ($rootScope,$timeout) {

	var $factory = {};

	$factory.state = "p-none p-z-97 p-hide";

	$factory.show = function($message){

		if ($factory.state == "p-disp p-z-101 p-show")
			return;

		$factory.message = $message;

		$factory.state = "p-none p-z-101 p-hide";		
		$rootScope.$broadcast("stateFailure");

		$timeout(function(){

			$factory.state = "p-disp p-z-101 p-hide";
			$rootScope.$broadcast("stateFailure");

			$timeout(function(){

				$factory.state = "p-disp p-z-101 p-show";
				$rootScope.$broadcast("stateFailure");

				$timeout(function(){

					hide(1000);

				},3000);

			},250);

		},250);

	};

	var hide = function($duration){

		if($factory.state == "p-none p-z-97 p-hide")
			return;

		$factory.state = "p-disp p-z-101 p-hide";
		$rootScope.$broadcast("stateFailure");

		$timeout(function(){

			$factory.state = "p-none p-z-101 p-hide";
			$rootScope.$broadcast("stateFailure");

			$timeout(function(){

				$factory.state = "p-none p-z-97 p-hide";
				$rootScope.$broadcast("stateFailure");

			},250);

		},$duration);

	};

	return $factory;

});

app.factory("$info", function ($rootScope,$timeout) {

	var $factory = {};

	$factory.state = "p-none p-z-97 p-hide";

	$factory.show = function($message){

		if ($factory.state == "p-disp p-z-101 p-show")
			return;

		$factory.message = $message;

		$factory.state = "p-none p-z-101 p-hide";		
		$rootScope.$broadcast("stateInfo");

		$timeout(function(){

			$factory.state = "p-disp p-z-101 p-hide";
			$rootScope.$broadcast("stateInfo");

			$timeout(function(){

				$factory.state = "p-disp p-z-101 p-show";
				$rootScope.$broadcast("stateInfo");

				$timeout(function(){

					hide(1000);

				},3000);

			},250);

		},250);

	};

	var hide = function($duration){

		if($factory.state == "p-none p-z-97 p-hide")
			return;

		$factory.state = "p-disp p-z-101 p-hide";
		$rootScope.$broadcast("stateInfo");

		$timeout(function(){

			$factory.state = "p-none p-z-101 p-hide";
			$rootScope.$broadcast("stateInfo");

			$timeout(function(){

				$factory.state = "p-none p-z-97 p-hide";
				$rootScope.$broadcast("stateInfo");

			},250);

		},$duration);

	};

	return $factory;

});

app.factory("$warning", function ($rootScope,$timeout) {

	var $factory = {};

	$factory.state = "p-none p-z-97 p-hide";

	$factory.show = function($message){

		if ($factory.state == "p-disp p-z-101 p-show")
			return;

		$factory.message = $message;

		$factory.state = "p-none p-z-101 p-hide";		
		$rootScope.$broadcast("stateWarning");

		$timeout(function(){

			$factory.state = "p-disp p-z-101 p-hide";
			$rootScope.$broadcast("stateWarning");

			$timeout(function(){

				$factory.state = "p-disp p-z-101 p-show";
				$rootScope.$broadcast("stateWarning");

				$timeout(function(){

					hide(1000);

				},3000);

			},250);

		},250);

	};

	var hide = function($duration){

		if($factory.state == "p-none p-z-97 p-hide")
			return;

		$factory.state = "p-disp p-z-101 p-hide";
		$rootScope.$broadcast("stateWarning");

		$timeout(function(){

			$factory.state = "p-none p-z-101 p-hide";
			$rootScope.$broadcast("stateWarning");

			$timeout(function(){

				$factory.state = "p-none p-z-97 p-hide";
				$rootScope.$broadcast("stateWarning");

			},250);

		},$duration);

	};

	return $factory;

});

app.factory("$leftOptions", function ($rootScope,$timeout) {

	var $factory = {};

	$factory.state = "p-none p-z-97 p-hide";

	$factory.show = function(){

		if ($factory.state == "p-disp p-z-100 p-show")
			return;

		$factory.state = "p-none p-z-100 p-hide";
		$rootScope.$broadcast("stateLeftOptions");

		$timeout(function(){

			$factory.state = "p-disp p-z-100 p-hide";
			$rootScope.$broadcast("stateLeftOptions");

			$timeout(function(){

				$factory.state = "p-disp p-z-100 p-show";
				$rootScope.$broadcast("stateLeftOptions");

			},250);

		},250);

	};

	$factory.hide = function($duration){

		if ($factory.state == "p-none p-z-97 p-hide")
			return;

		$factory.state = "p-disp p-z-100 p-hide";
		$rootScope.$broadcast("stateLeftOptions");

		$timeout(function(){

			$factory.state = "p-none p-z-100 p-hide";
			$rootScope.$broadcast("stateLeftOptions");

			$timeout(function(){

				$factory.state = "p-none p-z-97 p-hide";
				$rootScope.$broadcast("stateLeftOptions");

			},250);

		},$duration);

	};

	return $factory;

});

app.factory("$slider", function ($rootScope) {

	var $factory = {};
	
	$factory.index = 3;

    $factory.pull = function($index){
    	
    	$factory.index = $index;
    	$rootScope.$broadcast("indexSlider");

    };     

    return $factory;

});

app.factory("$rightOptions", function ($rootScope,$timeout) {

	var $factory = {};

	$factory.state = "p-none p-z-97 p-hide";

	$factory.show = function(){

		if ($factory.state == "p-disp p-z-100 p-show")
			return;

		$factory.state = "p-none p-z-100 p-hide";
		$rootScope.$broadcast("stateRightOptions");

		$timeout(function(){

			$factory.state = "p-disp p-z-100 p-hide";
			$rootScope.$broadcast("stateRightOptions");

			$timeout(function(){

				$factory.state = "p-disp p-z-100 p-show";
				$rootScope.$broadcast("stateRightOptions");

			},250);

		},250);

	};

	$factory.hide = function($duration){

		if ($factory.state == "p-none p-z-97 p-hide")
			return;

		$factory.state = "p-disp p-z-100 p-hide";
		$rootScope.$broadcast("stateRightOptions");

		$timeout(function(){

			$factory.state = "p-none p-z-100 p-hide";
			$rootScope.$broadcast("stateRightOptions");

			$timeout(function(){

				$factory.state = "p-none p-z-97 p-hide";
				$rootScope.$broadcast("stateRightOptions");

			},250);

		},$duration);

	};

	return $factory;

});

app.factory("$leftButton", function ($rootScope,$timeout) {

	var $factory = {};

	$factory.state = "p-disp p-z-102 p-show";

	$factory.show = function(){

		if ($factory.state == "p-disp p-z-102 p-show")
			return;

		$factory.state = "p-none p-z-102 p-hide";
		$rootScope.$broadcast("stateLeftButton");

		$timeout(function(){

			$factory.state = "p-disp p-z-102 p-hide";
			$rootScope.$broadcast("stateLeftButton");

			$timeout(function(){

				$factory.state = "p-disp p-z-102 p-show";
				$rootScope.$broadcast("stateLeftButton");

			},250);

		},250);

	};

	$factory.hide = function($duration){

		if ($factory.state == "p-none p-z-97 p-hide")
			return;

		$factory.state = "p-disp p-z-102 p-hide";
		$rootScope.$broadcast("stateLeftButton");

		$timeout(function(){

			$factory.state = "p-disp p-z-102 p-hide";
			$rootScope.$broadcast("stateLeftButton");

			$timeout(function(){

				$factory.state = "p-none p-z-97 p-hide";
				$rootScope.$broadcast("stateLeftButton");

			},250);

		},$duration);

	};

	return $factory;

});

app.factory("$rightButton", function ($rootScope,$timeout) {

	var $factory = {};

	$factory.state = "p-disp p-z-102 p-show";

	$factory.show = function(){

		if ($factory.state == "p-disp p-z-102 p-show")
			return;

		$factory.state = "p-none p-z-102 p-hide";
		$rootScope.$broadcast("stateRightButton");

		$timeout(function(){

			$factory.state = "p-disp p-z-102 p-hide";
			$rootScope.$broadcast("stateRightButton");

			$timeout(function(){

				$factory.state = "p-disp p-z-102 p-show";
				$rootScope.$broadcast("stateRightButton");

			},250);

		},250);

	};

	$factory.hide = function($duration){

		if ($factory.state == "p-none p-z-97 p-hide")
			return;

		$factory.state = "p-disp p-z-102 p-hide";
		$rootScope.$broadcast("stateRightButton");

		$timeout(function(){

			$factory.state = "p-disp p-z-102 p-hide";
			$rootScope.$broadcast("stateRightButton");

			$timeout(function(){

				$factory.state = "p-none p-z-97 p-hide";
				$rootScope.$broadcast("stateRightButton");

			},250);

		},$duration);

	};

	return $factory;

});

app.factory("$options", function ($rootScope,$timeout) {

	var $factory = {};

	$factory.state = "p-none p-z-97 p-hide";

	$factory.show = function(){

		if ($factory.state == "p-disp p-z-101 p-show")
			return;

		$factory.state = "p-none p-z-101 p-hide";
		$rootScope.$broadcast("stateOptions");

		$timeout(function(){

			$factory.state = "p-disp p-z-101 p-hide";
			$rootScope.$broadcast("stateOptions");

			$timeout(function(){

				$factory.state = "p-disp p-z-101 p-show";
				$rootScope.$broadcast("stateOptions");

			},250);

		},250);

	};

	$factory.showWithItems = function($items){

		if ($factory.state == "p-disp p-z-101 p-show")
			return;

		$factory.state = "p-none p-z-101 p-hide";
		$rootScope.$broadcast("stateOptionsWithItems",$items);

		$timeout(function(){

			$factory.state = "p-disp p-z-101 p-hide";
			$rootScope.$broadcast("stateOptionsWithItems",$items);

			$timeout(function(){

				$factory.state = "p-disp p-z-101 p-show";
				$rootScope.$broadcast("stateOptionsWithItems",$items);

			},250);

		},250);

	};

	$factory.hide = function($duration){

		if ($factory.state == "p-none p-z-97 p-hide")
			return;

		$factory.state = "p-disp p-z-101 p-hide";
		$rootScope.$broadcast("stateOptions");

		$timeout(function(){

			$factory.state = "p-none p-z-101 p-hide";
			$rootScope.$broadcast("stateOptions");

			$timeout(function(){

				$factory.state = "p-none p-z-97 p-hide";
				$rootScope.$broadcast("stateOptions");

			},250);

		},$duration);

	};

	$factory.indicator = {

		state: "p-state-2",
		index: 2,

		pull: function ($index) {

			$factory.indicator.state = "p-state-" + $index;
			$factory.indicator.index = $index;
			$rootScope.$broadcast("stateOptionsIndicator");

		}

	};

	return $factory;

});

app.factory("$dialogs", function ($rootScope,$timeout,$mask) {

	var $factory = {};

	$factory.dialogs = [];

	$factory.register = function($dialog,$on){

		$factory.dialogs[$dialog] = {

			state: "p-none p-z-97 p-hide",
			broadcast: $on

		};

	};

	$factory.show = function($dialog){

		if ($factory.dialogs[$dialog].state == "p-disp p-z-104 p-show")
			return;

		$mask.show();

		$timeout(function(){
	
			$factory.dialogs[$dialog].state = "p-none p-z-104 p-hide";
			$rootScope.$broadcast($factory.dialogs[$dialog].broadcast);			

			$timeout(function(){
	
				$factory.dialogs[$dialog].state = "p-disp p-z-104 p-hide";
				$rootScope.$broadcast($factory.dialogs[$dialog].broadcast);					

				$timeout(function(){
		
					$factory.dialogs[$dialog].state = "p-disp p-z-104 p-show";
					$rootScope.$broadcast($factory.dialogs[$dialog].broadcast);					

				},250);

			},250);

		},750);

	};

	$factory.hide = function($dialog,$duration){

		if ($factory.dialogs[$dialog].state == "p-none p-z-97 p-hide")
			return;
		
		$factory.dialogs[$dialog].state = "p-disp p-z-104 p-hide";
		$rootScope.$broadcast($factory.dialogs[$dialog].broadcast);			

		$timeout(function(){

			$factory.dialogs[$dialog].state = "p-none p-z-104 p-hide";
			$rootScope.$broadcast($factory.dialogs[$dialog].broadcast);					

			$timeout(function(){

				$factory.dialogs[$dialog].state = "p-none p-z-97 p-hide";
				$rootScope.$broadcast($factory.dialogs[$dialog].broadcast);						

				$timeout(function(){

					$mask.hide();

				},250);

			},250);

		},$duration);

	};

	return $factory;

});

app.factory("$pages", function ($rootScope,$timeout) {

	var $factory = {};

	$factory.pages = [];

	$factory.register = function($page,$on){

		$factory.pages[$page] = {

			state: "p-none p-z-97 p-hide",
			broadcast: $on 

		};	

	};

	$factory.show = function($page){

		if ($factory.pages[$page].state == "p-disp p-z-104 p-show")	
			return;

		$factory.pages[$page].state = "p-none p-z-104 p-hide";
		$rootScope.$broadcast($factory.pages[$page].broadcast);

		$timeout(function(){

			$factory.pages[$page].state = "p-disp p-z-104 p-hide";
			$rootScope.$broadcast($factory.pages[$page].broadcast);

			$timeout(function(){

				$factory.pages[$page].state = "p-disp p-z-104 p-show";
				$rootScope.$broadcast($factory.pages[$page].broadcast);		

			},250);

		},250);

	};

	$factory.hide = function($page,$duration){

		if ($factory.pages[$page].state == "p-none p-z-97 p-hide")	
			return;

		$factory.pages[$page].state = "p-disp p-z-104 p-hide";
		$rootScope.$broadcast($factory.pages[$page].broadcast);		

		$timeout(function(){

			$factory.pages[$page].state = "p-none p-z-104 p-hide";
			$rootScope.$broadcast($factory.pages[$page].broadcast);					

			$timeout(function(){

				$factory.pages[$page].state = "p-none p-z-97 p-hide";
				$rootScope.$broadcast($factory.pages[$page].broadcast);					

			},250);

		},$duration);

	};

	return $factory;

});