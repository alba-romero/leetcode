class Solution {
    public int climbStairs(int n) {
        int anterior = 1;
        int actual = 2;
        if(n == 1) return 1;
        for (int i = 3; i <= n; i++) {
            int siguiente = anterior + actual;
            anterior = actual;
            actual = siguiente;

        }
        return actual;
    }
}