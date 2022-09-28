/**
 * Given an character and numeric string return the max repeated character
 */

// Approach 1

// time complexity is O(n)^2
// space complexity is O(n)

const getMaxRepeatedCharacter_approach1 = (str) => {
  let maxCount = 0,
    maxCharacter = null;

  for (let i = 0; i < str.length; i++) {
    if (!/[a-zA-Z]/.test(str[i])) continue;
    let count = 0;
    for (let j = i; j < str.length; j++) {
      if (str[j] === str[i]) {
        count++;
      }
      if (count > maxCount) {
        maxCount = count;
        maxCharacter = str[j];
      }
    }
  }
  return maxCharacter;
};

// Approach 2

const getMaxRepeatedCharacter_approach2 = (str) => {
  let maxCharacter = null,
    maxCount = 0;
  const characterDict = {};

  for (let i = 0; i < str.length; i++) {
    if (!/[a-zA-Z]/.test(str[i])) continue;
    characterDict[str[i]] = (characterDict[str[i]] || 0) + 1;
    if (characterDict[str[i]] > maxCount) {
      maxCount = characterDict[str[i]];
      maxCharacter = str[i];
    }
  }
  return maxCharacter;
};

// console.log(getMaxRepeatedCharacter_approach1('AsadkddkkkkdkdkdDDDDLeieooweieo2134ljlsdkfj38933lkjsfd'));
console.log(getMaxRepeatedCharacter_approach2('AsadkddkkkkdkdkdDDDDLeieooweieo2134ljlsdkfj38933lkjsfd'));
