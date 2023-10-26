# fly-secrets

A simple utility to automatically update your secrets on [fly.io](https://fly.io) based on your `.env` file.

## Description

`fly-secrets` reads your `.env` file in the current directory and updates your secrets on fly.io. Only the secrets specified after the `# FLY SECRETS` comment in the `.env` file will be considered for updating.

This tool makes it easy to manage and synchronize your application secrets between your local environment and your fly.io deployment.

## Installation

You can use the package without installing it globally using `npx`:

```bash
npx fly-secrets
```

## Usage

1. Update your `.env` file with the secrets you want to synchronize with fly.io. Make sure to place them after the `# FLY SECRETS` comment:

```env
SOME_LOCAL_ONLY_SECRET=asdf
# FLY SECRETS
SOME_NEEDED_SECRET=real_secret
ANOTHER_NEEDED_SECRET=another_secret
```

In the above example, only `SOME_NEEDED_SECRET` and `ANOTHER_NEEDED_SECRET` will be added to fly.io.

2. Run the command:

```bash
npx fly-secrets -a <your-app-name>
```

Replace `<your-app-name>` with the name of your fly.io application.

## Example

```bash
npx fly-secrets -a my-app-name
```

This will update the secrets of the `my-app-name` application on fly.io based on the `.env` file in the current directory.

## Contributing

If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

[Github](https://github.com/swalker326/fly-secrets)
