/* UI Controllers */
app.controller("AppCtrl",function ($timeout,$splash,$pages) {
		
	$timeout(function(){

		$splash.hide(2000);	

	},3000);

});

app.controller("SplashCtrl",function ($scope,$splash) {
	
	$scope.stateSplash = $splash.state;

	$scope.$on("stateSplash",function(){

		$scope.stateSplash = $splash.state;

	});

});

app.controller("MaskCtrl",function ($scope,$mask) {
	
	$scope.stateMask = $mask.state;

	$scope.$on("stateMask",function(){

		$scope.stateMask = $mask.state;

	});

});

app.controller("NavCtrl", function ($scope, $slider) {

    $scope.changeSlide = function ($index) {

        $slider.pull($index);

    };

});

app.controller("IndicatorCtrl",function ($scope,$indicator) {
	
	$scope.stateIndicator = $indicator.state;

	$scope.$on("stateIndicator",function(){

		$scope.stateIndicator = $indicator.state;

	});

});

app.controller("SuccessCtrl",function ($scope,$success) {
	
	$scope.stateSuccess = $success.state;
	$scope.message = $success.message;

	$scope.$on("stateSuccess",function(){

		$scope.stateSuccess = $success.state;
		$scope.message = $success.message;

	});

});

app.controller("FailureCtrl",function ($scope,$failure) {
	
	$scope.stateFailure = $failure.state;
	$scope.message = $failure.message;

	$scope.$on("stateFailure",function(){

		$scope.stateFailure = $failure.state;
		$scope.message = $failure.message;

	});

});

app.controller("InfoCtrl",function ($scope,$info) {
	
	$scope.stateInfo = $info.state;
	$scope.message = $info.message;

	$scope.$on("stateInfo",function(){

		$scope.stateInfo = $info.state;
		$scope.message = $info.message;

	});

});

app.controller("WarningCtrl",function ($scope,$warning) {
	
	$scope.stateWarning = $warning.state;
	$scope.message = $warning.message;

	$scope.$on("stateWarning",function(){

		$scope.stateWarning = $warning.state;
		$scope.message = $warning.message;

	});

});

