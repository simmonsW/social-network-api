const { Thought } = require('../models');

const thoughtController = {
  // get all thoughts
  getAllThoughts(req, res) {
    Thought.find({})
      .select('-__v')
      .sort({ _id: -1 })
      .then(dbThoughtData => res.json(dbThoughtData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },
  // get thought by id
  getThoughtById({ params }, res) {
    Thought.findById({ _id: params.thoughtId })
      .select('-__v')
      .populate({
        path: 'reactions',
        select: '-__v'
      })
      .sort({ _id: -1 })
      .then(dbThoughtData => {
        if (!dbThoughtData) {
          res.status(404).json({ message: 'No thought found with this id!' });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  }
  // POST a new thought
  // PUT update thought by id
  // DELETE thought by id

  // POST a new reaction by thought id
  // DELETE a reaction by id
};

module.exports = thoughtController;