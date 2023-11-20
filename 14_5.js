function showHellomessage(_notificationMassages) {
    document.write(_notificationMassages.start.hello, "<br>");
}

function StartTrening(_words, _result) {
    for (let i = 0; i < _words.length; i++) {
        let userAnswer = prompt(_words[i].original);
        document.write(userAnswer === _words[i].translation, "<br>");
        if (userAnswer === _words[i].translation) {
            _result.correctAnswersCount = _result.correctAnswersCount + 1;
        }
        if (userAnswer === words[i].translation) {
            rightAnswers.push(userAnswer);
        } else {
            wrongAnswers.push(userAnswer);
        }
    }

}

function getPercentage(_result, _words) {
    return _result.correctAnswersCount / _words.length * 100;
}

function showResult(_result, _words, _setting, _notificationMassages) {
    const userCorrectAnswersPercent = getPercentage(_result, _words);

    if (userCorrectAnswersPercent > _setting.correctAnswersMinPercent) {
        document.write(_notificationMassages.result.finishSuccess, "<br>");
    } else {
        document.write(_notificationMassages.result.finishUnsuccess, "<br>");
    }
    document.write("Правильные ответы: ", rightAnswers, " (", rightAnswers.length, ")", "<br>");
    document.write("Неправильные ответы: ", wrongAnswers, " (", wrongAnswers.length, ")", "<br>");
}

const words = [
    {
        original: "Wassup",
        translation: "Здарова"
    },
    {
        original: "Bye",
        translation: "Покеда"
    },
    {
        original: "Programmer",
        translation: "Программист"
    },
    {
        original: "Laptop",
        translation: "Ноутбук"
    },
]

const notificationMassages = {
    start: {
        hello: "Hello man. You can learn English. Good Luck"
    },
    result: {
        finishSuccess: "Молодец",
        finishUnsuccess: "Старайся лучше"
    }

}

const setting = {
    correctAnswersMinPercent: 50
}

const result = {
    correctAnswersCount: 0
}

const rightAnswers = [];
const wrongAnswers = [];

// ------- proga --------------

showHellomessage(notificationMassages);
StartTrening(words, result);
showResult(result, words, setting, notificationMassages);

