let config = {};


config.authInstanceId = "<<5a1c52d8e4b0afa1646db85a>>";

config.objectSorageInstanceId = "<<5a1c52d8e4b0afa1646db85b>>";

config.integratedMasterKey = "<<c6e0243cf9944fcc8e97ccb5>>";

config.clientKey = "<<5a1c52d8e4b0ce09cd4655c5>>";

config.cloudCode = "<<5a1c52dae4b03ffa04746094>>";

config.cdnInstanceId = "<<X-Backtory-Storage-Id>>";


config.baseUrl = "http://storage.backtory.com/<<cdn address>>";



config.lambdaHeaders =
    {
        '5a1c52d8e4b0afa1646db85a':
config.authInstanceId,
        'x-backtory-cache-mode': "No-Cache"
    };

module.exports = config;