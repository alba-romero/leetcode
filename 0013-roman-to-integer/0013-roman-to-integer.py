class Solution(object):
    def romanToInt(self, s):
        """
        :type s: str
        :rtype: int
        """
        valores = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
        total = 0
        n = len(s)
        for i in range(n):
            valor_actual = valores[s[i]]
            if i + 1 < n and valor_actual < valores[s[i + 1]]:
                total -=valor_actual
            else:
                total += valor_actual
        return total

