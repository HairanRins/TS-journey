function sumEvenNumbers(arr: number[]): number {
    let sum: number = 0;

    for (let num of arr) {
        if (num % 2 === 0) {
            sum += num;
        }
    }

    return sum;
}

// Exemple d'utilisation de la fonction 
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("La somme des nombres pairs est : ", sumEvenNumbers(numbers));
