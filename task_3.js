//Функція пошуку найбільшого спільного дільника
function NSD(a, b)
{
    if (b > 0)
    {
        let k = a % b;
        return NSD(b, k);
    }
    else
        return a < 0 ? -a : a;

}

console.log("Найбільший спільний дільник 140 і 36 = " + NSD(140, 36));
console.log("Найбільший спільний дільник 33 і 87 = " + NSD(33, 87));
console.log("Найбільший спільний дільник 45 і 24 = " + NSD(45, 24));