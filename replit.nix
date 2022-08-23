{ pkgs }: {
    deps = [
        pkgs.nodejs-16_x
        pkgs.python39Packages.pip
        pkgs.python39Full
        pkgs.wget
        pkgs.bashInteractive
    ];
}