
$().ready(function() {

	window.setInterval(function() {
		$.getJSON('load.php', function(data) {
			$.each(data, function() {
				var value = eval('(' + this.value + ')');
				switch(this.command) {
					case 'log':
						console.log(value);
						break;
					case 'dir':
						console.dir(value);
						break;
				}
			});
		});
	}, 200);

});