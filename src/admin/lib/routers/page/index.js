"use strict";

module.exports = {

    register: function ( server ) {

        server.app.get( '/', function ( request, response ) {
            response.render( 'home' );
        } );

    }

};
