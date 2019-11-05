import { Request, Response } from "express";

import Chord from "../model/Chord";

const create = async (req: Request, res: Response) => {
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
};

const findAll = async (_req: Request, res: Response) => {
  try {
    const chords = await Chord.find();
    res.json(chords);
  } catch (err) {
    res.json({ message: err });
  }
};

const chordController = {
  create: create,
  findAll: findAll
};

export default chordController;
