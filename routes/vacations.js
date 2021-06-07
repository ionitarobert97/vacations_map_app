const express = require('express');
const router = express.Router();

// @route   GET api/vacation
// @desc    Get all vacation location
// @access  Private
router.get('/', (req, res) => {
    res.send('Get all vacation')
});

// @route   POST api/vacation
// @desc    Add new vacation location
// @access  Private
router.post('/', (req, res) => {
    res.send('Add vacation')
});

// @route   PUT api/vacation/:id
// @desc    Update vacation location
// @access  Private
router.put('/:id', (req, res) => {
    res.send('Update vacation')
});

// @route   DELETE api/vacation/:id
// @desc    DELETE vacation location
// @access  Private
router.delete('/:id', (req, res) => {
    res.send('Delete vacation')
});

module.exports = router;