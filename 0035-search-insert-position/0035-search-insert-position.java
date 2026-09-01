import java.util.Arrays;

class Solution {
    public int searchInsert(int[] nums, int target) {
        int resultado = Arrays.binarySearch(nums, target);
        if (resultado >= 0)
            return resultado;
        else
            return -resultado - 1;
    }
}