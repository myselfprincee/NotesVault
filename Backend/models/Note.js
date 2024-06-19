import { Schema, model } from 'mongoose';

// const connectToMongo = require('../db')

const NotesSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },

  tag: {
    type: String,
    default: "General"
  },
  Date: {
    type: Date,
    default: Date.now
  }


});

export default model('note', NotesSchema);

