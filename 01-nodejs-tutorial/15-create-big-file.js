const { writeFileSync } = require('fs');

for (i = 0; i <= 1000; i++) {
    writeFileSync('./content/big.txt', `hell world ${i} \n`, {
        flag: 'a'
    }
    );

}