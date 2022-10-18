const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

// Customize yargs version
yargs.version ('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            descirbe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    }, 
    handler: function (argv) {
        console.log('Title: '+ argv.title)
        console.log('Body: '+ argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    hander: function () {
        console.log('Removing the note')
    }
})

// Create list command
yargs.command({
    command: 'list',
    descirbe: 'List notes',
    handler: function () {
        console.log('Listing all notes')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading a note')
    }
})

// add, remove, read, list

yargs.parse()
