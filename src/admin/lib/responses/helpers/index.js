"ues strict";

module.exports = {

    addHeadersToResponse: function ( response ) {
        response.setHeader( 'Content-Type', 'application/json' );
    }

};
