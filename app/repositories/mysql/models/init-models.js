var DataTypes = require("sequelize").DataTypes;
var _note = require("./note");
var _reminder = require("./reminder");
var _status = require("./status");
var _user = require("./user");

function initModels(sequelize) {
  var note = _note(sequelize, DataTypes);
  var reminder = _reminder(sequelize, DataTypes);
  var status = _status(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);

  note.belongsTo(reminder, { as: "reminderReminder", foreignKey: "reminder"});
  reminder.hasMany(note, { as: "notes", foreignKey: "reminder"});
  note.belongsTo(status, { as: "statusStatus", foreignKey: "status"});
  status.hasMany(note, { as: "notes", foreignKey: "status"});
  note.belongsTo(user, { as: "createdByUser", foreignKey: "createdBy"});
  user.hasMany(note, { as: "notes", foreignKey: "createdBy"});

  return {
    note,
    reminder,
    status,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
