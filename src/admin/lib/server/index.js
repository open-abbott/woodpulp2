"use strict";

var lib = {
    express: require( 'express' ),
    exphbs: require( 'express-handlebars' )
};

module.exports = {

    start: function ( config ) {

        var port = config.get( 'port' );
        var app = lib.express();
        var hbs = lib.exphbs.create( {
            defaultLayout: "main"
        } );

        app.engine( 'handlebars', hbs.engine );
        app.set( 'view engine', 'handlebars' );

        app.get( '/', function ( request, response ) {
            response.render( 'home' );
        } );

        app.listen( port, function () {
        } );

        console.log( "WoodPulp2 Admin Console running on localhost:" + port );

    }

};
