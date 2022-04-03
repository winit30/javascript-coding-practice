// capitalize
function capitalize(str) {
  let sentenceArr = str.split(" ");

  sentenceArr = sentenceArr.map(element => {
     return element[0].toUpperCase() + element.slice(1);
  });

  return sentenceArr.join(" ");
}

//console.log(capitalize("my name is vineet"));
