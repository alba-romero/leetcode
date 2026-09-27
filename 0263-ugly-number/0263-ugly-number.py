class Solution(object):
    def isUgly(self, n):
        if n<= 0:
            return False
        for divisor in[2, 3, 5]:
            while n % divisor == 0:
                n //= divisor
        return n == 1

        """
        :type n: int
        :rtype: bool
        """
    
        