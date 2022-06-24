// 

let input = 1
let level = 9

if (input == 1) {
    console.log(`Input: ${input}, Level: ${level}`);
    console.log(`First Pyramid of level ${level}`);
    for (let asterisk = 1; asterisk <= level; asterisk++) {
        
        for (let nested = 0; nested < asterisk; nested++) {
            process.stdout.write("*");
        }
        console.log('')
    }
} else if (input == 2) {
    console.log(`Input: ${input}, Level: ${level}`);
    console.log(`Second Pyramid of level ${level}`);
    for (let asterisk = level; asterisk > 0; asterisk--) {

        for (let nested = asterisk; nested > 0; nested--) {
            process.stdout.write("*");
        }
        console.log("");
    }
} else if (input == 3) {
    console.log(`Input: ${input}, Level: ${level}`);
    console.log(`Third Pyramid of level ${level}`);
    let counter = 1;
    for (let asterisk = level; asterisk > 0; asterisk--) {
        for (let space = 0; space < level - counter; space++) {
            process.stdout.write(" ");
        }
        for (let star = 0; star < counter; star++) {
            process.stdout.write("*");
        }
        console.log("");
        counter++;
    }
} else {
    console.log(`Input: ${input}, Level: ${level}`);
    console.log(`Fourth Pyramid of level ${level}`);
    let counter = 0;
    for (let asterisk = level; asterisk > 0; asterisk--) {
        for (let space = 0; space < counter; space++) {
            process.stdout.write(" ");
        }
        for (let star = level; star - counter > 0; star--) {
            process.stdout.write("*");
        }
        console.log("");
        counter++;


    }
}