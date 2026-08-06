class Solution {
    public int smallestNumber(int n, int t) {
        boolean divisible = false;
        int producto = 0;
        while(!divisible){
            if(n < 10){
             producto = n;
            }
            if(n > 9 && n < 100){
                producto =(n%10) * (n/10);
            }
            if(n >= 100){
                producto = (n%10)*(n/100)*(n/10%10);
            }
            if(producto%t == 0){
                divisible = true;
            }else{
                n++;
            }
        }
        return n;
    }

}