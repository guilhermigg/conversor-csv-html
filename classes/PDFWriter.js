const pdf = require('html-pdf');

class PDFWriter{
    static WritePDF(filepath, html){
        const newName = filepath.substr(0, filepath.lastIndexOf(".")) + ".pdf";
        pdf.create(html, {}).toFile(newName, err => {if(err) console.log(err)})
    }
}

module.exports = PDFWriter;