;(function(win, doc, WDE) {

  'use strict';

  WDE.module('EventsApp.Show', function(Show, WDE, Backbone, Marionette, $, _) {

    Show.Controller = {
      showEvent: function(id) {
        var fetchingEvent = WDE.request('event:entity', id)

        $.when(fetchingEvent).done(function(model) {
          var eventView
          if(typeof model !== 'undefined') {
            eventView = new Show.Event({
              model: model
            })
          } else {
            eventView = new Show.MissingEvent()
          }

          WDE.page.show(eventView)
        })
      }
    }

  })

})(window, window.document, window.WDE || (window.WDE = {}))
