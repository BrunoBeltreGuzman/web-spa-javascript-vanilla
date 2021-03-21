function Router(routes) {
       try {
              if (!routes) {
                     throw "error: routes param is mandatory";
              }
              //loading
              const loading = document.getElementById("loading");
              loading.innerHTML = "Loading...";

              //Start
              this.constructor(routes);
              this.init();
              loading.innerHTML = "";
       } catch (e) {
              console.error(e);
       }
}

Router.prototype = {
       routes: undefined,
       rootElem: undefined,
       constructor: function (routes) {
              this.routes = routes;
              this.rootElem = document.getElementById("app");
       },
       init: function () {
              var r = this.routes;
              (function (scope, r) {
                     window.addEventListener("hashchange", function (e) {
                            scope.hasChanged(scope, r);
                     });
              })(this, r);
              this.hasChanged(this, r);
       },
       hasChanged: function (scope, r) {
              if (window.location.hash.length > 0) {
                     for (var i = 0, length = r.length; i < length; i++) {
                            var route = r[i];
                            if (
                                   route.isActiveRoute(
                                          window.location.hash.substr(1)
                                   )
                            ) {
                                   const page = route.htmlName;
                                   if (
                                          page !== "page.html" &&
                                          page !== "home.html" &&
                                          page !== "about.html"
                                   ) {
                                          scope.goToRoute("404.html");
                                   } else {
                                          scope.goToRoute(route.htmlName);
                                   }
                            }
                     }
              } else {
                     scope.goToRoute("404.html");

                     for (var i = 0, length = r.length; i < length; i++) {
                            var route = r[i];
                            console.log(route.htmlName);
                            if (route.default) {
                                   scope.goToRoute(route.htmlName);
                            }
                     }
              }
       },
       goToRoute: function (htmlName) {
              console.log(htmlName);

              if (
                     htmlName != "home.html" &&
                     htmlName != "about.html" &&
                     htmlName != "page.html"
              ) {
                     htmlName = "404.html";
              }

              (function (scope) {
                     var url = "views/" + htmlName,
                            xhttp = new XMLHttpRequest();
                     xhttp.onreadystatechange = function () {
                            if (this.readyState === 4 && this.status === 200) {
                                   scope.rootElem.innerHTML = this.responseText;
                            }
                     };
                     xhttp.open("GET", url, true);
                     xhttp.send();
              })(this);
       },
};
