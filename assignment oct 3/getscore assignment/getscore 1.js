function getGrade(score) {
    let grade;
    // Write your code here
    grade = score <= 5 ?  console.log('F')
        : score <= 10 ? console.log('E')
            : score <= 15 ? console.log('D')
                : score <= 20 ? console.log('C')
                    : score <= 25 ? console.log('B')
                        : score <= 30 ? console.log('A') : '';

    return grade;
}
// console.log(getGrade(10))

const getInputAndDisplay = () => {
    console.log("Please enter the score");
    process.stdin.on("data", (data) => {
    const score = data;
    getGrade(score);
    process.exit();
    });
    };

    getInputAndDisplay();