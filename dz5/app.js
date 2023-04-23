const arr = ['фронтенд', 'апрель', 'урок','привет','спасибо','15июля','мама','Айдар']

function reversing(mass){
  let answer = []
  for(j of mass){
    var a = [];
    for (i = 0; i < j.length; i++){
      a[i] = j[(j.length - 1) - i]
    }
    answer.push(a.join(''))
  }
  console.log(answer)
}
reversing(arr)

function average(...numb){
  console.log(numb);
}
average(1,2,3,4,5);
const array = [1,2,3,4,5]
const getAverage = (...numb) => {
  let sum = 0;
  for (let i = 0; i < numb.length; i += 1) {
    sum += numb[i];
  }
  return sum/numb.length;
};
console.log(getAverage(1,2,3,4,5));
