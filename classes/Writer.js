const fs = require('fs');
const {promisify} = require('util');

class Writer{
    constructor(){
        this.writer = promisify(fs.writeFile)
    }

    async Write(filepath, html){
        const newName = filepath.substr(0, filepath.lastIndexOf(".")) + ".html";
        try{
            return await this.writer(newName, html)
        }catch(error){
            console.error(error)
        }
    }

}

module.exports = new Writer;