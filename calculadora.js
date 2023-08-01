function calculadora (n1 , n2 , op) {
    if (op == 1) {
        return n1 + n2;
    }
    else if (op == 2) {
            return n1 - n2;
        }
        else if (op == 3) {
            return n1 * n2;
        }
        else if (op == 4) {
            return n1 / n2;
        }
        else {
            return 0;
        }
}

let calc = calculadora(20,4,4)

console.log(calc) 