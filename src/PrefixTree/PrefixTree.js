class Node {
  constructor() {
    this.children = new Map();
    this.value = "";
    this.isWord = false;
    this.passed = "";
  }
}
export class PrefixTree {
  constructor() {
    this.root = new Node();
  }

  // recursively add a word to the prefix tree
  addWord(word) {
    this.addWordRec(word, this.root, 0);
  }

  // recurse add helper method
  addWordRec = (word, node, index) => {
    // word is inserted, we are done
    if (word.length === index) {
      return;
    }
    // if children contains the letter, then continue adding the word
    if (node.children.has(word.charAt(index))) {
      if (index === word.length - 1)
        node.children.get(word.charAt(index)).isWord = true;
      this.addWordRec(word, node.children.get(word.charAt(index)), index + 1);
    } else {
      const toInsert = new Node();
      toInsert.value = word.charAt(index);
      if (index === word.length - 1) toInsert.isWord = true;
      node.children.set(word.charAt(index), toInsert);

      this.addWordRec(word, node.children.get(word.charAt(index)), index + 1);
    }
  };

  listPossibilities = (prefix, k = 15) => {
    if (prefix === "") return [];
    const searchStartNode = this._getNodeAtEndOfPrefix(prefix);

    const listOfWords = [];
    if (searchStartNode !== null) {
      // searchStartNode.passed = prefix.substring(0, prefix.length - 1);

      const queue = [];
      queue.push(searchStartNode);
      while (queue.length !== 0) {
        const currentNode = queue.shift();
        const wordSoFar = currentNode.passed;
        if (currentNode.isWord) listOfWords.push(wordSoFar);
        if (listOfWords.length === k) return listOfWords; // stop searching after k hits for optimisation
        const children = currentNode.children;

        children.forEach((x) => {
          x.passed = wordSoFar + x.value;
          queue.push(x);
        });
      }
    }
    return listOfWords;
  };

  _getNodeAtEndOfPrefix = (prefix) => {
    const val = this._getNodeAtEndOfPrefixRec(prefix, this.root, 0);
    return val;
  };

  _getNodeAtEndOfPrefixRec = (prefix, node, index) => {
    if (index === prefix.length) return node;
    const currentChar = prefix.charAt(index);

    const lower = currentChar.toLowerCase();
    const upper = currentChar.toUpperCase();

    if (node.children.has(lower) || node.children.has(upper)) {
      const res = node.children.get(lower) || node.children.get(upper);
      res.passed = node.passed + res.value;
      return this._getNodeAtEndOfPrefixRec(prefix, res, index + 1);
    } else {
      return null;
    }
  };
}
