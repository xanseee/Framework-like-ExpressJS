module.exports = () => async (req, res, next) => {
	if (!req.headers['content-type']?.includes('application/json')) {
      return next();
   }

	try {
		let body = await new Promise((resolve, reject) => {
			let data = '';

			req.on('data', chunk => {
				data += chunk;
			});
			req.on('end', () => {
				resolve(data); 
			});
			req.on('error', (error) => {
				reject(error); 
			});	
      });

		if(body) {
			req.body = JSON.parse(body);
		}
		next();
	} catch (e) {
		if (error instanceof SyntaxError) {
			res.status(400).send({ error: 'Invalid JSON' });
      } else {
			res.status(500).send({ error: 'Internal server error при попытке обработать json' });
      }
		next(e);
	}
}