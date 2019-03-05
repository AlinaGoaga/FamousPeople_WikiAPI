# Wiki API Parser

## How to run

To get the details for a specific celebrity:

```node interface.js celebrity_name```

Expected celebrity name format is: Name_Surname

At the moment the application displays the date and place of birth and place of death (if it exists; if it does not "Unavailable" is shown).

The spouse and summary aren't displayed - there are two lines which have been commented out that hold this information.
This is yet to be extracted.

## My approach

- I started by exploring the API to get familiar with the response and how to parse it
- Following my research I decided to use isomorphic-fetch to make the API call and fast-html-parser to parse the HTML response
- I used ```node inspect interface.js``` with ```debugger``` (cont to move from step to step and repl to get access to the code) to get visibility on the data available at each step as I was working on the API response
- Ideally I'd have liked to do this test driven and organize the code in classes from the beginning (the class was extracted later on). Unfortunately the lack of familiarity with the type of response led to more time than expected being spent in that section.
