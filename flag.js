const chalk = require('chalk');
const log = console.log;
let chooseFlag = process.argv[2]

//////////////////////////////////////////////////////////////////////////////
let rowOne = chalk.white.bgBlue(' *  *  *  *  *  ', chalk.bgRed('                                \n'))
let rowTwo = chalk.white.bgBlue('  *  *  *  *  * ', chalk.bgWhite('                                \n'))
let rowThree = chalk.bgRed('                                                 \n')
let rowFour = chalk.bgWhite('                                                 \n')

let americanFlag = [
    rowOne, 
    rowTwo, 
    rowOne, 
    rowTwo, 
    rowOne, 
    rowTwo, 
    rowOne, 
    rowFour, 
    rowThree, 
    rowFour, 
    rowThree, 
    rowFour, 
    rowThree
];


function drawRows(row) {
    process.stdout.write(row);
}

function drawAmericanFlag() {
    americanFlag.forEach(row => {
        drawRows(row)
    })
}
if (chooseFlag.toLowerCase() === 'american') {
    drawAmericanFlag()
} else {
    log('Please choose a flag')
}
////////////////////////////////////////////////////////////////////////
let yjr1 = chalk.bgWhite('      ', chalk.bgGreen('         '), chalk.bgWhite('      \n')); //8
let yjr2 = chalk.bgWhite('    ', chalk.bgGreen('             '),chalk.bgWhite('    \n')); //10
let yjr3 = chalk.bgWhite('  ',chalk.bgGreen('                 '),chalk.bgWhite('  \n'));//12
let yjr4 = chalk.bgWhite(' ',chalk.bgGreen('   '),chalk.bgWhite('           '),chalk.bgGreen('   '),chalk.bgWhite(' \n'))//14
let yjr5 = chalk.bgWhite(' ',chalk.bgGreen('        '),chalk.bgWhite(' '),chalk.bgGreen('        '),chalk.bgWhite(' \n'))//16

let yuJingFlag = [
    yjr1,
    yjr2,
    yjr3,
    yjr4,
    yjr5,
    yjr5,
    yjr5,
    yjr4,
    yjr5,
    yjr5,
    yjr5,
    yjr4,
    yjr3,
    yjr2,
    yjr1  
]

function drawYuJingFlag() {
    yuJingFlag.forEach(row => {
        drawRows(row)
    })
}
if (chooseFlag.toLowerCase() === 'yujing') {
    drawYuJingFlag()
} else {
    log('Please choose a flag')
}
///////////////////////////////////////////////////////////////////////




