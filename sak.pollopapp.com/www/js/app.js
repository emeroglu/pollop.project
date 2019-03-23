window.fbAsyncInit = function() {
  
  FB.init({
    appId      : '967729656601649',
    cookie     : true,  // enable cookies to allow the server to access                       
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.2' // use version 2.2
  });

};

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


var app = angular.module('pollop', ['ionic'])

app.controller("AppCtrl",function($scope,$timeout){

	$scope.tick = function(){

		for (var i = 0; i < $scope.items.length; i++) {				

      if ($scope.items[i].remaining <= 0){

        $scope.items[i].end = "p-hide";
        $scope.items.splice($scope.items.indexOf($scope.items[i]),1); 

      } else {

        $scope.items[i].remaining--;

      }

		}

		$timeout(function(){

			$scope.tick();

		},60000);

	};

  $scope.items = [

  	{
  		id: 0,
  		type: "text",
  		avatar: "https://scontent-ams3-1.xx.fbcdn.net/hphotos-xpf1/v/t1.0-9/10983235_834404963276045_5748714500979974019_n.png?oh=ca852da4eeec8a3adbb1768960dc0de5&oe=5675BF53",
  		title: "Sosyal Aktiviteler Kulübü",
  		question: "En güzel kız hangisi?",
  		attendance: 142,
  		remaining: 4,
      end: "p-show",
  		choices: [

  			{ index: 0, text: "Heidi Klum", state: "p-initial" },
  			{ index: 1, text: "Adriana Lima", state: "p-initial" },
  			{ index: 2, text: "Tyra Banks", state: "p-initial" },
  			{ index: 3, text: "Bar Rafaeli", state: "p-initial" }  			

  		]
  	},
    {
      id: 1,
      type: "title",
      avatar: "https://scontent-ams3-1.xx.fbcdn.net/hphotos-frc3/v/t1.0-9/1230103_677613498918624_296235565_n.jpg?oh=2d2ff379c8e2869e0b2a7a3e1c6bd4a7&oe=566F277D",
      title: "KU Radyo",
      question: "Sıradaki şarkıyı sen seç!",
      attendance: 123,
      remaining: 18,
      end: "p-show",
      choices: [

        {
          index: 0,
          title: "Soner Sarıkabadayı",
          image: "http://www.radyoayyildiz.com/upload/biyografi/20150320__158960224.jpg",
          text: "Aramadığım yer kalmadı",
          state: "p-initial"
        },
        {
          index: 1,
          title: "İsmail Y.K.",
          image: "http://www.kizlarindunyasi.com/wp-content/uploads/2013/05/%C4%B0smail-YK-17.jpg",
          text: "Bomba Bomba",
          state: "p-initial"
        },
        {
          index: 2,
          title: "Gülşen",
          image: "https://pbs.twimg.com/profile_images/559855738970177537/sW7JboJv.jpeg",
          text: "Bangır Bangır",
          state: "p-initial"
        },
        {
          index: 3,
          title: "Oğuzhan Koç",
          image: "http://www.beserhaber.com/images/upload/0323.jpg",
          text: "Her aşk bir gün biter",
          state: "p-initial"
        }

      ]
    },
  	{
  		id: 2,
  		type: "image",
  		avatar: "https://scontent-ams3-1.xx.fbcdn.net/hphotos-xpf1/v/t1.0-9/10983235_834404963276045_5748714500979974019_n.png?oh=ca852da4eeec8a3adbb1768960dc0de5&oe=5675BF53",
  		title: "Sosyal Aktiviteler Kulübü",
  		question: "En güzel kız hangisi?",
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
          id: 3,
          type: "text",
          avatar: "https://scontent-ams3-1.xx.fbcdn.net/hphotos-xpf1/v/t1.0-9/10983235_834404963276045_5748714500979974019_n.png?oh=ca852da4eeec8a3adbb1768960dc0de5&oe=5675BF53",
          title: "Sosyal Aktiviteler Kulübü",
          question: "Gençler, oyun havası mı atsak?",
          attendance: 24,
          remaining: 16,
          end: "p-show",
          choices: [

			    { index: 0, text: "Evet", state: "p-initial" },
			    { index: 1, text: "Hayır", state: "p-initial" }

		    ]
      },
      {
        id: 4,
        type: "text",
        avatar: "https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xfp1/t31.0-8/s960x960/11882259_903612799720550_8803068947831451790_o.png",
        title: "Pollop Team",
        question: "Pollop ekibine katılmak ister misin?",
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

  $scope.views = {

  	poll: "p-none p-z-0 p-hide",
  	pollImages: "p-none p-z-0 p-hide",
    pollTitle: "p-none p-z-0 p-hide",
  	messageBox: "p-none p-z-0 p-hide",
  	view: "p-none p-z-0 p-hide",
  	mask: "p-none p-z-0 p-hide" ,
    splash: "p-disp p-z-2 p-show",
    splashLogo: "p-none p-z-0 p-hide" ,
    facebook: "p-none p-z-0 p-hide"  	

  };

  $scope.open = function($id){

  	for (var i = 0; i < $scope.items.length; i++) {
  		
  		if($scope.items[i].id == $id) {

  			$scope.poll = $scope.items[i];

  			break;

  		}

  	}

  	if ($scope.poll.type == "text"){

	  	$scope.views.poll = "p-none p-z-1 p-hide";

	  	$timeout(function(){

			$scope.views.poll = "p-disp p-z-1 p-hide";  		

			$timeout(function(){

				$scope.views.poll = "p-disp p-z-1 p-show";

			},250);

	  	},250);

	  } else if ($scope.poll.type == "image") {

	  	$scope.views.pollImages = "p-none p-z-1 p-hide";

	  	$timeout(function(){

  			$scope.views.pollImages = "p-disp p-z-1 p-hide";  		

  			$timeout(function(){

  				$scope.views.pollImages = "p-disp p-z-1 p-show";

  			},250);

	  	},250);

	  } else if ($scope.poll.type == "title") {

      $scope.views.pollTitle = "p-none p-z-1 p-hide";

      $timeout(function(){

        $scope.views.pollTitle = "p-disp p-z-1 p-hide";      

        $timeout(function(){

          $scope.views.pollTitle = "p-disp p-z-1 p-show";

        },250);

      },250);

    }

  };

  $scope.close = function(){

  	$scope.views.poll = "p-disp p-z-1 p-hide";
  	$scope.views.pollImages = "p-disp p-z-1 p-hide";
    $scope.views.pollTitle = "p-disp p-z-1 p-hide";

  	$timeout(function(){

  		$scope.views.poll = "p-none p-z-1 p-hide";
  		$scope.views.pollImages = "p-none p-z-1 p-hide";
      $scope.views.pollTitle = "p-none p-z-1 p-hide";

  		$timeout(function(){

		  	$scope.views.poll = "p-disp p-z-0 p-hide";	
		  	$scope.views.pollImages = "p-disp p-z-0 p-hide";
        $scope.views.pollTitle = "p-disp p-z-0 p-hide";

		  	for (var i = 0; i < $scope.poll.choices.length; i++) {
		  	
		  		$scope.poll.choices[i].state = "p-initial";

	  		}

  		},250);

  	},500);

  };

  $scope.message = "";
  $scope.made = false;

  $scope.choose = function($index){

    if ($scope.made)
      return;

    $scope.made = true;

  	$scope.message = "Cevabın kaydediliyor...";

  	$scope.views.messageBox = "p-none p-z-1 p-hide";

  	$timeout(function(){

  		$scope.views.messageBox = "p-disp p-z-1 p-hide";

  		$timeout(function(){

  			$scope.views.messageBox = "p-disp p-z-1 p-show";

  		},250);

  	},250);

  	$timeout(function(){

  		$scope.message = "Cevabın kaydedildi...";
  		$scope.poll.choices[$index].state = "p-selected";

	  	$timeout(function(){  			

	  		$scope.views.messageBox = "p-disp p-z-1 p-hide";

	  		$timeout(function(){

	  			$scope.views.messageBox = "p-none p-z-1 p-hide";

	  			$timeout(function(){

	  				$scope.views.messageBox = "p-none p-z-0 p-hide";
	  				$scope.close();	            

	  				$scope.items.splice($scope.items.indexOf($scope.poll),1); 

            $scope.made = false; 		

            $timeout(function(){

              $scope.closeView();

            },500);	

	  			}, 500);

	  		}, 500);

		  },1500);

  	},3000);

  };

  $scope.image = "";
  $scope.choice = {};

  $scope.view = function($index){

  	$scope.image = $scope.poll.choices[$index].image;
    $scope.choice = $scope.poll.choices[$index];

  	$scope.views.view = "p-none p-z-2 p-hide";

  	$timeout(function(){

  		$scope.views.view = "p-disp p-z-2 p-hide";

  		$timeout(function(){

  			$scope.views.view = "p-disp p-z-2 p-show";

  		},250);

  	},250);

  };

  $scope.closeView = function(){

  	$scope.views.view = "p-disp p-z-2 p-hide";

  	$timeout(function(){

  		$scope.views.view = "p-none p-z-2 p-hide";

  		$timeout(function(){

  			$scope.views.view = "p-none p-z-0 p-hide";

  		}, 250);

  	}, 500);

  };

  $scope.tryLogin = function(){

    FB.getLoginStatus(function(response) {

      if (response.status === 'connected') {

        $scope.facebookLoggedIn();

      } else if (response.status === "not_authorized") {

        $scope.facebookLogin();

      } else if (response.status === "unknown") {

        $scope.facebookLogin();

      }

    });

  };

  $scope.facebookLogin = function(){

    FB.login(function(response){

      if (response.status === "connected"){

        $scope.facebookLoggedIn();

      }

    },{
      scope: "email,public_profile,user_friends"
    });

  };

  $scope.facebookLoggedIn = function(){

  $timeout(function(){    

    $scope.views.splash = "p-disp p-z-2 p-hide";

    $timeout(function(){

      $scope.views.splash = "p-none p-z-2 p-hide";

      $timeout(function(){

        $scope.views.splash = "p-none p-z-0 p-hide";

      },250);

    },1000);

  },1000);

  };

  $timeout(function(){

    $scope.views.splashLogo = "p-none p-z-2 p-hide";

    $timeout(function(){

      $scope.views.splashLogo = "p-disp p-z-2 p-hide";      

      $timeout(function(){

        $scope.views.splashLogo = "p-disp p-z-2 p-show";

        $timeout(function(){

          $scope.views.facebook = "p-none p-z-2 p-hide";

          $timeout(function(){

            $scope.views.facebook = "p-disp p-z-2 p-hide";      

            $timeout(function(){

              $scope.views.facebook = "p-disp p-z-2 p-show";

              $scope.tick();

            },250);

          },250);

        },1250);

      },250);

    },250);

  },500);

});
