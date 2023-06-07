# Regular Expressions in Javascript

In this assignment, you will be using regular expressions to validate and manipulate strings in Javascript. 

## Task 1: Validate Email Addresses

Create a function `validateEmail(email)` that takes an email address as input and returns `true` if the email address is valid and `false` otherwise. An email address is considered valid if it meets the following criteria:

- It contains only one `@` symbol
- It contains at least one period (`.`) after the `@` symbol
- It does not contain any spaces
- It has at least one character before and after the `@` symbol

### Task 2: Validate URLs

Create a function `validateUrls(url)` that takes a string as input and returns `true` if the url is valid and `false` otherwise. A url is considered valid if it meets the following criteria:

- it starts with `http://` or `https://` followed by a `www.`
- it has 1 or more characters representing the actual website name
- it ends with a domain name like `.com` or `.org` (can technically me any number of chaaracters following a `.`

### Bonus - Find URLs

Create a function `findUrls(text)` that takes a string as input and returns a list of all valid urls contained in the input string. For example, if the input string represents the HTML for an entire webpage, findUrls will return a list of all valid urls on that page. Utilize the function you wrote in Task 2 when creating this function, as it will do the heavy lifting.
