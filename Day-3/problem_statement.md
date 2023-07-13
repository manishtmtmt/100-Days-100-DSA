## **Make A Leaderboard**

#### Description

You are given name and marks of N different students in a hackerrank contest. Your task is to write a program that makes leaderboard of the students under following conditions:

- The students having more marks get better rank
  
- If two students get same marks they get same rank (the student whose name comes first in alphabetical order comes first in order. However their rank will be same)
  
- The students placed next to the same marks students will get the rank skipping the intermediate ranks.

#### Sample Input 1
```
6
rancho 45
chatur 32
raju 30
farhan 28 
virus 32
joy 45
```

#### Sample Output 1
```
1 joy
1 rancho
3 chatur
3 virus
5 raju
6 farhan
```

#### Constraints:
` N < 100`