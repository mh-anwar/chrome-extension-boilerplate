#!/usr/bin/env node
const { exec, execSync } = require('child_process');
const { Command } = require('commander');
const packageJson = require('../package.json');
const {
	checkNodeVersion,
	checkProjectName,
	updatePackageJson,
} = require('./utilities');

const program = new Command();

const GIT_REPO = 'git@github.com:mh-anwar/create-chrome-extension.git';

let projectName;

program
	.name(packageJson.name)
	.usage('<app-name> [options]')
	.version(packageJson.version)
	.arguments('[app-name]', 'your project name')
	.action((name) => {
		projectName = name;
	})
	.parse();

checkProjectName(projectName);

checkNodeVersion();

console.log(`\n Initializing Chrome Extension Boilerplate...`);

// clone the whole repo
execSync(`git clone ${GIT_REPO} ${projectName} -q`);

// copy the template files
execSync(`cd ${projectName} && cp -r chrome-extension-boilerplate/.`);

updatePackageJson(projectName);

// remove unrelated files
execSync(`cd ${projectName} && rm -r bin/`);

console.log(`
    Installing dependencies - it might take a few minutes...`);

exec(`cd ${projectName} && yarn`, (err) => {
	if (err) {
		console.log(`Some error while installing dependencies ${err}`);
		return;
	}

	console.log(`
    All done!

    Your app is now ready.
    Use the commands below to run the app.

    cd ${projectName}
    npm run dev

    `);
});
