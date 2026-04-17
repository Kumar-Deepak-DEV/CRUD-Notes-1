# CRUD-Notes-1

A backend RESTful API which handles multiple CRUD operations (Create, Read, Update, Delete) for a notes management application. Built with Node.js, Express, and MongoDB.

📖 **[Postman API Documentation](https://documenter.getpostman.com/view/50840847/2sBXqDs2zN)**

## Data Model (Note)

- **`title`**: String (required)
- **`content`**: String (required)
- **`category`**: String (enum: `"work"`, `"personal"`, `"study"`, default: `"personal"`)
- **`isPinned`**: Boolean (default: `false`)

## API Endpoints

All endpoints are typically prefixed with `/api/notes` (or the prefix defined in `src/index.js`).

### Create Notes
- **`POST /`**
  - Creates a single note.
  - Body: `{ "title": "...", "content": "...", "category": "...", "isPinned": false }`
- **`POST /bulk`**
  - Creates multiple notes at once.
  - Body: `{ "notes": [ { "title": "...", "content": "..." }, ... ] }`

### Read Notes
- **`GET /`**
  - Fetches all notes.
- **`GET /:id`**
  - Fetches a single note by its MongoDB ObjectId.

### Update Notes
- **`PUT /:id`**
  - Entirely replaces an existing note.
  - Body: Requires both `title` and `content`.
- **`PATCH /:id`**
  - Partially updates an existing note.
  - Body: Include only the fields you wish to update (e.g. `{ "isPinned": true }`).

### Delete Notes
- **`DELETE /bulk`**
  - Deletes multiple notes by their IDs.
  - Body: `{ "ids": ["<id-1>", "<id-2>"] }`
- **`DELETE /:id`**
  - Deletes a single note by its ID.

## Setup & Running Locally

1. Install dependencies: `npm install`
2. Configure environment: Create a `.env` file with `PORT` and `MONGO_URI`.
3. Start the server: `node src/index.js` (uses nodemon for hot reloading).
