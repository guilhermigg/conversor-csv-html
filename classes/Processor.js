class Processor{
    static async Process(data){
        var x = data.split('\r\n')
        var rows = []
        x.forEach(row => {
            var arr = row.split(',');
            rows.push(arr)
        });

        return rows;
    }
}

module.exports = Processor;