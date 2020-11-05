/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) { return 0 } // 习惯性考虑edge case
    const queue = [[beginWord, 1]]
    const wordListSet = new Set(wordList)
    while(queue.length) {
        const currentLevelSize = queue.length
        for (let i = 0; i < currentLevelSize; i++) {
            const [word, level] = queue.shift()
            for (let l = 0; l < word.length; l++) { // 遍历单词，把能转换的单词push入队列
                for (let charCode = 97; charCode <= 122; charCode++) {
                    const newWord = `${word.slice(0, l)}${String.fromCharCode(charCode)}${word.slice(l + 1)}`
                    if (newWord === endWord) {
                        return level + 1
                    }
                    if (wordListSet.has(newWord)) {
                        queue.push([newWord, level + 1])
                        wordListSet.delete(newWord)
                    }
                }
            }
        }
    }
    return 0
};
