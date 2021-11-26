var oneNum = +prompt ('введите первое число');
var twoNum = +prompt ('введите второе число');
var treeNum = +prompt ('введите третье число');

if (oneNum > twoNum && oneNum < treeNum || oneNum > treeNum && oneNum < twoNum) {
    alert('среднее число' + oneNum);
}else if (twoNum > oneNum && twoNum < treeNum || twoNum > treeNum && twoNum < oneNum) {
    alert('среднее число' + twoNum)
}else if (oneNum === twoNum && oneNum > treeNum || oneNum < treeNum) {
    alert('среднее число' + ((oneNum + twoNum + treeNum) / 3));
}else if (oneNum === treeNum && oneNum > twoNum || oneNum < twoNum) {
    alert('cреднее число: ' + ((oneNum +twoNum + treeNum) / 3));
} else if (twoNum === treeNum && twoNum > oneNum || twoNum < oneNum) {
    alert('cреднее число: ' + ((oneNum + twoNum + treeNum) / 3));
}else if (oneNum === twoNum && oneNum === treeNum) {
    alert('cреднее число: ' + ((oneNum +twoNum +treeNum) / 3));
}else {
    alert('что-то пошло не так');
}