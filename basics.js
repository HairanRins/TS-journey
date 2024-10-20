function sumEvenNumbers(arr) {
    var sum = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        if (num % 2 === 0) {
            sum += num;
        }
    }
    return sum;
}
// Exemple d'utilisation de la fonction 
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("La somme des nombres pairs est : ", sumEvenNumbers(numbers));
