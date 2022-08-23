#!/usr/bin/env bash
#
# Copyright (c) Microsoft Corporation. All rights reserved.
#
realdir() {
	SOURCE=$1
	while [ -h "$SOURCE" ]; do
		DIR=$(dirname "$SOURCE")
		SOURCE=$(readlink "$SOURCE")
		[[ $SOURCE != /* ]] && SOURCE=$DIR/$SOURCE
	done
	echo "$( cd -P "$(dirname "$SOURCE")" >/dev/null 2>&1 && pwd )"
}

VSROOT="$(dirname "$(dirname "$(realdir "$0")")")"
ROOT="$(dirname "$(dirname "$VSROOT")")"

APP_NAME="code-server"
VERSION="1.70.1"
COMMIT="2062a59ca1a586d8a6e7bf483841085a94c440a4"
EXEC_NAME="code-server"
CLI_SCRIPT="$VSROOT/out/server-cli.js"
"$ROOT/node" "$CLI_SCRIPT" "$APP_NAME" "$VERSION" "$COMMIT" "$EXEC_NAME" "--openExternal" "$@"
