class Solution(object):
    def isPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """
        nuevo = ""
        for i in s:
            if i.isalnum():
                nuevo += i.lower()
        return nuevo == nuevo[::-1]
        
        