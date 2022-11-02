#!/usr/bin/env node
const { Command } = require('commander');
const chalk = require('chalk');
const fs = require('fs');
const watermark = require('@jswork/watermark').default;

// next packages:
require('@jswork/next');
require('@jswork/next-absolute-package');

// https://github.com/afeiship/watermark

const { version } = nx.absolutePackage();
const program = new Command();

program.version(version);

program
  .option(
    '-g, --gravity <string>',
    'Position(north,northeast,center,centre).',
    'southeast'
  )
  .option('-c, --cover <string>', 'Cover url.')
  .option('-d, --dst <string>', 'Destination URL.')
  .option('-s, --src <string>', 'Source url', './src')
  .parse(process.argv);

nx.declare({
  statics: {
    init() {
      const app = new this();
      app.start();
    }
  },
  methods: {
    start() {
      const opts = {
        src: program.src,
        gravity: program.gravity,
        cover: program.cover
      };
      watermark(opts).then((res) => fs.writeFileSync(program.dst, res));
    }
  }
});
