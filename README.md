# Kargo

## kg_DBorhara_2020

## Question

Determine whether a one-to-one character mapping exists from one string, s1, to another string, s2.  For example, given s1 = abc and s2 = bcd, print "true" into stdout since we can map each character in "abc" to a character in "bcd".  Given s1 = foo and s2 = bar, print "false" since the character ‘o’ cannot map to two characters.  But given s1 = bar and s2 = foo, print "true" since each character in "bar" can be mapped to a character in "foo".

## Criteria

1. Preferred Languages: JavaScript, Golang, Python (Java is also acceptable)
2. Upload your solution to GitHub, using the naming convention:
“kg_<github_username>_<year_of_graduation>” as the name of your
repository.i.e: github.com/user123/kg_user123_2021
3. Have at least 2 commits into your branch.
a. Please make sure that you have a "main" file (main.go/main.js/main.py)
in the root directory of your project, and that when you run the file with
the test input as arguments, it should print the result in the standard
output (please be sure to remove your debugging print statements
before you submit, otherwise it could affect how your submission is
graded)
4. Commit messages should be descriptive to reflect the changes as accurately as
possible.
5. The final version of your solution must be on the master branch

### *Example Cases*

**s1:** 'a  b  c'

**s2:** 'b  c  d'

**Output:** true

**s1:** 'f  o  o'

**s2:** 'b  a  r'

**Output:** false

**s1:** 'b  a  r'

**s2:** 'f  o  o'

**Output:** true

## ValidMap Psuedocode

1. Create function that takes 2 arguments
2. Check if both strings are equal length, if not return false
3. Create a hashmap
4. Loop through s1
5. Take each element and
   1. if it exists as a key return false
   2. if it does not exist as a key provide the s2 equivalent at the same index
6. If it completes return true

