import Express from 'express';
import db from '../models/index.js';

const app = new Express();
const boxRoutes = Express.Router();

boxRoutes.get('/queryAllBox', function(req, res) {
	console.log(db.userInfo);
	db.userInfo.findById('uuid-test').then(function (data) {
      if (data.length === 0) {
        res.json('There are no stores in the database');
      }
      res.json(data);
    });
	res.end('{}');
});

export default boxRoutes;