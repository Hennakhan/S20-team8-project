{ pkgs ? import <nixpkgs> {}, pkgs_unstable ? import <nixpkgs-unstable> {}, pythonPackages ? pkgs.python3Packages }:
let
  kernels = [];
  additionalExtensions = [
    "@jupyter-widgets/jupyterlab-manager"
  ];
in
pkgs.mkShell rec {
  buildInputs = [
    # Base Packages
    pythonPackages.jupyterlab pkgs.nodejs
  ] ++
  # Python deps
  [
    pythonPackages.matplotlib
    pythonPackages.numpy
    pythonPackages.pandas
    pythonPackages.ipywidgets
    pythonPackages.scikitlearn
    pythonPackages.scipy
    pythonPackages.seaborn
    pythonPackages.tqdm
    pythonPackages.tensorflow
    pkgs_unstable.python3Packages.Keras
  ] ++
  # Kernels
  kernels;

  shellHook = ''
    TEMPDIR=$(mktemp -d -p /tmp)
    mkdir -p $TEMPDIR
    cp -r ${pythonPackages.jupyterlab}/share/jupyter/lab/* $TEMPDIR
    chmod -R 755 $TEMPDIR
    echo "$TEMPDIR is the app directory"

    # kernels
    export JUPYTER_PATH="${pkgs.lib.concatMapStringsSep ":" (p: "${p}/share/jupyter/") kernels}"

    # labextensions
    ${pkgs.stdenv.lib.concatMapStrings
         (s: "jupyter labextension install --no-build --app-dir=$TEMPDIR ${s}; ")
         (pkgs.lib.unique
           ((pkgs.lib.concatMap
               (d: pkgs.lib.attrByPath ["passthru" "jupyterlabExtensions"] [] d)
               buildInputs) ++ additionalExtensions))  }
    jupyter lab build --app-dir=$TEMPDIR
    # start jupyterlab
    jupyter lab --app-dir=$TEMPDIR
  '';
}
