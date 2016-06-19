"use strict";

function Note() {
    this.author = "Unknown";
    this.scheduledFor = new Date();
    this.title = "Untitled";
    this.body = "";
}


module.exports = {

    create: function ( data ) {

        data ||= {};

        var n = new Note();

        // really need to look up a user by ID
        n.author = data.author || n.author;

        n.scheduledFor = data.scheduledFor
            ? new Date( data.scheduledFor )
            : n.scheduledFor;

        n.title = data.title || n.title;
        n.body = data.body || n.body;

        return n;

    }

};
