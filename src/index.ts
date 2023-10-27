#!/usr/bin/env bun

import { spawn } from "child_process";
import { readFileSync } from "fs";
import prompts from "prompts";
import { existsSync } from "fs";
import toml from "@iarna/toml";

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
		const tomlFile: string = "./fly.toml";
		if (existsSync(tomlFile)) {
			const tomlContent: string = readFileSync(tomlFile, "utf8");
			const parsedToml = toml.parse(tomlContent);
			if (parsedToml.app) {
				const detectedAppName = parsedToml.app as string;
				if (!detectedAppName) {
					const setAppName = await prompts({
						type: "text",
						name: "value",
						message: "Please provide app name",
					});
					appName = setAppName.value;
				}
				const confirmTomlAppName = await prompts({
					type: "confirm",
					name: "value",
					message: `fly.toml detected, would you like to use ${detectedAppName} detected in that file?`,
					initial: true,
				});
				if (confirmTomlAppName.value) {
					appName = detectedAppName;
				} else {
					const setAppName = await prompts({
						type: "text",
						name: "value",
						message: "Please provide app name",
					});
					appName = setAppName.value;
				}
			}
		}
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
