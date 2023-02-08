

let randomString = "There was no ring on his finger. That was a good sign although far from proof that he was available. Still, it was much better than if he had been wearing a wedding ring on his hand. She glanced at his hand a bit more intently to see if there were any tan lines where a ring may have been, and he's simply taken it off. She couldn't detect any which was also a good sign and a relief. The next step would be to get access to his wallet to see if there were any family photos in it. The clowns had taken over. And yes, they were literally clowns. Over 100 had appeared out of a small VW bug that had been driven up to the bank. Now they were all inside and had taken it over. "


const stringArrayer = (string) => {

     let arrayOfStrings = string.split(' ')
     return arrayOfStrings
}

let arrayOfWords = stringArrayer(randomString)

//console.log('12 array of words ' + arrayOfWords)





const sentenceGenerator = (inputNumber) => {

let sentenceArray = [];
    for (i = 0 ; i <= inputNumber ; i++){
    let randomNumber = Math.floor(Math.random() * arrayOfWords.length)

    sentenceArray.push(arrayOfWords[randomNumber])

    };

    let completeString =  sentenceArray.join(' ')

    return completeString

}


console.log(sentenceGenerator(10) + ' '+ sentenceGenerator(5) +' '+ sentenceGenerator(3))