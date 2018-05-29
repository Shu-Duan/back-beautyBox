import db from '../models/index.js';

const loginService ={};

loginService.queryUserById=function queryUserById(account){
		db.userInfo.findAll().then(function (data) {
			console.log(data);
			if (data.length === 0) {
				return 'There are no stores in the database';
			}else {
				return data;
			}
		});
	}

export default loginService;