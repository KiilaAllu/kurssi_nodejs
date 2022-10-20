
const chalk = require('chalk') 
const fs = require('fs')
const getNotes = () => {
    return ('Your notes...')
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter ((note) => note.title === title)  /* (function (note) {
        return note.title === title
    }) */

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log(chalk.bgGreen('New note added!'))
    } else {
        console.log(chalk.bgRed('Note title taken!'))
    }

    
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title) /* {
        return note.title !== title
    }) */

    if (notesToKeep.length < notes.length) {
        console.log(chalk.bgGreen('Note Removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.bgRed('No note found!'))
        saveNotes(notesToKeep)
    }

}

const listNotes = () => {
    const notes = loadNotes()
    console.log(notes.title)
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}


module.exports = {
    getnotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}
