import express from 'express';
import path from 'path';
import Helpers from '../Utils/Helpers';

const account = express();
const basename = path.basename(__filename);


const folderRoute = `${__dirname}/Routes`;
require('fs')
.readdirSync(folderRoute)
.filter((file: String) => {
	
	return (
		file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.ts'
		);
		
	})
	.forEach((file: String) => {
		const routeName = Helpers.getFileRoute(file);
		account.use(
			`/v1/${routeName}`,
			require(folderRoute + path.sep + file.split('.')[0])
		);
	
	});

export default account;