app.controller("LeftOptionsCtrl",function ($scope,$leftOptions) {
	
	$scope.stateLeftOptions = $leftOptions.state;

	$scope.$on("stateLeftOptions",function(){

		$scope.stateLeftOptions = $leftOptions.state;

	});

	$scope.goFullscreen = function () {

        if (document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled) {
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

app.controller("SliderCtrl",function ($scope,$slider,$indicator,$options,$leftButton,$leftOptions,$rightButton,$rightOptions) {
	
	$scope.indexSlider = $slider.index;

    $scope.$on("indexSlider", function () {

        $scope.indexSlider = $slider.index;
        $scope.onSlideChanged($slider.index);

    });

    $scope.onSlideChanged = function ($index) {

        $scope.indexSlider = $index;

        $indicator.pull($index);

        if ($index == 0) {
            $leftOptions.show();
            $rightButton.hide();
            $rightOptions.hide();
            $leftButton.show();
            $options.hide();
        }
        else if ($index == 5) {
            $leftOptions.hide();
            $rightButton.show();
            $rightOptions.hide();
            $leftButton.show();
            $options.show();
        }
        else if ($index == 6) {
            $leftOptions.hide();
            $rightButton.show();
            $rightOptions.show();
            $leftButton.hide();
            $options.hide();
        }
        else {
            $leftOptions.hide();
            $rightButton.show();
            $rightOptions.hide();
            $leftButton.show();
            $options.hide();
        }
    };

});

app.controller("RightOptionsCtrl",function ($scope,$rightOptions) {
	
	$scope.stateRightOptions = $rightOptions.state;

	$scope.$on("stateRightOptions",function(){

		$scope.stateRightOptions = $rightOptions.state;

	});

});

app.controller("LeftButtonCtrl",function ($scope,$leftButton) {
	
	$scope.stateLeftButton = $leftButton.state;

	$scope.$on("stateLeftButton",function(){

		$scope.stateLeftButton = $leftButton.state;

	});

	$scope.toggleLeftButton = function(){

		

	};

});

app.controller("RightButtonCtrl",function ($scope,$rightButton) {
	
	$scope.stateRightButton = $rightButton.state;

	$scope.$on("stateRightButton",function(){

		$scope.stateRightButton = $rightButton.state;

	});

	$scope.toggleRightButton = function(){



	};

});

app.controller("OptionsCtrl",function ($scope,$options,$broadcaster) {
	
	$scope.stateOptions = $options.state;
	$scope.stateOptionsIndicator = $options.indicator.state;

	$scope.$on("stateOptions",function(){

		$scope.stateOptions = $options.state;

	});

	$scope.$on("stateOptionsWithItems",function($items){

		$scope.stateOptions = $options.state;
		$scope.items = $items;

	});

	$scope.$on("stateOptionsIndicator",function($items){

		$scope.stateOptionsIndicator = $options.indicator.state;

	});

	$scope.items = [

		{
			content: "<text class='p-color'>Kişi</text>",
			click: function(){
				
				$broadcaster.spread("searchType","user");

			}
		},
		{
			content: "<text class='p-color'>Anket</text>",
			click: function(){

				$broadcaster.spread("searchType","poll");

			}
		},
		{
			content: "<text class='p-color'>Sayfa</text>",
			click: function(){

				$broadcaster.spread("searchType","page");

			}
		}

    ];

    $scope.changeOption = function($index){
    	    	
    	$options.indicator.pull($index + 1);

    	$scope.items[$index].click();

    };

});

app.controller("DialogsCtrl",function ($scope) {

});

app.controller("PagesCtrl",function ($scope) {

});

/* Content Controllers */
app.controller("FirstDialogCtrl",function ($scope,$dialogs) {
	
	$dialogs.register("firstDialog","stateFirstDialog");

	$scope.stateFirstDialog = $dialogs.dialogs["firstDialog"].state;

	$scope.$on("stateFirstDialog",function(){

		$scope.stateFirstDialog = $dialogs.dialogs["firstDialog"].state;

	});

});

app.controller("CreatePageCtrl",function ($scope,$pages) {
	
	$pages.register("createPage","stateCreatePage");

	$scope.stateCreatePage = $pages.pages["createPage"].state;

	$scope.$on("stateCreatePage",function(){

		$scope.stateCreatePage = $pages.pages["createPage"].state;

	});

});

app.controller("PollListCtrl",function ($scope,$pages,$data,$broadcaster) {
	
	$pages.register("pollList","statePollListPage");

	$scope.statePollListPage = $pages.pages["pollList"].state;

	$scope.$on("statePollListPage",function(){

		$scope.statePollListPage = $pages.pages["pollList"].state;

	});

	$scope.close = function()
	{
		$pages.hide("pollList",1000);
	};

	$scope.open = function($poll){

		$data.poll = $poll;
		$broadcaster.spread("poll");

		if ($data.results){

			$pages.show("pollResults");

			$data.results = false;

		} else {

		if ($poll.type == "text")
			$pages.show("pollText");
		else if ($poll.type == "image")
			$pages.show("pollImage");
		else if ($poll.type == "compact")
			$pages.show("pollCompact");

		}

	};

	$scope.items = $data.polls;

});

app.controller("PollTextCtrl",function ($scope,$pages,$data,$timeout) {
	
	$pages.register("pollText","statePollTextPage");

	$scope.statePollTextPage = $pages.pages["pollText"].state;

	$scope.$on("statePollTextPage",function(){

		$scope.statePollTextPage = $pages.pages["pollText"].state;

	});

	$scope.$on("poll",function(){

		$scope.poll = $data.poll;

	});

	$scope.close = function(){
		$pages.hide("pollText",1000);
	};

	$scope.message = "";
  $scope.made = false;
  $scope.messageBox = "p-none p-z-97 p-hide";

  $scope.choose = function($index){  

    if ($scope.made)
      return;

    $scope.made = true;
  	$scope.message = "Cevabın kaydediliyor...";

  	$scope.messageBox = "p-none p-z-106 p-hide";

  	$timeout(function(){

  		$scope.messageBox = "p-disp p-z-106 p-hide";

  		$timeout(function(){

  			$scope.messageBox = "p-disp p-z-106 p-show";

  		},250);

  	},250);

  	$timeout(function(){

  		$scope.message = "Cevabın kaydedildi...";
  		$scope.poll.choices[$index].state = "p-selected";

  		$timeout(function(){  			

  			$scope.messageBox = "p-disp p-z-106 p-hide";

  			$timeout(function(){

  				$scope.messageBox = "p-none p-z-106 p-hide";

  				$timeout(function(){

	  				$scope.messageBox = "p-none p-z-97 p-hide";
	  				$scope.close();	            	  			

            		$scope.made = false; 		

		            $timeout(function(){

		              $scope.closeView();

		            },500);	

	  			}, 500);

	  		}, 500);

		  },1500);

  	},3000);

  };

});

app.controller("PollImageCtrl",function ($scope,$pages,$data,$timeout) {
	
	$pages.register("pollImage","statePollImagePage");

	$scope.statePollImagePage = $pages.pages["pollImage"].state;

	$scope.$on("statePollImagePage",function(){

		$scope.statePollImagePage = $pages.pages["pollImage"].state;

	});

	$scope.$on("poll",function(){

		$scope.poll = $data.poll;

	});

	$scope.close = function(){
		$pages.hide("pollImage",1000);
	};

	$scope.message = "";
	  $scope.made = false;
	  $scope.messageBox = "p-none p-z-97 p-hide";

	  $scope.choose = function($index){  

	    if ($scope.made)
	      return;

	    $scope.made = true;
	  	$scope.message = "Cevabın kaydediliyor...";

	  	$scope.messageBox = "p-none p-z-108 p-hide";

	  	$timeout(function(){

	  		$scope.messageBox = "p-disp p-z-108 p-hide";

	  		$timeout(function(){

	  			$scope.messageBox = "p-disp p-z-108 p-show";

	  		},250);

	  	},250);

	  	$timeout(function(){

	  		$scope.message = "Cevabın kaydedildi...";
	  		$scope.poll.choices[$index].state = "p-selected";

	  		$timeout(function(){  			

	  			$scope.messageBox = "p-disp p-z-108 p-hide";

	  			$timeout(function(){

	  				$scope.messageBox = "p-none p-z-108 p-hide";

	  				$timeout(function(){

		  				$scope.messageBox = "p-none p-z-97 p-hide";
		  				$scope.close();	            	  			

	            		$scope.made = false; 		

			            $timeout(function(){

			              $scope.closeView();

			            },500);	

		  			}, 500);

		  		}, 500);

			  },1500);

	  	},3000);

	  };

	  $scope.statePreview = "p-none p-z-97 p-hide";

	  $scope.preview = function($index){

	  	$scope.image = $scope.poll.choices[$index].image;
	    $scope.choice = $scope.poll.choices[$index];

	  	$scope.statePreview = "p-none p-z-107 p-hide";

	  	$timeout(function(){

	  		$scope.statePreview = "p-disp p-z-107 p-hide";

	  		$timeout(function(){

	  			$scope.statePreview = "p-disp p-z-107 p-show";

	  		},250);

	  	},250);

	  };

	  $scope.closePreview = function(){

	  	$scope.statePreview = "p-disp p-z-107 p-hide";

	  	$timeout(function(){

	  		$scope.statePreview = "p-none p-z-107 p-hide";

	  		$timeout(function(){

	  			$scope.statePreview = "p-none p-z-97 p-hide";

	  		}, 250);

	  	}, 500);

	  };

});

app.controller("PollCompactCtrl",function ($scope,$pages,$data,$timeout) {
	
	$pages.register("pollCompact","statePollCompactPage");

	$scope.statePollCompactPage = $pages.pages["pollCompact"].state;

	$scope.$on("statePollCompactPage",function(){

		$scope.statePollCompactPage = $pages.pages["pollCompact"].state;

	});

	$scope.$on("poll",function(){

		$scope.poll = $data.poll;

	});

	$scope.close = function(){
		$pages.hide("pollCompact",1000);
	};

	$scope.message = "";
  $scope.made = false;
  $scope.messageBox = "p-none p-z-97 p-hide";

  $scope.choose = function($index){  

    if ($scope.made)
      return;

    $scope.made = true;
  	$scope.message = "Cevabın kaydediliyor...";

  	$scope.messageBox = "p-none p-z-106 p-hide";

  	$timeout(function(){

  		$scope.messageBox = "p-disp p-z-106 p-hide";

  		$timeout(function(){

  			$scope.messageBox = "p-disp p-z-106 p-show";

  		},250);

  	},250);

  	$timeout(function(){

  		$scope.message = "Cevabın kaydedildi...";
  		$scope.poll.choices[$index].state = "p-selected";

  		$timeout(function(){  			

  			$scope.messageBox = "p-disp p-z-106 p-hide";

  			$timeout(function(){

  				$scope.messageBox = "p-none p-z-106 p-hide";

  				$timeout(function(){

	  				$scope.messageBox = "p-none p-z-97 p-hide";
	  				$scope.close();	            	  			

            		$scope.made = false; 		

		            $timeout(function(){

		              $scope.closeView();

		            },500);	

	  			}, 500);

	  		}, 500);

		  },1500);

  	},3000);

  };

});

app.controller("PollResultsCtrl",function($scope,$pages,$data){

	$pages.register("pollResults","statePollResultsPage");

	$scope.statePollResultsPage = $pages.pages["pollResults"].state;

	$scope.$on("statePollResultsPage",function(){

		$scope.statePollResultsPage = $pages.pages["pollResults"].state;

	});

	$scope.$on("poll",function(){

		$scope.poll = $data.poll;

		for (var i = 0; i < $scope.poll.choices.length; i++) {
			
			$scope.poll.choices[i].state = "p-initial";

		}

		$scope.bars = [

			{
				style: "width: 68%;",
				width: "68%"
			},
			{
				style: "width: 32%;",
				width: "32%"
			}

		];

	});

	$scope.close = function(){

		$pages.hide("pollResults",1000);

	};

});

app.controller("DiscoverCtrl",function ($scope,$pages) {	

});

app.controller("PrivatePollsCtrl",function ($scope,$timeout,$indicator,$success,$failure,$ionicScrollDelegate) {	

	$scope.refresh = function(){

		$ionicScrollDelegate.scrollTop(true);

		$indicator.loading();

		$timeout(function(){

			$indicator.loaded();

			$timeout(function(){

				$failure.show("Malesef yeni mesajın yok...");
				$scope.$broadcast('scroll.refreshComplete');

			},1000);

		},5000);

	};

});

app.controller("LandingCtrl",function ($scope,$timeout,$indicator,$success,$ionicScrollDelegate,$pages,$data) {
	
	$scope.stateAvatar = "p-small";    
    $scope.stateTimeline = "p-show";    			

	$timeout(function(){

		$success.show("İyi Eğlenceler!");

	},5000);			

    $scope.refresh = function () {

        $ionicScrollDelegate.scrollTop(true);

        $scope.$apply(function () {

            $scope.stateTimeline = "p-hide";            

        });

        $timeout(function () {

            $scope.stateAvatar = "p-big";

            $timeout(function () {

                $indicator.loading();

                $timeout(function () {

                    $indicator.loaded();

                    $timeout(function () {

                        $scope.stateAvatar = "p-small";

                        $timeout(function () {

                            $scope.stateTimeline = "p-show";                            

                            $scope.$broadcast('scroll.refreshComplete');

                            $timeout(function(){

								$success.show("İyi Eğlenceler!");

							},2000);

                        }, 2000);

                    }, 1000);

                }, 3000);

            }, 2500);

        }, 2500);   

    };

    $scope.results = function(){

    	$data.results = true;
		$pages.show("pollList");

    };

    $scope.timeline = function($index){ 

    	var img = "img/";
    	var title = "";

    	if ($index == 0){
    		img += "erkek";
    		title = "Steve Jameson";
    	} else if ($index == 1){
    		img += "kiz";
    		title = "Adriana Brown";
    	}

    	for (var i = 0; i < $data.polls.length; i++) {
    		
    		$data.polls[i].avatar = img + ".jpg";
    		$data.polls[i].title = title;

    	}

    	$pages.show("pollList");
    };

});

app.controller("NotificationsCtrl",function($scope,$timeout,$indicator,$success,$failure,$ionicScrollDelegate){

	$scope.refresh = function(){

		$ionicScrollDelegate.scrollTop(true);

		$indicator.loading();

		$timeout(function(){

			$indicator.loaded();

			$timeout(function(){

				$failure.show("Malesef yeni bildirimin yok...");
				$scope.$broadcast('scroll.refreshComplete');

			},1000);

		},5000);

	};

});

app.controller("SearchCtrl",function($scope,$broadcaster,$timeout,$indicator,$success,$failure){

	$scope.searchType = "poll";
	$scope.searchText = "Anket ID...";

	$scope.$on("searchType",function(){

		$scope.searchType = $broadcaster.args;

		if ($broadcaster.args == "user")
			$scope.searchText = "Ad Soyad...";
		else if ($broadcaster.args == "poll")
			$scope.searchText = "Anket ID...";
		else
			$scope.searchText = "Sayfa Adı..."

	});

	$scope.clear = function(){

		$scope.searchText = "";

	};

	$scope.reset = function(){

		if ($scope.searchText == "")
			$scope.searchText = "Anket ID...";

	};

	$scope.search = function(){	

		$scope.users = [];
		$scope.polls = [];
		$scope.pages = [];

		if (!$indicator.inProgress)
		{
			$indicator.loading();

			$timeout(function(){

				if ($scope.searchType == "user")
				{

					$scope.users = [

						{
							background:"4",
							name: "Erhan Emre Eroğlu",
							avatar: "https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-9/10338221_10152576853520996_5185319332419852678_n.jpg?oh=49e65b67a8235a851d1bd3fa17265935&oe=5672C392&__gda__=1451012996_f651c80128b1d6d69d48de6e92eb96f9",
							followers: 982,
							pollCount: 105 
						},
						{
							background:"2",
							name: "Kaan İlkyaz",
							avatar: "https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-9/11540901_10153441484688535_6126204076365582999_n.jpg?oh=38f6fdfdbfe27d687d66756a633a6500&oe=56148787&__gda__=1448187346_83fa117562d0c692359497306733e329",
							followers: 658,
							pollCount: 206
						},
						{
							background:"4",
							name: "Musa Sönmez",
							avatar: "http://img.a24.com.tr/hbrResim/Hasan-ve-Turabi-gerilimi-bitmiyor.jpeg",
							followers: 102,
							pollCount: 5023
						},
						{
							background:"2",
							name: "Kaan Telciler",
							avatar: "https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-9/11225278_10152997309892582_5347608297812791019_n.jpg?oh=173c35b48fd6306585076048bc56fedc&oe=564EB150&__gda__=1448797842_1196a544c00a3159abf91a002b6f0848",
							followers: 5845,
							pollCount: 257
						}

					];

				}
				else if ($scope.searchType == "poll")
				{
					$scope.polls = [];
				}
				else if ($scope.searchType == "page")
				{

					$scope.pages = [

						{
							background:"4",
							name: "NTV Spor",
							avatar: "https://scontent-ams2-1.xx.fbcdn.net/hphotos-xap1/v/t1.0-9/10345991_10152262218658859_9106223491081518456_n.png?oh=d120c82b8f9b25dc41925c0061821e4a&oe=56436166",
							followers: 4205,
							pollCount: 1504 
						},
						{
							background:"2",
							name: "Survivor",
							avatar: "https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-9/10942583_881241645274237_1649581748216337502_n.jpg?oh=8b2095df2f51a5232e8a766e605fd848&oe=564204AF&__gda__=1447989542_7010ce8de513e5f0176e53522cfda832",
							followers: "2M",
							pollCount: 206
						},
						{
							background:"4",
							name: "CHP",
							avatar: "https://scontent-ams2-1.xx.fbcdn.net/hphotos-xap1/v/t1.0-9/11174812_825017084246025_780364906602862857_n.png?oh=27a251db4825bba01ee9dd60706b595b&oe=5611E6CA",
							followers: "12M",
							pollCount: 584
						},
						{
							background:"2",
							name: "Koç Üniversitesi",
							avatar: "https://fbcdn-sphotos-a-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-9/1546177_691157067571499_711837180_n.png?oh=6791b0d88085a32af57b0641390807e9&oe=5644FB00&__gda__=1447415155_a16fdbd0657aa90fc771140b6459d931",
							followers: 2054,
							pollCount: 68
						}

					];

				}

				$timeout(function(){

					$indicator.loaded();

					$timeout(function(){

						if ($scope.searchType == "user")
						{
							$success.show("Umarım aradığın kişiyi bulmuşsundur...");	
						}
						else if ($scope.searchType == "poll")
						{
							$failure.show("Malesef aradığın ID'de anketimiz yok...")
						}
						else if ($scope.searchType == "page")
						{
							$success.show("Umarım aradığın sayfayı bulmuşsundur...");
						}

					},1000)

				},2000);

			},3000);	
		}

	};

});
