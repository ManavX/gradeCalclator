var grades = [NaN, NaN, NaN, NaN];
var weights = [NaN, NaN, NaN, NaN];
var inputs = document.getElementsByTagName('input');

for (var k = 0; k < inputs.length; k++) {
    if (inputs[k].type == 'number') {
        inputs[k].oninput = updatePercent;
        if (inputs[k].id == 'weight') {
            inputs[k].oninput = updateWeight;
        }
    }
}

function updatePercent(a) {
    var tableRows = a.target.parentElement.parentElement;
    var cells = tableRows.getElementsByTagName('td');
    var gradeInput = cells[3].getElementsByTagName('input');
    var grade = gradeInput[0].value / gradeInput[1].value;

    grades[tableRows.id] = grade;

    if (grade < 0 || isNaN(grade)) {
        cells[4].innerHTML = 'Not a grade';
    } else {
        cells[4].innerHTML = grade.toFixed(4) * 100 + "%";
    }
}

function getMean() {
    var total = 0;
    var counter = 0;
    for (var k = 0; k < grades.length; k++) {
        if (grades[k] >= 0 && !isNaN(grades[k])) {
            total += grades[k];
            counter++;
        }
    }
    document.getElementById("result").innerHTML = (total / counter).toFixed(4) * 100 + '%';
}

function updateWeight(a) {
    var tableRows = a.target.parentElement.parentElement;
    var weightCells = tableRows.getElementsByTagName('td');
    var weightInput = weightCells[2].getElementsByTagName('input');
    var weight = weightInput[0].value;
    weights[tableRows.id] = weight;
}

function getWeightedMean() {
    var totalweight = 0;
    var weightgrade = 0;
    for (var k = 0; k < weights.length; k++) {
        if (weights[k] >= 0) {
            if (!isNaN(weights[k])) {
                if (!isNaN(grades[k])) {
                    totalweight += parseInt(weights[k]);
                    weightgrade += (grades[k]) * (weights[k]);
                }
            }
        }
    }
 
    if (totalweight != 0) {
        document.getElementById('result').innerHTML = (weightgrade / totalweight).toFixed(4) * 100 + '%';
    }
    else {
        document.getElementById('result').innerHTML = "No weight submitted";
    }

// return ((weightgrade / totalweight).toFixed(4) * 100);
}

// function getLetterGrade() {
//     if (getWeightedMean() >= 95) {
//         document.getElementById('lettergrade').innerHTML = "Letter Grade: A+";
//     }
//     if ( getWeightedMean() >= 87 && getWeightedMean() < 95)  {
//         document.getElementById('lettergrade').innerHTML = "Letter Grade: A";
//     }
//     if ( getWeightedMean() >= 82 && getWeightedMean() < 87)  {
//         document.getElementById('lettergrade').innerHTML = "Letter Grade: A-";
//     }
//     if ( getWeightedMean() >= 78 && getWeightedMean() < 82)  {
//         document.getElementById('lettergrade').innerHTML = "Letter Grade: B+";
//     }
//     if ( getWeightedMean() >= 74 && getWeightedMean() < 78)  {
//         document.getElementById('lettergrade').innerHTML = "Letter Grade: B";
//     }
//     if ( getWeightedMean() >= 70 && getWeightedMean() < 74)  {
//         document.getElementById('lettergrade').innerHTML = "Letter Grade: B-";
//     }
//     if ( getWeightedMean() >= 65 && getWeightedMean() < 70)  {
//         document.getElementById('lettergrade').innerHTML = "Letter Grade: C+";
//     }
//     if ( getWeightedMean() >= 60 && getWeightedMean() < 65)  {
//         document.getElementById('lettergrade').innerHTML = "Letter Grade: C";
//     }
//     if ( getWeightedMean() >= 55 && getWeightedMean() < 60)  {
//         document.getElementById('lettergrade').innerHTML = "Letter Grade: C-";
//     }
//     if ( getWeightedMean() >= 50 && getWeightedMean() < 55)  {
//         document.getElementById('lettergrade').innerHTML = "Letter Grade: D";
//     }
//     if ( getWeightedMean() < 50 )  {
//         document.getElementById('lettergrade').innerHTML = "Letter Grade: D";
//     }
//     else {
//         document.getElementById('lettergrade').innerHTML = "No Grades Provided";
//     }
// }