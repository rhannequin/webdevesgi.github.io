;(function(win, doc, WDE) {

  'use strict';

  WDE.module('Entities', function(Entities, WDE, Backbone, Marionette, $, _) {

    var apiUrl = win.apiUrl;

    Entities.Event = Backbone.Model.extend({
      urlRoot: function() {
        return apiUrl + '/events'
      },
      initialize: function() {
        this.updateAttributes()
        this.on('change', this.updateAttributes, this)
      },
      updateAttributes: function() {
        this.set('created_at', new Date(this.get('created_at')))
      }
    })

    Entities.EventCollection = Backbone.Collection.extend({
      url: function() {
        return apiUrl + '/events'
      },
      model: Entities.Event
    })

    var API = {
      getEventEntities: function() {
        var events = new Entities.EventCollection()
        var defer = $.Deferred()
        events.fetch({
          success: function(data) {
            defer.resolve(data)
          }
        })
        return defer.promise()
      },

      getEventEntity: function(eventId) {
        var eventModel = new Entities.Event({id: eventId})
        var defer = $.Deferred()
        eventModel.fetch({
          success: function(data) {
            defer.resolve(data)
          },
          error: function() {
            defer.resolve(undefined)
          }
        })
        return defer.promise()
      }
    }

    WDE.reqres.setHandler('event:entities', function() {
      return API.getEventEntities()
    })

    WDE.reqres.setHandler('event:entity', function(id) {
      return API.getEventEntity(id)
    })

  })

})(window, window.document, window.WDE || (window.WDE = {}))
