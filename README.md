# Wiki API Parser

## How to run

Prior to running the script please ensure you have Node installed and run the below commands:

```npm install --save isomorphic-fetch es6-promise```

```npm install --save fast-html-parser```

To get the details for a specific celebrity:

```node interface.js celebrity_name```

Expected celebrity name format is: Name_Surname

At the moment the application displays the spouse name, date and place of birth, place of death (if it exists).
The summary isn't displayed - there is a line which has been commented out that has all the information and from which this will be extracted at a later stage. 
