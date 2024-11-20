#! /usr/bin/env node
import packageJson from '../package.json' assert { type: 'json' };
import { exec, execSync } from 'child_process';
import { Command } from 'commander';
import {
	checkNodeVersion,
	checkProjectName,
	updatePackageJson,
} from './utilities.js';

const program = new Command();

const REPOSITORY = 'https://github.com/mh-anwar/web-extension-creator.git';

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

console.log(`\n📈 Initializing Chrome Extension Boilerplate...`);

// Clone repository from Github
execSync(`git clone ${REPOSITORY} ${projectName} -q`);

// Remove unrelated files
execSync(
	`cd ${projectName} && rm -r bin/ && rm .gitignore && rm README.md && rm package-lock.json && rm -rf package.json`
);

// Copy all extension files to root (copy instead of remove, since `rm` won't overwrite some files)
execSync(
	`cd ${projectName} && cp -r chrome-extension-boilerplate/* ./ && cp chrome-extension-boilerplate/.gitignore ./`
);

// Update package name
updatePackageJson(projectName);

// Remove unimportant files
execSync(`cd ${projectName} && rm -r chrome-extension-boilerplate/`);

console.log(`\n📈 Installing dependencies - it might take a few minutes...`);

exec(`cd ${projectName} && npm i -s`, (err) => {
	if (err) {
		console.log(`\nSome error while installing dependencies ${err}`);
		return;
	}

	console.log(`
    ✅ All done!

    ℹ️ Your app is now ready.
    ℹ️ Use the commands below to run the app.

    🚀 cd ${projectName}
    🚀 npm run dev

    `);
});
