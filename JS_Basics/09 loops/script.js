let size = 4;
for (let row = 0; row < size; row++) {
    if (row % 2 == 0) {
        for (let column = 0; column < size; column++) {
            process.stdout.write("X ");
        }
    } else {
        for (let column = 0; column < size; column++) {
            process.stdout.write("O ");
        }
    }
    console.log("");
}