# Most frequent element

## Problem

Given a list of value - return the value that appear the most

## Clarifications @ Edge cases

- the list can have positif or negatif value
- can be a large list (perf matter)
- list can be empty

## Approach

If the list is empty, I would return 0 or a message explicit saying that the provided list do not contain any occurence.

I would reduce the list to create a new object with for each key the values of list and the value of the key the number of time this value appears.

then i would loop on this object to return only the key of the biggest number.
