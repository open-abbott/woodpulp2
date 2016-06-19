"use strict";

function Data() {
    this.status = 200;
    this.data = [];
}
Data.prototype.add = function ( obj ) {
    this.data.push( obj );
    return this;
};
Data.prototype.toJSON = function () {
    var d = this;
    var payload = {
        meta: {
            total: 0
        },
        data: []
    };
    this.data.forEach( function ( datum ) {
        payload.data.push( datum.toJSON() );
    } );
    payload.meta.total = this.data.length;
    return payload;
};


module.exports = {
    create: function () {
        return new Data();
    }
};
