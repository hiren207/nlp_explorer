var explorerDataEn = {
  'text_preprocessing' : {
    'option_text': 'Text Pre-Processing',
    'action_text': 'I need to: ',
    'selector_id': 'sel-add',
    'desc': 'Adds element to the end of a list. Does not return the new list, just modifies the original.',
    'data': {
      'word_tokenize': {
        'option_text': 'Tokenize words',
        'input': 'from nltk.tokenize import word_tokenize <br>data = "All work and no play makes jack a dull boy, all work and no play" <br>print(word_tokenize(data))',
        'result': "['All', 'work', 'and', 'no', 'play', 'makes', 'jack', 'a', 'dull', 'boy', ',', 'all', 'work', 'and', 'no', 'play']",
        'name': "Method name",
        'desc': 'Adds element to the end of a list. Does not return the new list, just modifies the original.',
      },
      'sent_tokenize': {
        'option_text': 'Tokenize sentences',
        'input': 'from nltk.tokenize import sent_tokenize <br>data = "All work and no play makes jack a dull boy, all work and no play" <br>print(sent_tokenize(data))',
        'result': "['All work and no play makes jack dull boy.', 'All work and no play makes jack a dull boy.']",
        'name': "Method name",
        'desc': 'Adds element to the end of a list. Does not return the new list, just modifies the original.',
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
      'desc': 'Adds element to the end of a list. Does not return the new list, just modifies the original.',
    },
    }
  },
  'rm': {
    'option_text': 'remove elements',
    'action_text': 'I need to remove: ',
    'selector_id': 'sel-rm',
    'data': {
      'pop': {

        'option_text': 'remove elements',
        'action_text': 'I need to remove: ',
        'selector_id': 'sel-rm',
        'data': {
          'remove': {

            'option_text': 'remove elements',
            'action_text': 'I need to remove: ',
            'selector_id': 'sel-rm',
            'data': {
              'remove': {
                'name': 'remove',
                'link_name': 'remove',
                'option_text': 'the element from the list',
                'desc': 'Searches for the first instance of the given element and removes it (throws ValueError if not present)',
                'text': 'nums = [2, 2, 3, 4, 5, 5] # [2, 2, 3, 4, 5, 5]<br>nums.remove(2) <br>nums # [2, 3, 4, 5, 5]<br><br>nums.remove(4) <br>nums # [2, 3, 5, 5]'
              }
            }
          }
        }
      },
      'remove': {
        'name': 'remove',
        'link_name': 'remove',
        'option_text': 'the element from the list',
        'desc': 'Searches for the first instance of the given element and removes it (throws ValueError if not present)',
        'text': 'nums = [2, 2, 3, 4, 5, 5] # [2, 2, 3, 4, 5, 5]<br>nums.remove(2) <br>nums # [2, 3, 4, 5, 5]<br><br>nums.remove(4) <br>nums # [2, 3, 5, 5]'
      },
      'delete': {
        'name': 'delete',
        'link_name': 'delete',
        'option_text': 'all occurences of a specific element',
        'desc': 'Delete all items from the list that are equal to the given element.',
        'text': 'nums = [2, 2, 3, 4, 5, 5] # [2, 2, 3, 4, 5, 5]<br> # Using list comprehension <br>nums = [val for val in nums if val != 2]<br>nums # [3, 4, 5, 5]<br>'
      },
      'uniq': {
        'name': 'uniq',
        'link_name': 'uniq',
        'option_text': 'duplicate elements',
        'desc': 'Returns a copy of the original list with all duplicate elements removed.',
        'text': "nums = [5, 4, 5, 1, 7, 5, 1] # [5, 4, 5, 1, 7, 5, 1]<br> # convert the list to set<br>nums = set(num) # (1, 4, 5, 7)<br> # convert it back to list<br>nums = list(nums) # [1, 4, 5, 7]"
      }
    }
  },
  'find': {
    'option_text': 'find elements',
    'action_text': 'I need to find: ',
    'selector_id': 'sel-find',
    'data': {
      'specific': {
        'name': 'specific',
        'link_name': 'specific',
        'option_text': 'an element at a specific position',
        'desc': 'Returns the element at the specified index(es)',
        'text': "nums = [12, 13, [14, 15]] # [12, 13, [14, 15]]<br>nums[0] # 12<br>nums[2][1] # 15"
      },
      'include': {
        'name': 'include',
        'link_name': 'include-3F',
        'option_text': 'whether a certain element exists',
        'desc': 'Returns true if the given object is in the List. otherwise, returns false',
        'text': 'nums = [1, 4, 5, 7, [3, 8]] # [1, 4, 5, 7, [3, 8]]<br>4 in nums # True<br>3 in nums # False'
      }
    }
  },
  'sort': {
    'option_text': 'order the array',
    'action_text': 'I need to: ',
    'selector_id': 'sel-sort',
    'data': {
      'reverse': {
        'name': 'reverse',
        'link_name': 'reverse',
        'option_text': 'reverse the list',
        'desc': "The reverse() function doesn't take any argument. The reverse() function doesn't return any value. It only reverses the elements and updates the list.",
        'text': "nums = [5, 4, 6] # [5, 4, 6]<br>nums.reverse()<br>nums # [6, 4, 5]"
      },
      'sort': {
        'name': 'sort',
        'link_name': 'sort',
        'option_text': 'sort all the list elements',
        'desc': "sort() method doesn't return any value. Rather, it changes the original list.",
        'text': "nums = [5, 4, 6] # [5, 4, 6]<br>nums.sort()<br>nums # [4, 5, 6]<br>"
      }
    }
  },
  'other': {
    'option_text': 'do something else',
    'action_text': 'I need to: ',
    'selector_id': 'sel-other',
    'data': {
      'length': {
        'name': 'length',
        'link_name': 'length',
        'option_text': 'find the length of a list',
        'desc': 'Returns the length of an array. Length may be 0.',
        'text': "nums = [4, 5, 6] # [4, 5, 6]<br>len(nums) # 3"
      },
      'clear': {
        'name': 'clear',
        'link_name': 'clear',
        'option_text': "empties the given list, doesn't return any value",
        'desc': 'The clear() method modifies and clears the given  list',
        'text': 'nums = [4, 5, 6] # [4, 5, 6]<br>nums.clear()<br>nums # []<br>'
      },
      'count': {
        'name': 'count',
        'link_name': 'count',
        'option_text': 'find the the number of occurrences of an element in a list.',
        'desc': 'The count() method returns the number of occurrences of an element in a list.',
        'text': 'nums = [2, 2, 5, 4, 5, 5] # [2, 2, 5, 4, 5, 5]<br>nums.count(2) # 2<br>nums.count(5) # 3'
      }
    }
  }
};

var explorerData = {
  'en': explorerDataEn
}
