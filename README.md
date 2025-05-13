# Mov - Movie Showcase: A Demo Application

MovieFlix Showcase is a simple yet elegant demo application designed to display a curated list of 10 movies. It features a responsive user interface built with React and Shadcn/ui, powered by a Java Spring Boot backend using Spring Data MongoDB. The application highlights key features like an auto-scrolling movie carousel, individual movie trailer playback, and a user review system.

## ✨ Features

*   **Homepage Movie Carousel:**
    *   Displays 10 pre-loaded movies in an engaging, auto-scrolling carousel (advances every 2-3 seconds).
    *   Each movie is presented as a large banner background with an opacity effect.
    *   Includes a smaller cover image (bottom-left) and the movie title.
    *   **"Play" Button:** Navigates to a dedicated trailer page to watch the movie's YouTube trailer.
    *   **"Reviews" Button:** Navigates to a page where users can read existing reviews and submit their own.
*   **Trailer Page:**
    *   Embeds and plays the selected movie's trailer using a YouTube video player.
*   **Review Page:**
    *   Displays existing comments/reviews for the selected movie.
    *   Allows users to add their own reviews without requiring any sign-up or authentication.
*   **Responsive Design:** The application layout adapts seamlessly to various screen sizes, from desktop to mobile.
*   **Hardcoded Data:** All 10 movies and their initial data are hardcoded into the MongoDB database for demo purposes.
*   **No Authentication:** Simplified user experience with no login or registration required.

## 🛠️ Technologies Used

**Frontend:**
*   **React:** A JavaScript library for building user interfaces.
*   **Vite:** A fast frontend build tool for modern web projects.
*   **Shadcn/ui:** A beautifully designed component library, providing modern and accessible UI elements.
*   **Responsive CSS:** Custom styling to ensure adaptability across devices.

**Backend:**
*   **Java Spring Boot:** Framework for creating stand-alone, production-grade Spring-based Applications.
*   **Spring Data MongoDB:** Provides integration with MongoDB NoSQL database.
*   **MVC Architecture:** Organizes the application into Model, View, and Controller components.

**Database:**
*   **MongoDB:** A NoSQL document-oriented database.

**DevOps & Tools:**
*   **Docker:** Used to containerize the application for consistent deployment.
*   **OpenJDK 21:** The Java Development Kit version used for the backend.
*   **JaCoCo:** Used for measuring code coverage of backend tests.

## 📸 Screenshots

*(Please replace the placeholder URLs with your actual image URLs after uploading them.)*

### Homepage

**Desktop View:**
![Homepage Desktop View](https://i.imgur.com/z0KYbGv.png)

**Mobile View:**
![Homepage Mobile View](https://i.imgur.com/nHfZwmY.png)

### Trailer Page

**Desktop View:**
![Trailer Page Desktop View](https://i.imgur.com/JT4EMR8.png)

**Mobile View:**
![Trailer Page Mobile View](https://i.imgur.com/X09J8Bh.png)

### Review Page

**Desktop View:**
![Review Page Desktop View](https://i.imgur.com/xfzvWOg.png)

**Mobile View:**
![Review Page Mobile View](https://i.imgur.com/tmfVdcc.png)

## 🚀 Getting Started

### Prerequisites

*   Docker Desktop (or Docker Engine and Docker Compose) installed.
*   Git (for cloning the repository).

### Installation & Running

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd <your-repository-name>
    ```

2.  **Run using Docker Compose (Recommended):**
    The application (frontend, backend, and MongoDB) can be started using Docker Compose.
    *(You might need to provide a `docker-compose.yml` file or adjust this section based on your setup)*
    ```bash
    docker-compose up -d
    ```
    This will build the images if they don't exist and start the containers in detached mode.

3.  **Access the application:**
    *   Frontend (React): `http://localhost:3000` (or `http://localhost:5173` if Vite's default)
    *   Backend (Spring Boot): `http://localhost:8080`

    *(Adjust ports if they are different in your configuration.)*

## 🧪 Testing

The backend includes unit and integration tests to ensure code quality and functionality. Code coverage is measured using JaCoCo.

To run backend tests (typically done within an IDE or using Maven/Gradle commands):
```bash
# If using Maven
mvn test

# If using Gradle
./gradlew test
