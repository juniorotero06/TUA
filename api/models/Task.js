const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const taskSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
  },
  description: {
    type: String,
    min: 6,
    max: 1024,
  },
  userId: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

taskSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Task", taskSchema);
