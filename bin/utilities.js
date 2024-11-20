import fs from 'fs';
import editJsonFile from 'edit-json-file';

const NODE_VERSION = process.versions.node;

export function checkNodeVersion() {
	if (parseInt(NODE_VERSION) < 14) {
		console.log(`
    You have Node ${NODE_VERSION} installed.
    This project requires Node 18.0 or higher.
    Please update your version of Node.
    `);
		process.exit();
	}
}

export function checkProjectName(name) {
	if (typeof name === 'undefined') {
		console.log(`
    Please specify the app name.
    'npx web-extension-creator <app-name>'
    `);

		process.exit(1);
	}

	if (fs.existsSync(`./${name}`)) {
		console.log(`
    The directory ${name} exists. Try using a new name.
    `);

		process.exit(1);
	}
}

export function updatePackageJson(name) {
	const packageJson = editJsonFile(`./${name}/package.json`);

	packageJson.set('name', name);
	packageJson.save();
}
