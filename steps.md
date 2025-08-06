# Here I've written steps for Todo application

1. api contracts
2. http methods

******************
## http methods

- GET:  
>retrieve a resource

- OPTIONS:  
> what operations are available on this end pt

- POST:  
>create new resource/submit data

- PUT:  
>update resource/__replace__ a resource with data in req body

- PATCH:  
>partial modifications/specific reources are modified

- DELETE:  
>delete req

- HEAD:  
>similar to GET but only requests headers of resource (used for checking metadata)
******************

## Request Body
 sent by client to server as http req

## Idempotent (will not affect server even if hit multiple times)
PUT
DELETE
