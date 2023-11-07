//1. const array = [1,2,3,4,5]. Yeni array yaradın və bu array-in əksinə düzülmüş formada olsun (e.x [5,4,3,2,1])

const array = [1, 2, 3, 4, 5]

console.log(array);

const arrayters = []

for (let i = array.length - 1; i >= 0; i--) {

    arrayters.push(array[i])

} console.log(arrayters);




//2. const strArray = ["cat","mouse","panter","chicken"] bu array-dən "cat" sözünü silin və sonuna "bird" əlavə edin.

const strArray = ["cat", "mouse", "panter", "chicken"]

console.log(strArray);

strArray.shift();
strArray.push("bird");
console.log(strArray);


//3. const array = [1,2,3,4,5]. Bu ədədlərin yanına kvadrat-ların əlavə edin. (e.x [1,2,3,4,5,1,4,9,16,25])

const arraykvadrat = [1, 2, 3, 4, 5]
console.log(arraykvadrat);
for (i = 0; i < 5; i++) {
    arraykvadrat.push(arraykvadrat[i] ** 2);

} console.log(arraykvadrat);

//4. Ədədlərdən ibarət array verilir. Array-də olan cüt ədədləri ekrana çıxardın.(Əlavə: yeni array-ə əlavə edin cüt ədədləri)


const arrayeded = [1, 2, 3, 4, 11, 23, 44, 45, 72]
console.log(arrayeded);
const arraycut = []

for (let i = 0; i <= arrayeded.length; i++) {

    if (arrayeded[i] % 2 == 0) {

        console.log(arrayeded[i]);
        arraycut.push(arrayeded[i])

    }


} console.log(arraycut);





