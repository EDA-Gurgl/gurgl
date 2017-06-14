# API Documentation

## Summary

##### The API can:
| Task | Method | Requires authentication? |
| ------ | -------- | -------- |
| [Return a list of all clothes available for rent](#get-all-clothes) | GET | no |
| [Return a clothing item by id](#get-clothes-by-id) | GET | no |
| [Return a list of loans by user id](#get-loans-by-user-id) | GET | yes |
| [Return member details by id](#get-member-details) | GET | yes |
If a non-authenticated user attempts any auth requiring requests, the result will be an object structured as follows:

    {
      "error":
      {
        "type": "auth",
        "code": 401,
        "message": "authentication failed"
      }
    }

## Requests

### Get all clothes

| Method | Endpoint | Usage | Returns |
| ------ | -------- | ----- | ------- |
| GET    | `/v1/clothes/` | Retrieve all clothes | clothes |

#### Response
##### Status Codes:
* On success, the HTTP status code in the response header is 200 ('OK').
* In case of server error, the header status code is a 5xx error code and the response body contains an error object.

The get request will return an array of clothes objects, that are available to be loaned (where id is a clothing id):

        [
          {
            "id": 1,
            "size_description": "3-6",
            "brand_description": "Kids Republic",
            "style_description": "Dress",
            "condition_description": "As new",
            "photo1": "/photo1.png",
            "photo2": "/photo2.png",
            "description": "Very lovely dress, pink colour",
          },
          {
            "id": 2,
            "size_description": "3-6",
            "brand_description": "Kids Republic",
            "style_description": "Dress",
            "condition_description": "As new",
            "photo1": "/photo3.png",
            "photo2": "/photo4.png",
            "description": "Casual dress, blue colour",
          }
        ]

([back to summary](#summary))  


### Get a clothing item by id

| Method | Endpoint | Usage | Returns |
| ------ | -------- | ----- | ------- |
| GET    | `/v1/clothes/:id` | Retrieve all the details for a specific item

#### Response
##### Status Codes:
* On success, the HTTP status code in the response header is 200 ('OK').
* If a non-valid item ID is given, an HTTP status code of 400 ('Bad Request') will be returned.
* In case of server error, the header status code is a 5xx error code and the response body contains an error object.

The get request will return an object, containing all the details for a clothing item (where id is a clothing id):

    {
      "id": 2,
      "size_description": "3-6",
      "brand_description": "Kids Republic",
      "style_description": "Dress",
      "condition_description": "As new",
      "photo1": "/photo1.png",
      "photo2": "/photo1.png",
      "description": "Casual dress, blue colour",
    }


([back to summary](#summary))  


### Get loans by user id

| Method | Endpoint | Usage | Returns |
| ------ | -------- | ----- | ------- |
| GET    | `/v1/loans/` | Retrieve all loans for a specific user

#### Response
##### Status Codes:
* On success, the HTTP status code in the response header is 200 ('OK').
* If a non-valid item ID is given, an HTTP status code of 400 ('Bad Request') will be returned.
* In case of server error, the header status code is a 5xx error code and the response body contains an error object.

The get request will return an array of objects, containing all the details for loaned clothing items (where id is loan id):

    [
    {
      "id": 277,
      "size_description": "3-6",
      "brand_description": "Kids Republic",
      "style_description": "Dress",
      "condition_description": "As new",
      "photo1": "/photo1.png",
      "photo2": "/photo1.png",
      "description": "Casual dress, blue colour",
      "member_id": 2,
      "loaned_on": "20170303",
      "due_back_on": "20170503",
      "returned_on": "20170505"
    },
    {
      "id": 278,
      "size_description": "3-6",
      "brand_description": "Kids Republic",
      "style_description": "Dress",
      "condtition_description": "As new",
      "photo1": "/photo2.png",
      "photo2": "/photo3.png",
      "description": "Casual dress, blue colour",
      "member_id": 2,
      "loaned_on": "20170303",
      "due_back_on": "20170503",
      "returned_on": "20170505"
  }
]

([back to summary](#summary))  

### Get member details

| Method | Endpoint | Usage | Returns |
| ------ | -------- | ----- | ------- |
| GET    | `/v1/member/` | Retrieve all loans for a specific user

#### Response
##### Status Codes:
* On success, the HTTP status code in the response header is 200 ('OK').
* If a non-valid item ID is given, an HTTP status code of 400 ('Bad Request') will be returned.
* In case of server error, the header status code is a 5xx error code and the response body contains an error object.

The get request will return an object, containing member account details (where id is member id):


    {
      "id": 2,
      "name": "John Bloggs",
      "phone": 376121213,
      "address": "275 Cuba street",
      "email": "joe.bloggs@gmail.com"
    }

([back to summary](#summary))
