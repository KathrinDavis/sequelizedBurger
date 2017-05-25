module.exports = function(sequelize, DataTypes){
	var Burger = sequelize.define("Burger", {
		id:{
			type: Sequelize.INTEGER,
			auroIncrement: true,
			primaryKey: true
			},
		burger_name: { 
				type: DataTypes.STRING,
				allowNull: false,
		},
		devoured: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				defaultValue: false
		},
		timestamps: true
		
		}
	); return Burger;
};

module.exports = Burger;