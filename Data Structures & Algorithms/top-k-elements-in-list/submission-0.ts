class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map: Map<number, number> = new Map();

        for (let num of nums) {
            if (!map[num]) {
                map[num] = 0;
            }
            map[num]++;
        }

        const newMap = [...Object.entries(map)].sort((a, b) => b[1] - a[1]).map((a) => Number(a[0]));

        return newMap.slice(0, k);
    }
}
