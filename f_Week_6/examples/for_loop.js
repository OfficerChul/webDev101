// increasing i
// i++ == i = i + 1
// ++i, i++
let q = 0;
console.log(`q = ${++q}`);
console.log(`q = ${q}`);

for (let i = 0; i <= 5; i++) {
    console.log(`i = ${i}`);
    console.log('hellow world');
}

// decreasing i
for (let i = 10; i > 0; i--) {
    console.log('web programming');
}

// print without line feeds (new line)
for (let ie = 0; ie < 5; ie++) {
    process.stdout.write("Welcome to Tutorial!\n");
}

// nested for loop
for (let i = 0; i < 3; i++) {
    process.stdout.write('Yes!\n')
    for (let j = 0; j < 4; j++) {
        process.stdout.write('No!\n');
        for (let k = 5; k > 2; k--) {
            process.stdout.write('What\n');
        }
    }
}

// practice for hw
let level = 5
for (let asterisk = 1; asterisk <= level; asterisk++) {
    
    for (let nested = 0; nested < asterisk; nested++) {
        process.stdout.write("*");
    }
    console.log('');
}