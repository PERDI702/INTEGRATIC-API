import { Schema, model } from "mongoose";

const computerSchema = new Schema({
  serial: {
    type: String,
    trim: true
  },
  dependencia: {
    type: String,
  }
},
{
  timestamps: true
});

export default model("Task", computerSchema);