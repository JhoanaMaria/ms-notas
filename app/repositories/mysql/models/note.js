const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('note', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    createdBy: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      },
      field: 'created_by'
    },
    reminder: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'reminder',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'status',
        key: 'id'
      }
    },
    statusUpdatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'status_updated_at'
    }
  }, {
    sequelize,
    tableName: 'note',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "note_user",
        using: "BTREE",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "note_reminder",
        using: "BTREE",
        fields: [
          { name: "reminder" },
        ]
      },
      {
        name: "note_status",
        using: "BTREE",
        fields: [
          { name: "status" },
        ]
      },
    ]
  });
};
