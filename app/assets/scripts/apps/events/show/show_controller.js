;(function(win, doc, WDE) {

  'use strict';

  WDE.module('EventsApp.Show', function(Show, WDE, Backbone, Marionette, $, _) {

    Show.Controller = {
      showEvent: function(id) {
        var events = WDE.request('event:entities')
        var model = events.get(id)
        var eventView = new Show.Event({
          model: model
        })

        WDE.page.show(eventView)
      }
    }

  })

})(window, window.document, window.WDE || (window.WDE = {}))
