// For more information see: http://emberjs.com/guides/routing/

Healthy.HeartsRoute = Ember.Route.extend({
   model: function() {
   	return this.store.findAll('heart');
   }

});
