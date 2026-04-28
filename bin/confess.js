#!/usr/bin/env node
const chalk = require('chalk');

const confessions = [
  "I have no idea what this does, but it works",
  "Copied from StackOverflow, please don't judge",
  "This is a temporary fix that will become permanent",
  "I wrote this at 3am and I'm not proud of it",
  "If you're reading this, I'm already gone",
  "This code works by accident, not by design",
  "I don't know why this works, but it does",
  "TODO: Fix this mess (I won't)",
  "This is my cry for help",
  "I'm sorry for whoever has to maintain this",
  "This commit message is longer than the actual fix",
  "I have no tests and I must scream",
  "This is not the code you're looking for",
  "I swear it worked on my machine",
  "This is fine. Everything is fine. 🔥",
];

const confession = confessions[Math.floor(Math.random() * confessions.length)];

console.log('\n' + chalk.red('🎙️ COMMIT CONFESSION'));
console.log(chalk.gray('The truth about your code:\n'));
console.log(chalk.white('  "' + confession + '"'));
console.log(chalk.gray('\n  - Anonymous Developer, 3am\n'));
