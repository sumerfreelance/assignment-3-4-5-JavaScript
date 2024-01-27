function calculateGrade(marks) {
    if (marks >= 90) {
        return 'A';
    } else if (marks >= 80) {
        return 'B';
    } else if (marks >= 70) {
        return 'C';
    } else if (marks >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

function createMarksheet() {
    var subject1 = parseFloat(prompt("Enter marks for Subject 1:"));
    var subject2 = parseFloat(prompt("Enter marks for Subject 2:"));
    var subject3 = parseFloat(prompt("Enter marks for Subject 3:"));

    var totalMarks = subject1 + subject2 + subject3;
    var averageMarks = totalMarks / 3;

    var grade1 = calculateGrade(subject1);
    var grade2 = calculateGrade(subject2);
    var grade3 = calculateGrade(subject3);

    var overallGrade = calculateGrade(averageMarks);

    console.log("------------- Marksheet -------------");
    console.log("Subject 1: Marks - " + subject1 + ", Grade - " + grade1);
    console.log("Subject 2: Marks - " + subject2 + ", Grade - " + grade2);
    console.log("Subject 3: Marks - " + subject3 + ", Grade - " + grade3);
    console.log("-------------------------------------");
    console.log("Total Marks: " + totalMarks);
    console.log("Average Marks: " + averageMarks.toFixed(2));
    console.log("Overall Grade: " + overallGrade);
}

createMarksheet();