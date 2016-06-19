"use strict";

var lib = {
    express: require( 'express' ),
    exphbs: require( 'express-handlebars' ),
    path: require( 'path' )
};

var local = {
    routers: [
        'page',
        'comic',
        'note',
        'strip',
        'user'
    ].map( function ( name ) {
        return require( lib.path.join( '..', 'routers', name ) );
    } )
};


function Server() {
    this.started = false;
    this.config = null;
    this.port = null;
    this.app = null;
    this.hbs = null;
}
Server.prototype.start = function ( config ) {

    if ( this.started ) {
        throw new Error( "Server is already started" );
    }

    this.started = true;

    this.config = config;
    this.port = config.get( 'port' );

    this.app = lib.express();
    this.hbs = lib.exphbs.create( {
        defaultLayout: "main"
    } );

    this.app.engine( 'handlebars', this.hbs.engine );
    this.app.set( 'view engine', 'handlebars' );

};
Server.prototype.listen = function () {
    this.app.listen( this.port );
};


var server = new Server();


module.exports = {

    start: function ( config ) {

        server.start( config );

        local.routers.forEach( function ( router ) {
            router.register( server );
        } );

        server.listen();

        console.log( "WoodPulp2 Admin Console running on localhost:" + server.port );

    }

};
