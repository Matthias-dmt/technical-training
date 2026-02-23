# Group By Parity

Given a list of integers, group them by parity.

Return a structure that separates even and odd numbers.

Notes:

• The input may contain negative numbers.
• The input may be empty.
• Preserve the original order inside each group.
• Think about performance.
• Avoid unnecessary passes.

## Reasoning

### Problem

A list of integers is given, we can consider it as an array.

We have to sort this number by odd and even.

### Approach

if the input is empty we return null.

the remainder of a even number should always be 0.

we can create a Map and create 2 keys "even" & "odd".

we would then itterate on the input.

to preserve de order we will use "..." operator.

## Correction

Map was here totally inecessary

    parity.set('odd', [...parity.get('odd') ?? [], currentIndex])

Using this line was making the process 0(n)1 since it recreated the array each itteration.

as well returning null is not the best option. Since it would avoid to check response?.odd for exemple if we returned response = { even: [], odd: [] }
