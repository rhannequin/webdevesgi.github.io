WDE.module('EventsApp.List', function(List, WDE, Backbone, Marionette, $, _) {
  List.Event = Marionette.ItemView.extend({
    tagName: 'tr',
    template: '#event-template'
  })

  List.Events = Marionette.CompositeView.extend({
    tagName: 'table',
    className: 'table table-hover',
    template: '#event-list',
    itemView: List.Event,
    itemViewContainer: 'tbody'
  })
})
