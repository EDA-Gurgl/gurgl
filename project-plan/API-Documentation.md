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

The get request will return an array of clothes objects:

        [
          {
            "id": 1,
            "size_description": '3-6',
            "brand_description": 'Kids Republic',
            "style_description": 'Dress',
            "condtition_description": 'As new',
            "photo1": /photo1.png,
            "photo2": /photo1.png,
            "description": 'Very lovely dress, pink colour',
          },
          {
            "clothing_id": 2,
            "size_description": '3-6',
            "brand_id": 2,
            "brand_description": 'Kids Republic',
            "style_id": 2,
            "style_description": 'Dress',
            "condtition_id": 1,
            "condtition_description": 'As new',
            "photo1": /photo1.png,
            "photo2": /photo1.png,
            "description": 'Casual dress, blue colour',
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

The get request will return an object, containing all the details for a clothing item:

    {
      "clothing_id": 2,
      "size_id": 3,
      "size_description": '3-6',
      "brand_id": 2,
      "brand_description": 'Kids Republic',
      "style_id": 2,
      "style_description": 'Dress',
      "condtition_id": 1,
      "condtition_description": 'As new',
      "photo1": /photo1.png,
      "photo2": /photo1.png,
      "description": 'Casual dress, blue colour',
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

The get request will return an array of objects, containing all the details for loaned clothing items:

    [
    {
      "clothing_id": 2,
      "size_id": 3,
      "size_description": '3-6',
      "brand_id": 2,
      "brand_description": 'Kids Republic',
      "style_id": 2,
      "style_description": 'Dress',
      "condtition_id": 1,
      "condtition_description": 'As new',
      "photo1": /photo1.png,
      "photo2": /photo1.png,
      "description": 'Casual dress, blue colour',
      "loan_id": 234,
      "member_id": 2,
      "loaned_on": '20170303'
      "due_back_on": '20170503'
      "returned_on": '20170505'
    },
    {
      "clothing_id": 3,
      "size_id": 3,
      "size_description": '3-6',
      "brand_id": 2,
      "brand_description": 'Kids Republic',
      "style_id": 2,
      "style_description": 'Dress',
      "condtition_id": 1,
      "condtition_description": 'As new',
      "photo1": /photo2.png,
      "photo2": /photo3.png,
      "description": 'Casual dress, blue colour',
      "loan_id": 235,
      "member_id": 2,
      "loaned_on": '20170303'
      "due_back_on": '20170503'
      "returned_on": '20170505'
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

The get request will return an object, containing member account details:


    {
      "member_id": 2,
      "name": 'John Bloggs',
      "phone": 376121213,
      "address": '275 Cuba street',
      "email": 'joe.bloggs@gmail.com',
      "rating_id": '1',
      "rating_name": 'Bronze'
    }

([back to summary](#summary))
