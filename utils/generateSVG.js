function svgSection() {
    return "<svg version=\"1.1\" width=\"300\" height=\"200\" xmlns=\"http://www.w3.org/2000/svg\">";
}

function shapeSection(shape, color) {

    if (shape == "circle") {
        return `<circle cx=\"150\" cy=\"100\" r=\"80\" fill=\"${color}\" />`;
    }
    else if (shape == "square") {
        return `<rect x=\"70\" y=\"30\" width="160" height="160" fill="${color}"/>`
    }
    else {
        return `<polygon points="150, 20 60, 180 240, 180"  fill="${color}" />`
    }
}

function textSection(text, color) {
    return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
}


function generateSVG(data) {
   return `${svgSection()}
   ${shapeSection(data.shape, data.shapeColor)}
   ${textSection(data.text, data.textColor)}
   </svg>`

}




module.exports = generateSVG;