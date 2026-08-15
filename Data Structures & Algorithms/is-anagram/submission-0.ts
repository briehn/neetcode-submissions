class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length != t.length) return false;
        const map = new Map<string, number>;

        for (let letter of s) {
            if (!map[letter]) {
                map[letter] = 1
            } else {
                map[letter] += 1
            }
        }

        for (let letter of t) {
            if (!map[letter]) {
                return false;
            } else {
                map[letter] -= 1
            }
        }

        [...map.values()].forEach(value => {
            if (value != 0) {
                return false;
            }
        })

        return true;
    }
}
