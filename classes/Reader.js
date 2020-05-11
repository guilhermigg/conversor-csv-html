const fs = require('fs');
const { promisify } = require('util')

class Reader{
    constructor(){
        this.reader = promisify(fs.readFile);
    }
    
    async Read(filepath){ 
        try{
            return await this.reader(filepath, 'utf-8')
        }catch(error){
            return undefined;
        }
    }

}

module.exports = new Reader;