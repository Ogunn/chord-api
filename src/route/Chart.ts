import * as express from "express";

import Chord from "../model/Chord";

const router = express.Router();

router.post("/", async (req: express.Request, res: express.Response) => {
  const chord = new Chord({
    name: req.body.name,
    chord: req.body.chord
  });

  try {
    const savedChord = await chord.save();
    res.json(savedChord);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/", async (req: express.Request, res: express.Response) => {
  try {
    const chords = await Chord.find();
    res.json(chords);
  } catch (err) {
    res.json({ message: err });
  }
});

export default router;
