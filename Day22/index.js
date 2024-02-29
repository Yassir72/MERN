function searchSubstr(fullText, searchText, allowOverlap = true) {
    let count = 0;
    if (searchText == '') return 0;
    else {
        for (let i = 0; i < fullText.length; i++) {
            let k = 0;
            for (let j = 0; j < searchText.length; j++) {
                if (searchText[j] == fullText[i + j]) k++;
            }
            if (k == searchText.length) {
                count++;
                if (!allowOverlap) i += searchText.length;
            }
        }
    }
    return count;
}

console.log(searchSubstr('aaabbbcccc', 'bbb'));