# Ask-Me-Anything (AMA)

Ask-Me-Anything (AMA) is a web application that enables users to create and participate in "Ask Me Anything" sessions. The application is built with a Golang backend to handle WebSockets and concurrency, and a React frontend for an interactive and responsive user interface.

## Features

- **Room Creation:** Users can create rooms on specific topics where other users can ask questions.
- **Real-time Messaging:** The backend uses WebSockets to facilitate real-time communication within rooms, allowing for instantaneous message delivery and updates.
- **Message Reactions:** Participants can react to messages within the room.
- **Message Status:** Messages can be marked as answered, providing a clear indication of which questions have been addressed.

## Project Structure

- **Backend (`bff`):**
  - Built using Golang, the backend manages WebSocket connections, API requests, and interactions with the PostgreSQL database.
  - Key components:
    - `cmd/`: Contains the command-line tools.
    - `internal/api/`: Handles API requests, including message handling and room management.
    - `internal/store/pgstore/`: Manages database interactions.
  - **Docker Integration:** The backend is containerized using Docker, with a `docker-compose.yaml` file to manage services.

- **Frontend (`web`):**
  - The frontend is a React application designed to provide a seamless user experience.
  - Key components:
    - `src/`: Contains the main application code, including pages, components, and hooks.
    - `Dockerfile`: Used to containerize the frontend for easy deployment.

## Getting Started

### Prerequisites

- Docker & Docker Compose
- Node.js and npm (for frontend development)
- Golang (for backend development)

### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/KaiqueGovani/Ask-Me-Anything.git
   cd Ask-Me-Anything
   ```

2. **Set Up Environment Variables:**
   - Create a `.env` file in the `bff` directory based on `docker.env` and configure your environment variables.

3. **Start the Application:**
   - Run the application using Docker Compose:
     ```bash
     docker-compose up
     ```

   This command will start the backend, frontend, and PostgreSQL database.

4. **Access the Application:**
   - The application will be accessible at `http://localhost:5173`.

### Development

- **Frontend Development:**
  ```bash
  cd web
  npm install
  npm run dev
  ```

- **Backend Development:**
  ```bash
  cd bff
  go run cmd/wsrs/main.go
  ```

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss improvements or features.

## License

This project is licensed under the MIT License. See the [LICENSE](bff/LICENSE) file for details.

## Acknowledgements

- This project uses the [Go-Chi](https://github.com/go-chi/chi) router for handling HTTP requests.
- PostgreSQL is used for the database layer, and the project leverages the [pgx](https://github.com/jackc/pgx) library for database interactions.
- The frontend is built with [React](https://reactjs.org/) and styled using [Tailwind CSS](https://tailwindcss.com/).
