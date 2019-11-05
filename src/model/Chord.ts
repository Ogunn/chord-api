import mongoose from "../database";

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

const Chord = mongoose.model("Chord", ChartSchema);

export default Chord;
