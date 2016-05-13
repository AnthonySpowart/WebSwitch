# Web Switch

**WebSwitch** is a small application for setting and retrieving temporary switch values in a store (Redis for the moment)

## Setup
Update the config.js file to point to your redis server and set your own app key:
```js
config.redis.host = 'localhost';
config.redis.port = 6379;
config.redis.password = '';
config.appkey = 'webswitch:';
```

## Running:
```bash
npm install
npm index.js
```


## Usage

###Set switch using GET

With the application key set to 'WebSwitch' and the following querry string passed: http://localhost:3000/setSwitch?key1=abc&key2=123&value=true will create a key called 'WebSwitchabc123' and set its' value to 'true'

###Set switch using POST

Posting key value pairs of key1=abc and key2=123 to http://localhost:3000/setSwitch will create a key called 'WebSwitchabc123' and set its' value to 'true'

###Get switch value

A call to http://localhost:3000/setSwitch?key1=abc&key2=123&value=true will return 'true' if the switch has been set.

Embed as a link, in an email for example: 
</br>[Unsubscribe](http://localhost:3000/setSwitch?emailid=abc123&value=unsubscribe)
</br>[Keep recieving](http://localhost:3000/setSwitch?emailid=abc123&value=recieve)
