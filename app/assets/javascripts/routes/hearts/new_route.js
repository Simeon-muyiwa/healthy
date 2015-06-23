// For more information see: http://emberjs.com/guides/routing/

Healthy.HeartsNewRoute = Ember.Route.extend({
  model: function() {
  	return this.store.createRecord('heart');
  }, 

  actions: {
  	create: function(heart) {
  		var route = this;
  		heart.save().then(function() {
  			route.transitionTo('hearts');
  		});
  		
  	}
  }


});
