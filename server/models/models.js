import sequelize from '../db.js';
import {DataTypes} from "sequelize";

const User =  sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    login: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: "USER"
    },
})

const ListDialog  = sequelize.define('listsDialog', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
})

const Dialog  = sequelize.define('dialogs', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
})

const UsersDialog  = sequelize.define('usersDialogs', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    }
})

const MessageDialog  = sequelize.define('messagesDialogs', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    userFrom: {
        type: DataTypes.INTEGER
    },

    text: {
        type: DataTypes.STRING(1234)
    },

    mediaUrl: {
        type: DataTypes.STRING
    }
})

User.hasOne(ListDialog);
ListDialog.belongsTo(User);

ListDialog.hasMany(Dialog);
Dialog.belongsTo(User);

Dialog.hasMany(UsersDialog);
UsersDialog.belongsTo(Dialog);

Dialog.hasMany(MessageDialog);
MessageDialog.belongsTo(Dialog);

export {User, ListDialog, Dialog, UsersDialog, MessageDialog}
