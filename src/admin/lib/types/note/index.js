"use strict";

function Note() {
    this.id = null;
    this.author = "Unknown";
    this.scheduledFor = new Date();
    this.title = "Untitled";
    this.body = "";
}
Note.prototype.toJSON = function () {
    var n = this;
    return {
        id: n.id,
        author: n.author,
        scheduledFor: n.scheduledFor.toISOString(),
        title: n.title,
        body: n.body
    };
};


module.exports = {

    create: function ( data ) {

        if ( !data ) {
            data = {};
        }

        var n = new Note();

        n.id = data.id || n.id;

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
