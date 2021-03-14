const { model, Schema } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const boardSchema = new Schema({
  name: String,
  title: String,
  body: String,
  position: Number,
  createdAt: String,
  threadsCount: Number,
  answersCount: Number,
  newestThread: String,
  newestAnswer: String
})
boardSchema.plugin(mongoosePaginate)
boardSchema.index({ name: 'text', title: 'text', body: 'text' })

module.exports = model('Board', boardSchema);
