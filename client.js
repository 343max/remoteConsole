remoteConsoleClient = {
	config: '!!configHere!!',

	loadJs: function(src) {
		var head = document.getElementsByTagName('head')[0];
		var s = document.createElement('script');
		s.setAttribute('src', src);
		head.appendChild(s);
	},

	init: function() {
		if(!window.jQuery) {
			remoteConsoleClient.loadJs(this.config.baseUrl + 'jquery-1.4.2.min.js');
		}

		if(!window.JSON) {
			remoteConsoleClient.loadJs(this.config.baseUrl + 'json2.js');
		}

		if(!window.console) window.console = {};

		window.console.log = function(value) {
			remoteConsoleClient.log(value);
		};

		window.console.dir = function(value) {
			remoteConsoleClient.dir(value);
		};
	},

	log: function(value) {
		this.send('log', value);
	},

	dir: function(value) {
		this.send('dir', value);
	},

	send: function(commandName, value) {
		if(!window.jQuery || !window.JSON) {
			// when JSON ot jQuery is not loaded yet we wait a little
			window.setTimeout(function() {
				remoteConsoleClient.send(commandName, value);
			}, 200);
			return;
		}

		var data = {command: commandName, value: JSON.stringify(value)};

		$.get(this.config.baseUrl + 'save.php', data, function(result) {
			// nothing yet…
			if(result != '{"result":"ok"}') alert(result);
		});
	}
}

remoteConsoleClient.init();