var target = "phone";

app.directive(target, function() {

  return {
  
    restrict: "E",
    templateUrl: "html/" + target + ".html"
  
  };

});

app.directive("splash", function() {

  return {
  
    restrict: "E",
    templateUrl: "html/" + target + "/splash.html"
  
  };

});

app.directive("mask", function() {

  return {
  
    restrict: "E",
    templateUrl: "html/" + target + "/mask.html"
  
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

app.directive("success", function() {

  return {
  
    restrict: "E",
    templateUrl: "html/" + target + "/success.html"
  
  };

});

app.directive("failure", function() {

  return {
  
    restrict: "E",
    templateUrl: "html/" + target + "/failure.html"
  
  };

});

app.directive("info", function() {

  return {
  
    restrict: "E",
    templateUrl: "html/" + target + "/info.html"
  
  };

});

app.directive("warning", function() {

  return {
  
    restrict: "E",
    templateUrl: "html/" + target + "/warning.html"
  
  };

});

app.directive("leftOptions", function() {

  return {
  
    restrict: "E",
    templateUrl: "html/" + target + "/left-options.html"
  
  };

});

app.directive("rightOptions", function() {

  return {
  
    restrict: "E",
    templateUrl: "html/" + target + "/right-options.html"
  
  };

});

app.directive("leftButton", function() {

  return {
  
    restrict: "E",
    templateUrl: "html/" + target + "/left-button.html"
  
  };

});

app.directive("rightButton", function() {

  return {
  
    restrict: "E",
    templateUrl: "html/" + target + "/right-button.html"
  
  };

});

app.directive("options", function() {

  return {
  
    restrict: "E",
    templateUrl: "html/" + target + "/options.html"
  
  };

});

app.directive("dialogs", function() {

  return {
  
    restrict: "E",
    templateUrl: "html/" + target + "/dialogs.html"
  
  };

});

app.directive("pages", function() {

  return {
  
    restrict: "E",
    templateUrl: "html/" + target + "/pages.html"
  
  };

});

app.directive("slider", function() {

  return {
  
    restrict: "E",
    templateUrl: "html/" + target + "/slider.html"
  
  };

});

/* --------------------------------- */

app.directive("discover", function() {

  return {
  
    restrict: "E",
    templateUrl: "html/" + target + "/slides/discover.html"
  
  };

});

app.directive("privatePolls", function() {

  return {
  
    restrict: "E",
    templateUrl: "html/" + target + "/slides/private-polls.html"
  
  };

});

app.directive("landing", function() {

  return {
  
    restrict: "E",
    templateUrl: "html/" + target + "/slides/landing.html"
  
  };

});

app.directive("notifications", function() {

  return {
  
    restrict: "E",
    templateUrl: "html/" + target + "/slides/notifications.html"
  
  };

});

app.directive("search", function() {

  return {
  
    restrict: "E",
    templateUrl: "html/" + target + "/slides/search.html"
  
  };

});

app.directive("firstDialog", function() {

  return {
  
    restrict: "E",
    templateUrl: "html/" + target + "/dialogs/first-dialog.html"
  
  };

});



app.directive("createPage", function() {

  return {
  
    restrict: "E",
    templateUrl: "html/" + target + "/pages/create-page.html"
  
  };

});