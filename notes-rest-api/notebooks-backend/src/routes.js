const express = require('express');
const { Notebook } = require('./models');
const mongoose = require('mongoose');

const notebookRouter = express.Router();

const validateID = (req, res, next) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Notebook not found.' })
    }
    next();
}


notebookRouter.post('/', async (req, res) => {
    try {
        const { name, description } = req.body;
        if (!name) {
            return res.status(400).json({ error: "'name' is required." })
        }

        const notebook = new Notebook({ name, description });
        await notebook.save();
        res.status(201).json({ data: notebook })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
});


notebookRouter.get('/', async (req, res) => {
    try {
        const notebooks = await Notebook.find();
        return res.status(200).json({ data: notebooks })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
});


notebookRouter.get('/:id', validateID, async (req, res) => {
    try {
        const notebook = await Notebook.findById(req.params.id);
        if (!notebook) {
            return res.status(404).json({ error: 'Notebook not found.' })
        }
        return res.status(200).json({ data: notebook })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
});


notebookRouter.put('/:id', validateID, async (req, res) => {
    try {
        const { name, description } = req.body;

        const notebook = await Notebook.findByIdAndUpdate(req.params.id, { name, description }, { new: true });
        if (!notebook) {
            return res.status(404).json({ error: 'Notebook not found.' })
        }

        if (!notebook) {
            return res.status(404).json({ error: 'Notebook not found.' })
        }
        return res.status(200).json({ data: notebook })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
});


notebookRouter.delete('/:id', validateID, async (req, res) => {
    try {
        const notebook = await Notebook.findByIdAndDelete(id);

        if (!notebook) {
            return res.status(404).json({ error: 'Notebook not found.' })
        }

        if (!notebook) {
            return res.status(404).json({ error: 'Notebook not found.' })
        }
        return res.status(204);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
});


notebookRouter.get('/', (req, res) => {
    res.json({ message: 'Hello from notebooks' });
});

module.exports = {
    notebookRouter,
};