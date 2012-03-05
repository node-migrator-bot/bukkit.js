#!/usr/bin/env node

var fs = require('fs'),
    path = require('path'),
    colors = require('colors'),
    utile = require('utile'),
    grabthar = require('grabthar');

grabthar
  .task({
    name: 'craftbukkit',
    url: 'http://dl.bukkit.org/latest-rb/craftbukkit.jar',
    path: path.resolve(path.join(__dirname, '..', 'craftbukkit.jar'))
  })
    .download()
  .task({
    name: 'JSONApi',
    url: 'http://alecgorge.com/minecraft/jsonapi/version/latest/',
    path: path.resolve(path.join(__dirname, '..', 'plugins', 'jsonapi.zip'))
  })
    .download()
    .unzip()
  .task({
    name: 'Remote Toolkit',
    url: 'http://drdanick.com/downloads/dl.php?id=remotetoolkit&ver=r10_a12',
    path: path.resolve(path.join(__dirname, '..', 'plugins', 'rtk.zip'))
  })
    .download()
    .unzip()
  .start()
;
