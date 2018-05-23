
  const userInfo = 
(sequelize,DataTypes)=>{
  sequelize.define('user_info', {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    account: {
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.STRING
    }
  }
  /*, {
    classMethods: {
      associate: function(models) {
        Store.hasMany(models.Inventory);
      }
    }
    */
    );
  return userInfo;
}


export default userInfo;