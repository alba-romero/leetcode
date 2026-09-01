class Solution(object):
    def addBinary(self, a, b):
        """
        :type a: str
        :type b: str
        :rtype: str
        """
        num1 = int(a, 2)
        num2 = int(b, 2)
        suma_decimal = num1 + num2
        suma_binaria = bin(suma_decimal)
        return suma_binaria[2:]