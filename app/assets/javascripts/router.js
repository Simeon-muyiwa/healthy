// For more information see: http://emberjs.com/guides/routing/

Healthy.Router.map(function() {
   this.resource('hearts');
   this.resource('heart', {path: '/hearts/:name'});
});
