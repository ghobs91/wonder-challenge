# wonder-challenge

## Endpoints:

Lists all questions in database

**/api/questions**

Returns specific question by ID

**/api/questions/:id**

Generates new question tied to consumer

**/api/create_question**

Generates new answer tied to producer and question it answers

**/api/create_answer**

Remove question by ID

**/api/remove/:id**

## Methods to scale this:

- Database sharding would make question queries much faster.
- Using a memcache for a question that's receiving answers frequently.