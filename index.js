const Reader = require('./classes/Reader');
const Processor = require('./classes/Processor');
const Table = require('./classes/Table');
const HTMLparser = require('./classes/HtmlParser');
const Writer = require('./classes/Writer');
const PDFWriter = require('./classes/PDFWriter');

// Função principal 
async function main(filepath){
    const data = await Reader.Read(filepath);
    const processedData = await Processor.Process(data);
    const table = new Table(processedData);

    const html = await HTMLparser.Parse(table);
    await Writer.Write(filepath, html).then(async ()=>{
        console.log('HTML Gerado com Sucesso!');
        await PDFWriter.WritePDF(filepath, html);
        console.log('PDF Gerado com Sucesso');
    })
}

if(process.argv.length<3){
    console.log('Informe o caminho para o arquivo .csv')
}else{
    main(process.argv[2])
}
