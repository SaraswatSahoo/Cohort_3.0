const { program } = require("commander");
const fs = require("fs");

program
    .name('counter')
    .description('count number of words')
    .version('0.8.0');

program
    .command('count')
    .description('count number of words')
    .argument('<file>','file to count')
    .action((file) => {
        fs.readFile(file, "utf8", (err, data) => {
            if(err){
                console.log(err);
            }else{
                const words = data.split(' ').length;
                console.log(`There are ${words} words in ${file}`);
            }
        })
    })

program.parse();
