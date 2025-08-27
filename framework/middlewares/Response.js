module.exports = (req, res, next) => {
	res.status = function(statusCode) {
		this.statusCode = statusCode;
		return this;
	}

	res.json = function(data) {
		const jsonData = JSON.stringify(data);
		if(this.getHeader('Content-Type')) {
			this.setHeader('Content-Type', 'application/json');
		}

		this.setHeader('Content-Length', Buffer.byteLength(jsonData));
		
		if(!this.statusCode) {
			this.statusCode = 200;
		}

		this.writeHead(this.statusCode);
		this.end(jsonData);

		return this;
	}

	res.send = function(data) {
		if(typeof data === 'object') {
			return this.json(data);
		}

		this.setHeader('Content-Type', 'text/plain');
      this.setHeader('Content-Length', Buffer.byteLength(data));

		if(!this.statusCode) {
			this.statusCode = 200;
		}

		this.writeHead(this.statusCode);
		this.end(data);

		return this;
	}

	next();
}