!function(){

	var   Class 		= require('ee-class')
		, log 			= require('ee-log')
		, proxy 		= require('node-http-proxy');



	module.exports = new Class({

		init: function(options) {
			this.proxy = new proxy.createProxyServer(options);
			this.proxy.on('error', function(err){
				log('Error in proxy module: '+err.message);
			}.bind(this));
		}

		, request: function(request, response, next) {
			this.proxy.web(request.getRequest(), response.getResponse());
		}

	});
}();
