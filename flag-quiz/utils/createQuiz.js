const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  // The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min) + min) 
}

const createQuiz = (countries) => {
  const quiz = []
  
  countries.forEach((c, index) => {
    const answer = { name: c.name.common, flag: c.flags.png }
    const choices = [{ name: c.name.common, flag: c.flags.png }]

    const indexesUsed = [index]
    while (choices.length < 4) {
      let randomInt = getRandomInt(0, countries.length)
      while (indexesUsed.includes(randomInt)) {
        randomInt = getRandomInt(0, countries.length)
      }
      choices.push({ 
        flag: countries[randomInt].flags.png,
        name: countries[randomInt].name.common, 
      })
    }

    quiz.push({ answer, choices })
  })

  return quiz
}

export default createQuiz