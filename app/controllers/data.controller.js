'use strict';

const Data = require('../models/data');

module.exports = {
  create(req, res) {
    const { mpid } = req.params;
    const data = req.body.data;
    const timestamp = req.body.timestamp;
    Data.create({
      id: mpid,
      data,
      timestamp,
    }, (error) => {
      if (error) return res.status(400).send('Error Adding Data');
      return res.status(200).send('Data Added Correctly');
    });
  },
};
