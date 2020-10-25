export default function reverse (n) {
    var rev = "";
    number = parseInt (n);
    for (;number > 0;) {
        rev += number % 10;
        number = Math.floor (number / 10)
    }
    return rev;
}
