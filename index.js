function perevod()
{
    var input = document.getElementById('kirillica');
    var inputString = input.value;
    var resultString = "";
    var cyrArray = ['а','б','в','г','д','е','ё','ж','з','и','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ъ','ы','ь','э','ю','я'];
    var latArray = ['a','b','v','g','d','e','jo','ž','z','i','j','k','l','m','n','o','p','r','s','t','u','f','h','c','č','š','ş','’','y','ǐ','ě','ju','ja']
    var cyrArray2 = ['А','Б','В','Г','Д','Е','Ё','Ж','З','И','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ъ','Ы','Ь','Э','Ю','Я'];
    var latArray2 = ['A','B','V','G','D','E','Jo','Ž','Z','I','J','K','L','M','N','O','P','R','S','T','U','F','H','C','Č','Š','Ş','','Y','','Ě','Ju','Ja']
    p = document.getElementById('latinica');
    //1 step: replacing cyrillic letters with identical latin letters
    for (var i = 0; i < inputString.length; i++)
    {
        var currentLetter = inputString.charAt(i);
        var resultLetter = "";
        if (currentLetter != currentLetter.toUpperCase())
        {
            if (cyrArray.indexOf(currentLetter) > -1)
            {
                number = cyrArray.indexOf(currentLetter);
                resultLetter = latArray[number];
            }
            else
            {
                resultLetter = currentLetter;
            }
        }
        else
        {
            if (currentLetter == 'Ь' || currentLetter == 'Ъ')
            {
                resultLetter = '';
            }    
            else if (cyrArray2.indexOf(currentLetter) > -1)
            {
                number = cyrArray2.indexOf(currentLetter);
                resultLetter = latArray2[number];
            }
            else
            {
                resultLetter = currentLetter;
            }
        }
        resultString += resultLetter;
    }
    p.innerHTML = resultString;
}
