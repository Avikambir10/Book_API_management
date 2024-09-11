## Pagination Example: To get the second page of books with a limit of 5 books per page, you would use:
GET /books?page=4

## Authentication
The API uses JWT (JSON Web Tokens) for authentication. You need to provide a token in the Authorization header (in the format Bearer ) to access protected routes. The token can be obtained by logging in.

## Error Handling
The API returns standard HTTP response codes for errors:

400 Bad Request: Invalid input data. 401 Unauthorized: Authentication failed. 404 Not Found: Resource not found. 500 Internal Server Error: Server error.
