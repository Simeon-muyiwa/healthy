// For more information see: http://emberjs.com/guides/routing/

Healthy.HeartEditRoute = Ember.Route.extend({
   model: function() {
   	return this.modelFor('heart');
   },

   actions: {
   	 update: function(heart) {
        heart.save();
   	}
   }
});
