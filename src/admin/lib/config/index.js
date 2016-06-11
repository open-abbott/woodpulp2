"use strict";

var lib = {
    path: require( 'path' )
};

function Config( json ) {
    this.json = json;
}

Config.prototype.get = function ( key ) {

    if ( !this.json[key] ) {
        throw new Error( "Configuration key not found: " + key );
    }
    return this.json[key];

};


module.exports = {

    create: function ( file ) {

        var json = {
            port: 9980
        };

        if ( !file ) {
            var msg = "Using default configuration file";
            console.log( msg );
            file = lib.path.join( '..', '..', 'etc', 'wp2.json' );
        }

        try {
            json = require( file );
        }
        catch ( error ) {
            var msg = "Unable to load configuration, proceeding with internal defaults";
            console.error( msg );
        }

        return new Config( json );

    }

};
