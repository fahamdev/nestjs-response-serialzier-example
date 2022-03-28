

# Simple Response Serializer Interceptor Example

A simple custom interceptor is being used to serialize the response based on DTOs.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# watch mode
$ npm run start:dev
```

## Custom Decorator

A custom decorator(SerializeReponse) has been implemented to use the Interceptor

## User Data
```bash
{
      id: 1,
      firstName: "First",
      lastName: "user",
      email: "first@mail.com",
      password: "1234567890",
      roles: [
        { id: 1, name: "admin", priority: 1 },
        { id: 2, name: "user", priority: 2 },
      ],
    },
    {
      id: 2,
      firstName: "Second",
      lastName: "User",
      email: "second@mail.com",
      password: "93745629383",
      roles: [{ id: 2, name: "user", priority: 2 }],
    },
    {
      id: 3,
      firstName: "Third",
      lastName: "User",
      email: "third@mail.com",
      password: "1234567890",
      roles: [{ id: 2, name: "user", priority: 2 }],
    },
```