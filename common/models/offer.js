var PlaceProfile = require('./place-profile');
module.exports = function(Offer) {
    //   Offer.custom = function(cb) {
    //     var currentDate = new Date();
    //     var currentHour = currentDate.getHours();
    //     var OPEN_HOUR = 6;
    //     var CLOSE_HOUR = 20;
    //     console.log('Current hour is ' + currentHour);
    //     var response;
    //     if (currentHour > OPEN_HOUR && currentHour < CLOSE_HOUR) {
    //       response = 'We are open for business.';
    //     } else {
    //       response = 'Sorry, we are closed. Open daily from 6am to 8pm.';
    //     }
    //     cb(null, response);
    //   };
    //   Offer.remoteMethod(
    //     'custom',
    //     {
    //       http: {path: '/custom', verb: 'get'},
    //       returns: {arg: 'custom', type: 'string'}
    //     }
    //   );
    Offer.custom = function(cb) {
        Offer.find({}).exec(function (err, doc) {
            if (doc != null) {
                cb(null, response);
            } else {
                cb(err,"failed");
            }
        });
    };
    Offer.remoteMethod(
        'custom',
        {
            http: {path: '/custom', verb: 'get'},
            returns: {arg: 'custom', type: 'string'}
        }
    );


};
