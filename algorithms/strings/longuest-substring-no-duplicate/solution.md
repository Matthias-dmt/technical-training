# Longuest sub string without duplicate

We are given a string

verify that this string is not empty if empty return 0

we need to combine 2 pointer with slidding window.

check current index if current index is not already in substring move right index++
add char in substring

if char in substring move leftindex ++

each time check if substring length is bigger than current
