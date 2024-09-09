module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate:{
                notEmpty: {
                    args: true,
                    msg: "Username must not be empty"
                },
            }
            // get(){
            //     return this.getDataValue("username") + " xyz"
            // }
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            // set(value){
            //     this.setDataValue("email",value+"@gmail.com")
            // },
            validate:{
                notEmpty: true,
                isEmail: {
                    args: true,
                    msg: "Must give an email"
                },
            },
            unique: true,
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        fullName:{
            type: DataTypes.VIRTUAL,
            type: DataTypes.VIRTUAL,
            get() {
              return `${this.username} scott`;
            },
            set(value) {
              throw new Error('Do not try to set the `fullName` value!');
            },
        }
    });
    return User;
}
