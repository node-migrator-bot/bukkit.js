#!/usr/bin/env node

var fs = require('fs'),
    path = require('path'),
    colors = require('colors'),
    grabthar = require('grabthar');

grabthar.init();

grabthar.download({
  name: 'craftbukkit',
  url: 'http://dl.bukkit.org/latest-rb/craftbukkit.jar',
  path: path.resolve(path.join(__dirname, '..', 'craftbukkit.jar'))
}, function (err) {
  if (err) {
    throw err;
  }

  grabthar.download({
    name: 'JSONApi',
    url: 'http://alecgorge.com/minecraft/jsonapi/version/latest/',
    path: path.resolve(path.join(__dirname, '..', 'plugins', 'jsonapi.zip'))
  }, function (err, state) {
    if (err) {
      throw err;
    }

    grabthar.unzip(state, finish);
  });

});

function finish (err) {
  if (err) {
    throw err;
  }

  grabthar.log.info('Done.');
  process.exit(0);
}
