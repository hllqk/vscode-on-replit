#!/usr/bin/env sh
#
# Copyright (c) Microsoft Corporation. All rights reserved.
#
VSROOT="$(dirname "$(dirname "$(dirname "$(readlink -f "$0")")")")"
ROOT="$(dirname "$(dirname "$VSROOT")")"

APP_NAME="code-server"
VERSION="1.70.1"
COMMIT="2062a59ca1a586d8a6e7bf483841085a94c440a4"
EXEC_NAME="code-server"
CLI_SCRIPT="$VSROOT/out/server-cli.js"
"$ROOT/node" "$CLI_SCRIPT" "$APP_NAME" "$VERSION" "$COMMIT" "$EXEC_NAME" "--openExternal" "$@"
