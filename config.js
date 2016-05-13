var config = {};

config.redis = {};
config.web = {};

//config.redis.uri = process.env.DUOSTACK_DB_REDIS;
config.redis.host = 'localhost';
config.redis.port = 6379;
config.redis.password = '';
config.appkey = 'webswitch';
config.web.port = process.env.WEB_PORT || 3001;

module.exports = config;