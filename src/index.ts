#!/usr/bin/env bun

import { spawn } from "child_process";
import { readFileSync } from "fs";
import prompts from "prompts";

const args: string[] = process.argv.slice(2);

let appName: string | undefined;

if (args.includes("--app") || args.includes("-a")) {
	const index: number =
		args.indexOf("--app") > -1 ? args.indexOf("--app") : args.indexOf("-a");
	appName = args[index + 1];
}

const envFile: string = "./.env";

const env: string = readFileSync(envFile, "utf8");

const lines: string[] = env.split("\n");

let secrets = false;
const secretValues: { [key: string]: string } = {};

for (const line of lines) {
	if (line.includes("# FLY SECRETS")) {
		secrets = true;
		continue;
	}

	if (secrets) {
		const [key, value] = line.split("=");
		if (!key || !value) {
			console.log("Skipping line:", `${line}\nPlease check your .env file`);
			continue;
		}
		secretValues[key] = value;
	}
}

console.log("The following secrets will be set:");

for (const [key, value] of Object.entries(secretValues)) {
	console.log(`${key}: ${value}`);
}

const confirm = await prompts({
	type: "confirm",
	name: "value",
	message: "Confirm setting secrets?",
	initial: true,
});

if (confirm.value) {
	if (!appName) {
		const response = await prompts({
			type: "text",
			name: "value",
			message: "Enter app name",
		});
		appName = response.value;
	}

	// Construct the command string with all secrets
	let command = "fly secrets set";
	for (const [key, value] of Object.entries(secretValues)) {
		command += ` ${key}="${value}"`;
	}

	if (appName) {
		command += ` --app ${appName}`;
	}

	const child = spawn(command, {
		shell: true,
	});

	child.stdout.on("data", (data) => {
		process.stdout.write(data);
	});

	child.stderr.on("data", (data) => {
		process.stdout.write(data);
	});

	child.on("close", (code) => {
		if (code === 0) {
			console.log("Fly secrets set!");
		} else {
			console.log(`Command exited with code ${code}`);
		}
		process.exit(code as number);
	});
} else {
	console.log("Aborted");
}

if (!appName) {
	console.log("Please provide app name with --app or -a flag");
	process.exit(1);
}
