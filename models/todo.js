const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports=(sequelize,DataTypes)=>{

    const Todo = sequelize.define("Todo",{

        text:{

            type:DataTypes.STRING,
            allownull : false



        }





    });

return Todo;

};