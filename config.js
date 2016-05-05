var config = {};

config.redis = {};
config.web = {};

config.redis.uri = process.env.DUOSTACK_DB_REDIS;
config.redis.host = 'hostname';
config.redis.port = 6379;
config.appkey = 'webswitch';
config.web.port = process.env.WEB_PORT || 3001;

module.exports = config;