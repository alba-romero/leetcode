public class Solution {
    public bool IsHappy(int n) {
        HashSet<int> visitados = new HashSet<int>();
        while(n != 1 && !visitados.Contains(n))
        {
            visitados.Add(n);
            n = ObtenerSumaCuadrados(n);
        }
        return n == 1;
    }
    public int ObtenerSumaCuadrados(int n)
    {
      int suma = 0;
      while(n > 0){
        int digito = n %10;
        suma += digito*digito;
        n /= 10;
      }
      return suma;
    }
}