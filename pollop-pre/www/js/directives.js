var target = "phone";

app.directive(target, function() {

  return {
  
    restrict: "E",
    templateUrl: "html/" + target + ".html"
  
  };

});

app.directive("mask", function() {

  return {
  
    restrict: "E",
    templateUrl: "html/" + target + "/mask.html"
  
  };

});

app.directive("header", function() {

  return {
  
    restrict: "E",
    templateUrl: "html/" + target + "/header.html"
  
  };

});

app.directive("navigation", function() {

  return {
  
    restrict: "E",
    templateUrl: "html/" + target + "/navigation.html"
  
  };

});

app.directive("indicator", function() {

  return {
  
    restrict: "E",
    templateUrl: "html/" + target + "/indicator.html"
  
  };

});

app.directive("slider", function() {

  return {
  
    restrict: "E",
    templateUrl: "html/" + target + "/slider.html"
  
  };

});

app.directive("discover", function() {

  return {
  
    restrict: "E",
    templateUrl: "html/" + target + "/discover.html"
  
  };

});

app.directive("landing", function() {

  return {
  
    restrict: "E",
    templateUrl: "html/" + target + "/landing.html"
  
  };

});

app.directive("settingsButton", function() {

  return {
  
    restrict: "E",
    templateUrl: "html/" + target + "/settings-button.html"
  
  };

});

app.directive("createButton", function() {

  return {
  
    restrict: "E",
    templateUrl: "html/" + target + "/create-button.html"
  
  };

});

app.directive("leftOptions", function() {

  return {
  
    restrict: "E",
    templateUrl: "html/" + target + "/left-options.html"
  
  };

});

app.directive("options", function() {

  return {
  
    restrict: "E",
    templateUrl: "html/" + target + "/options.html"
  
  };

});

app.directive("rightOptions", function() {

  return {
  
    restrict: "E",
    templateUrl: "html/" + target + "/right-options.html"
  
  };

});

app.directive("modal", function() {

  return {
  
    restrict: "E",
    templateUrl: "html/" + target + "/modal.html"
  
  };

});

app.directive("popup", function() {

  return {
  
    restrict: "E",
    templateUrl: "html/" + target + "/popup.html"
  
  };

});

app.directive("notification", function() {

  return {
  
    restrict: "E",
    templateUrl: "html/" + target + "/notification.html"
  
  };

});