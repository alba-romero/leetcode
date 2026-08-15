class Solution {
    public int mySqrt(int x) {
        if(x == 0 || x == 1)
            return x;
        
        int inicio = 0;
        int fin = x;
        int media = -1;
       while(inicio <= fin){
        media = inicio + (fin - inicio)/2;
        if((long) media * media > (long) x)
            fin = media - 1;
        
            else if(media*media == x)
            return media;
            else
            inicio = media + 1;
                
            
        }
        return fin;
       }
}
