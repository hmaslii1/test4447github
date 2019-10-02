const session = require('smartux-connect');
session.transform.acmetransferrequests = session.loadTransform('acmetransferrequests');
require('./client');
require('./transform/acmetransferrequests/login');
require('./transform/acmetransferrequests/transferform');
require('./transform/acmetransferrequests/confirmation');
require('./transform/acmetransferrequests/confirmationconfident');
require('./client/confirmation');
session.start();