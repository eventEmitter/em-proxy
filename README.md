# em-proxy

proxy middleware for ee-webservice. sends requests to another host.

## installation

	npm install em-proxy


## usage

	var ProxMiddleware = require('em-proxy');

	var proxy = new ProxMiddleware({
		target: 'http://npmjs.org/'
	});


the options object may contain any of the following options


	{
		  target : <url string to be parsed with the url module>
		, forward: <url string to be parsed with the url module>
		, agent  : <object to be passed to http(s).request>
		, ws     : <true/false, if you want to proxy websockets>
		, xfwd   : <true/false, adds x-forward headers>
		, secure : <true/false, verify SSL certificate>
		, toProxy: <true/false, explicitly specify if we are proxying to another proxy>
		, localAddress : <Local interface string to bind for outgoing connections>
	}