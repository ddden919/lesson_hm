var lengthOfLongestSubstring = function (s) {
    let left = 0; right = 0; maxLength = 0;
    const windowSet = new Set();
    while (right < s.length) {
        if (!windowSet.has(s[right])) {
            windowSet.add(s[right]);
            right++;
            maxLength = Math.max(maxLength, right - left);
        } else {
            windowSet.delete(s[left]);
            left++;
        }
    }
    return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb"));