#!/usr/bin/env node
const { Command } = require('commander');
const chalk = require('chalk');

// next packages:
require('@jswork/next');
require('@jswork/next-absolute-package');

// https://github.com/afeiship/watermark

const { version } = nx.absolutePackage();
const program = new Command();
const exec = require('child_process').execSync;

program.version(version);

program
  .option('-g, --gravity <string>', 'Position(north,northeast,center,centre).', 'southeast')
  .option('-c, --cover <string>', 'Cover url.')
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
    init() { },
    start() {
      console.log(chalk.green('watermark start...'));
      console.log(chalk.green('🚗 hello cli.'), program.src, program.gravity, program.cover);
    }
  }
});
