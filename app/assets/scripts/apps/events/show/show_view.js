;(function(win, doc, WDE) {

  'use strict';

  WDE.module('EventsApp.Show', function(Show, WDE, Backbone, Marionette, $, _) {

    Show.MissingEvent = Marionette.ItemView.extend({
      template: '#missing-event-view'
    })

    Show.Event = Marionette.ItemView.extend({
      template: '#event-view'
    })

  })

})(window, window.document, window.WDE || (window.WDE = {}))
