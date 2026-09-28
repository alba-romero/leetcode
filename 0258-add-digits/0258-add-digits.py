class Solution(object):
    def addDigits(self, num):
        """
        :type num: int
        :rtype: int
        """
        while num > 9:
            num = sum(int(digito) for digito in str(num))
        return num


        