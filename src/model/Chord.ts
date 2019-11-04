import * as mongoose from "mongoose";

const ChartSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  chord: {
    type: [Number],
    required: true
  }
});

export default mongoose.model("Chord", ChartSchema);
