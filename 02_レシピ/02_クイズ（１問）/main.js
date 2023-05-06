const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const button = document.getElementById("button")
const feedback = document.getElementById("feedback")

// クイズの内容
const quiz = {
  text: "この星の名前は何でしょう？",
  image: "Ganymede.jpg",
  choices: [
    {
      text: "ゴリアテ",
      feedback:
        "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。",
    },
    {
      text: "ゼニガメ",
      feedback: "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。",
    },
    {
      text: "ガニメデ",
      feedback: "正解！ガニメデは、木星の第三惑星だよ！",
    },
    {
      text: "地球",
      feedback: "残念！！！！！",
    },
  ],
}

// choiceNumber番目の選択肢を選択
const choose = function (choiceNumber) {
  // フィードバックを表示
  feedback.textContent = quiz.choices[choiceNumber].feedback
}

const reloadQuiz = function () {
  quizText.textContent = "Q. " + quiz.text
  quizImage.src = "./images/" + quiz.image

  // ボタンの生成
  const buttonMake = function () {
    for (let i = 0; i < quiz.choices.length; i++) {
      const btn = document.createElement("button")
      // ボタンの内容
      btn.innerHTML = quiz.choices[i].text
      // イベントハンドラ定義
      btn.onclick = function () {
        choose(i)
      }
      // HTMLのbodyにbutton要素を追加
      button.append(btn)
    }
  }
  buttonMake()
}

reloadQuiz()
