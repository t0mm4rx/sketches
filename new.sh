#!/bin/sh

if [[ $# -eq 0 ]] ; then
    echo 'Missing sketch name'
    exit 0
fi

mkdir sketch_$1 && cd sketch_$1

echo "<html>\n<head>\n\t<title>Sketch $1</title>\n\t<meta charset=\"UTF-8\">\n\t<style>body, html { margin: 0; padding: 0; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; flex-direction: column;}</style>\n</head>\n\n<body></body>\n\n<script src=\"../p5.min.js\"></script>\n<script src=\"../interpolation.min.js\"></script>\n<script src=\"sketch.js\"></script>\n</html>" > index.html
echo "var font;\n\nfunction preload() {\n\tfont = loadFont('../fonts/PlayfairDisplay-Regular.ttf');\n}\n\nfunction setup() {\n\tcreateCanvas(800, 800);\n\tthis.canvas.style.cursor = 'none';\n\ttextFont(font);\n}\n\nfunction draw() {\n\tblendMode(BLEND);\n\tbackground(0);\n\n\tblendMode(DIFFERENCE);\n\tellipseMode(CENTER, CENTER);\n\tfill(255);\n\tnoStroke();\n\tellipse(mouseX, mouseY, 20, 20);\n}" > sketch.js

cd ../
echo "* [$1](https://t0mm4rx.github.io/sketches/sketch_$1/)" >> ReadMe.md
