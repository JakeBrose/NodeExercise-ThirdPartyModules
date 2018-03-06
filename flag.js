const chalk = require('chalk');
const log = console.log;


let f = ({a,b,c,d}={
    "a":chalk.bgBlue("   "),
    "b":chalk.bgRed("                                      "),
    "c": chalk.bgWhite("                                      "),
    "d":chalk.bold.white.bgBlue(" * ")
})

log(f.b);