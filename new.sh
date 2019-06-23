#!/bin/sh

if [[ $# -eq 0 ]] ; then
    echo 'Missing sketch name'
    exit 0
fi

mkdir sketch_$1 && cd sketch_$1

echo -e "<html>\n<head>\n\t<title>Sketch $1</title>\n\t<meta charset=\"UTF-8\">\n\t<style>body, html { margin: 0; padding: 0; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; flex-direction: column;}</style>\n</head>\n\n<body></body>\n\n<script src=\"../p5.min.js\"></script>\n<script src=\"../interpolation.min.js\"></script>\n<script src=\"sketch.js\"></script>\n</html>" > index.html
echo -e "function setup() {\n\tcreateCanvas(800, 800);\n}\n\nfunction draw() {\n\tbackground(50, 50, 70);\n}" > sketch.js

cd ../
echo -e "* [$1](https://t0mm4rx.github.io/sketches/sketch_$1/)" >> ReadMe.md
