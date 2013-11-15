;(function(win, doc) {

  'use strict';

  var WDE = window.WDE = new Backbone.Marionette.Application()

  WDE.addRegions({
    header: '.container>header',
    page:   '.container>.page',
    footer: '.container>footer'
  })

  WDE.navigate = function(route, options) {
    options = options || (options = {})
    Backbone.history.navigate(route, options)
  }

  WDE.getCurrentRoute = function() {
    return Backbone.history.fragment
  }

  WDE.on('initialize:after', function() {
    if(Backbone.history) {
      Backbone.history.start()
    }
  })

})(window, window.document)