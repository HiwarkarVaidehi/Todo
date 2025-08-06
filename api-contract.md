# *API Contract: ToDo app by Vaidehi*
## GET 
- get/todo/{id}
- Success Response : 200  
<mark>we do not need request body for GET method</mark>

- Response Body:
```
{
    id: integer
    title: string
    desciption: string
}
```
************************

## DELETE
- /todo/delete
- Success Response : 200  
<mark>we do not need request body for DELETE method</mark>

- Response Body: 
```
{}
```
************************
## POST (create a new resource)
- endpoint : /todo/create
- Success Response : 201  
- Request Body: 
```
{
    id: integer
    title: string
    description: string
}
```
- Response Body:
```
{
    id: id
    title: title
    created_at: datetime
}
```
*********************
## Patch (update part of existing data)
- endpoint : /todo/update
- Success Response : 200  
- Request Body: 
```
{
    id: integer
    title: string
    description: string
}
```
- Response Body:
{
    id: id
    title: title
    updated_at: datetime
}

*******************

## PUT (replace existing data)
- endpoint: todo/update
- Success Response : 200  
- Request Body: 
```
{
    id: integer
    title: string
    description: string
}
```
- Response Body:
```
{
    id: id
    title: title
    updated_at: datetime
}
```

*************************
### *NOTES*

- *PUT PATCH POST needs req body*
- *200 OK - GET PUT PATCH DELETE (Succeeded)*
- *201- new resource created*
- *204 - no content to return*

*************************