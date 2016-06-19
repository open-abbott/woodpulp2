"use strict";

var lib = {
    path: require( 'path' )
};

var local = {
    apiHelpers: require( lib.path.join( '..', '..', 'responses', 'helpers' ) ),
    noteTypeFactory: require( lib.path.join( '..', '..', 'types', 'note' ) ),
    responseDataFactory: require( lib.path.join( '..', '..', 'responses', 'data' ) ),
    responseErrorFactory: require( lib.path.join( '..', '..', 'responses', 'error' ) )
};

module.exports = {

    register: function ( server ) {


        server.app.get( '/note', function ( request, response ) {
            local.apiHelpers.addHeadersToResponse( response );
            var error = local.responseErrorFactory.create( {
                message: "Oh noes!"
            } );

            response
                .status( error.status )
                .send( error.toJSON() );
        } );


        server.app.get( '/note/:id', function ( request, response ) {

            local.apiHelpers.addHeadersToResponse( response );

            var note = local.noteTypeFactory.create( {
                id: request.params.id,
                author: "Me",
                title: "Hi there!",
                body: "This is some body text."
            } );

            var payload = local.responseDataFactory.create()
                .add( note );

            response
                .status( payload.status )
                .send( payload.toJSON() );

        } );


        server.app.post( '/note', function ( request, response ) {
        } );


        server.app.post( '/note/:id', function ( request, response ) {
        } );


    }

};
