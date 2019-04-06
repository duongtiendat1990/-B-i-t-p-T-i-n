if (window.File && window.FileReader && window.FileList && window.Blob) {
    let englishDictionary=[];
    let vietnameseDictionary=[];
    function chooseEnglishDictionary() {
        var file = document.querySelector('#chooseEnglish').files[0];
        var reader = new FileReader();
        var textFile = /text.*/;
        var str;
        if (file.type.match(textFile)) {
            reader.onload = function (event) {
                str = event.target.result;
                lines = str.split(/\n/);
                for (let i = 0; i<lines.length;i++) {
                    englishDictionary.push(lines[i].trim())
                }
            }
        }
        reader.readAsText(file);
    }
    function chooseVietnameseDictionary() {
        var file = document.querySelector('#chooseVietnamese').files[0];
        var reader = new FileReader();
        var textFile = /text.*/;
        var str;
        if (file.type.match(textFile)) {
            reader.onload = function (event) {
                str = event.target.result;
                lines = str.split(/\n/);
                for (let i = 0; i<lines.length;i++) {
                    vietnameseDictionary.push(lines[i].trim())
                }
            }
        }
        reader.readAsText(file);
    }
    function lookupVietnameseMeaning() {
        let englishWord = prompt('Enter English Word').toString();
        document.getElementById('englishWord').value = englishWord;
        let result;
        let sign = false;
        for (let i=0;i<englishDictionary.length;i++) {
            if (englishWord === englishDictionary[i] ) {
                result = vietnameseDictionary[i];
                sign = true;
            }
        }
        if (!sign)  result = 'The word you entered is not match English Dictionary';
        document.getElementById('vietnameseWord').value = result;
    }
    function lookupEnglishMeaning() {
        let vietnameseWord = prompt('Enter Vietnamese Word').toString();
        document.getElementById('vietnameseWord').value = vietnameseWord;
        let result;
        let sign = false;
        for (let i=0;i<vietnameseDictionary.length;i++) {
            if (vietnameseWord === vietnameseDictionary[i]) {
                result = englishDictionary[i];
                sign = true;
            }
        }
        if (!sign) result = 'The word you entered is not match Vietnamese Dictionary';
        document.getElementById('englishWord').value = result;
    }
} else {
    alert("Your browser is too old to support HTML5 File API");
}
