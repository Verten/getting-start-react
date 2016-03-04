let xhr = {

	loadData(path) {
		return new Promise(function(resolve, reject) {
			var xhr = new XMLHttpRequest();
			xhr.overrideMimeType('application/json');
			xhr.open('GET', path, true);
			xhr.onload = () => {
				// iOS needs returns 0 as status
				// http://simonmacdonald.blogspot.se/2011/12/on-third-day-of-phonegapping-getting.html
				if (xhr.status === 200 || xhr.status === 0) {
					resolve(xhr.responseText);
				} else {
					reject(Error(xhr.statusText));
				}
			}
			xhr.send(null);
		});
	}
}

export default xhr;
