;(function(win, doc, WDE) {

  'use strict';

  WDE.module('EventsApp.List', function(List, WDE, Backbone, Marionette, $, _) {

    List.Controller = {
      listEvents: function() {
        var events = WDE.request('event:entities')

        var eventsListView = new List.Events({
          collection: events
        })

        eventsListView.on('itemview:event:show', function(childView, model) {
          WDE.trigger('events:show', model.get('id'))
        })

        WDE.page.show(eventsListView)
      }
    }

  })

})(window, window.document, window.WDE || (window.WDE = {}))
