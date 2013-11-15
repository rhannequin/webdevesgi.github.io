;(function(win, doc, WDE) {

  'use strict';

  WDE.module('EventsApp', function(EventsApp, WDE, Backbone, Marionette, $, _) {

    EventsApp.Router = Marionette.AppRouter.extend({
      appRoutes: {
        'events': 'listEvents',
        'events/:id': 'showEvent'
      }
    })

    var API = {
      listEvents: function() {
        EventsApp.List.Controller.listEvents()
      },

      showEvent: function(id) {
        EventsApp.Show.Controller.showEvent(id)
      }
    }

    WDE.on('events:list', function() {
      WDE.navigate('events')
      API.listEvents()
    })

    WDE.on('events:show', function(id) {
      WDE.navigate('events/' + id)
      API.showContact(id)
    })

    WDE.addInitializer(function() {
      new EventsApp.Router({
        controller: API
      })
    })

  })

})(window, window.document, window.WDE || (window.WDE = {}))
