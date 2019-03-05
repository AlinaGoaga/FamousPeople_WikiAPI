# Wiki API Parser

## How to run

To get the details for a specific celebrity:

```node interface.js celebrity_name```

Expected celebrity name format is: Name_Surname

At the moment the application displays the spouse name, date and place of birth, place of death (if it exists; if it does not "Unavailable" is shown).

The summary isn't displayed - there is a line which has been commented out that has all the information coming from the body and from which this will be extracted at a later stage.

## My approach

- I started by exploring the API to get familiar with the response and how to parse it
- Following my research I decided to use isomorphic-fetch to make the API call and fast-html-parser to parse the HTML response
- I used ```node inspect interface.js``` with ```debugger``` (cont and repl) to get visibility on the data available at each step as I was working on the API response.
- Ideally I'd have liked to do this test driven and organize the code in classes - unfortunately the lack of familiarity with the type of response led to more time than expected being spent in that section
