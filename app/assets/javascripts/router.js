// For more information see: http://emberjs.com/guides/routing/

Healthy.Router.map(function() {
   this.resource('hearts', function() {
   	 this.route ('new');
   });
   this.resource('heart', {path: '/hearts/:name'}, function(){
   	  this.route('edit')
   });
   
});
