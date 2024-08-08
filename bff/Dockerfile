# Stage 1: Build the Go binary
FROM golang:1.22-alpine AS builder

# Install any dependencies
RUN apk add --no-cache git

# Set the Current Working Directory inside the container
WORKDIR /app

# Copy go.mod and go.sum files
COPY go.mod go.sum ./

# Download all dependencies. Dependencies will be cached if the go.mod and go.sum files are not changed
RUN go mod download

# Copy the source from the current directory to the Working Directory inside the container
COPY . .

# Build the Go app
RUN go install cmd/wsrs/main.go

# Stage 2: Run the Go binary
FROM scratch

# Set the Current Working Directory inside the container
WORKDIR /app

# Copy the Pre-built binary file from the previous stage
COPY --from=builder /go/bin/main ./

# Copy the .env file into the container
COPY .env ./

CMD ["./main"]
