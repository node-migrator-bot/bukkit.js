#!/usr/bin/env node

var fs = require('fs'),
    path = require('path'),
    colors = require('colors'),
    utile = require('utile'),
    g = require('grabthar');

g.start(function (err) {
  g.catch(err);

  g.download({
    name: 'craftbukkit',
    url: 'http://dl.bukkit.org/latest-rb/craftbukkit.jar',
    path: path.resolve(path.join(__dirname, '..', 'craftbukkit.jar'))
  }, function (err) {
    g.catch(err);

    g.download({
      name: 'JSONApi',
      url: 'http://alecgorge.com/minecraft/jsonapi/version/latest/',
      path: path.resolve(path.join(__dirname, '..', 'plugins', 'jsonapi.zip'))
    }, function (err, state) {
      g.catch(err);

      g.unzip(state, g.finish);
    });

  });
});
