function init() {
       var router = new Router([
              //page default ("/")
              new Route("home", "home.html", true),

              //pages
              new Route("about", "about.html"),
              new Route("page", "page.html"),
       ]);
}

init();
