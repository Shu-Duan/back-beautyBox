import Express from 'express';
import db from '../models/index.js';

const app = new Express();
const boxRoutes = Express.Router();

boxRoutes.get('/queryAllBox', function(req, res) {
	console.log(req.query);
	req.session.loginUser = 'test';
	console.log(req.session.loginUser);
	/*db.userInfo.findAll().then(function (data) {
		console.log(data);
      if (data.length === 0) {
        res.json('There are no stores in the database');
      }else {
      res.json(data);
	  }
    });*/
});

export default boxRoutes;