class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const res = {}

        for (let word of strs) {
            let sorted = word.split("").sort().join("");
            if (!res[sorted]) {
                res[sorted] = [];
            }
            res[sorted].push(word)
        }

        return Object.values(res)
    }
}
