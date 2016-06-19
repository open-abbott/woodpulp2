"use strict";


function WP2Error() {
    this.status = 500;
    this.code = 0;
    this.message = "Unknown error";
    this.context = null;
    this.error = null;
}
WP2Error.prototype.set = function ( obj, key ) {
    this[key] = obj[key] || this[key];
    return this;
};
WP2Error.prototype.toJSON = function () {
    var e = this;
    var payload = {
        error: {
            code: e.code,
            message: e.message
        }
    };
    if ( null != this.context ) {
        payload.error.context = context;
    }
    if ( null != this.error ) {
        payload.error.stack = error.stack;
    }
    return payload;
};

module.exports = {

    create: function ( options ) {
        return new WP2Error()
            .set( options, 'status' )
            .set( options, 'code' )
            .set( options, 'message' )
            .set( options, 'context' )
            .set( options, 'error' );
    }

};
