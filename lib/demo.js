// Generated by CoffeeScript 1.4.0
(function() {

  NodeList.prototype.forEach = Array.prototype.forEach;

  document.addEventListener("DOMContentLoaded", function() {
    window.boomerang = new Boomerang({
      localMode: true,
      app: "queriac",
      addon: "honeybadger"
    });
    return document.querySelectorAll("ul.demo_links li a").forEach(function(el) {
      return el.addEventListener("click", function() {
        console.log("Demo " + (el.className.toUpperCase()));
        Boomerang.reset();
        switch (el.className) {
          case "a":
            return window.boomerang = new Boomerang({
              localMode: true
            });
          case "b":
            return window.boomerang = new Boomerang({
              localMode: true,
              app: "queriac",
              addon: "honeybadger"
            });
          case "c":
            return window;
        }
      });
    });
  });

}).call(this);
