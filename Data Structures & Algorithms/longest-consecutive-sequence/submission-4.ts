class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const sorted = new Set(nums);
        let longest = 0;

        for (let num of nums) {
            let length = 1;
            if (!sorted.has(num - 1)) {
                while (sorted.has(num + 1)) {
                    length++;
                    num++;
                }
            }
            longest = Math.max(length, longest)
        }

        return longest;
    }
}
