//Функція перетворення стрічки в масив слів
function StringToWord(array)
{
    //Майбутній масив слів
    let words = [];
    let word = "";
    //Цилк розбиття стрічки в масив слів
    for (let i = 0; i < array.length + 1; i++)
    {
        //Перевірка на пробіл
        if (array[i] === ' ' || i === array.length)
        {
            words.push(word);
            word = "";
        }
        else
            word += array[i];
    }
    //Повернення масиву слів
    return words;
}


let str1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry";
let str2 = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout";
let str3 = "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested";

console.log("Стрічки : \n" + str1 + "\n" + str2 + "\n"+ str3);
console.log("Масив слів із стрічок : \n" + StringToWord(str1) + "\n" + StringToWord(str2) + "\n"+ StringToWord(str3));