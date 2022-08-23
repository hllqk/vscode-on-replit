{ pkgs }: {
    deps = [
        pkgs.python39Packages.pip
        pkgs.python39Full
        pkgs.wget
        pkgs.bashInteractive
    ];
}