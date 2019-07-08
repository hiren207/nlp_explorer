var explorerDataEn = {
  'text_preprocessing' : {
    'option_text': 'Text Pre-Processing',
    'action_text': 'I need to: ',
    'selector_id': 'sel-add',
    'data': {
      'word_tokenize': {
        'option_text': 'Tokenize words',
        'input': 'from nltk.tokenize import word_tokenize <br>data = "All work and no play makes jack a dull boy, all work and no play" <br>print(word_tokenize(data))',
        'result': "['All', 'work', 'and', 'no', 'play', 'makes', 'jack', 'a', 'dull', 'boy', ',', 'all', 'work', 'and', 'no', 'play']",
        'name': "Method name",
        'desc': 'Okay Adds element to the end of a list. Does not return the new list, just modifies the original.',
      },
      'sent_tokenize': {
        'option_text': 'Tokenize sentences',
        'input': 'from nltk.tokenize import sent_tokenize <br>data = "All work and no play makes jack a dull boy, all work and no play" <br>print(sent_tokenize(data))',
        'result': "['All work and no play makes jack dull boy.', 'All work and no play makes jack a dull boy.']",
        'name': "Method name",
        'desc': 'Not Adds element to the end of a list. Does not return the new list, just modifies the original.',
      },
      'stopwords': {
      'option_text': 'Remove stop words',
      'input': ['from nltk.tokenize import word_tokenize',
                '<br>from nltk.corpus import stopwords',
                '<br>data = "All work and no play makes jack dull boy. All work and no play makes jack a dull boy."',
                '<br>stopWords = set(stopwords.words(\'english\'))',
                '<br>words = word_tokenize(data)',
                '<br>wordsFiltered = []',,
                '<br>',
                '<br>for w in words:',
                '<br>    if w not in stopWords:',
                '<br>    wordsFiltered.append(w)',
                '<br>',
                '<br>print(wordsFiltered)'],
      'result': "['All', 'work', 'play', 'makes', 'jack', 'dull', 'boy', '.', 'All', 'work', 'play', 'makes', 'jack', 'dull', 'boy', '.'] ",
      'name': "Method name",
      'desc': 'Different Adds element to the end of a list. Does not return the new list, just modifies the original.',
    },
    }
  },
};

var explorerData = {
  'en': explorerDataEn
}
