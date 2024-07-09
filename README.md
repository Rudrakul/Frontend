# Rudrakul - Frontend💻🔱

The frontend of our webapp is Fueled using the latest cutting edge NextJs-14 framework!

We have explained about the tech stack and github workflow in each sections so please take your time and understand them.😊


## Technologies Used
**Next.js 14:** For a dynamic and responsive frontend.

**QuillJS:** Integrating a rich text editor.

**React Query:** Effecient api call, fetching and server side  state management.

**Tailwind CSS:** Crafting a visually appealing and responsive UI.

**ShadCN:** Component library

**BiomeJS:** Linting, code syle enforcement 
## Project Structure
Here's how the project is Structured

#### /src
This is the root directory for the source code.

#### /app
This directory contains the main application pages and related components.

- **/(auth)**: Contains authentication-related pages.
  - **/login**: Contains components and logic for the login page.
  - **/register**: Contains components and logic for the registration page.
  - **/reset-password**: Contains components and logic for the reset password page.

- **/verify-email**: Contains components and logic for email verification.

- **/about**: Contains the "About" page components and logic.

- **/blogs**: Contains components and logic for blog-related pages.

- **/contact**: Contains the "Contact" page components and logic.

- **/experiences**: Contains components and logic for experience-related pages.

- **/processes**: Contains components and logic for process-related pages.

- **favicon.ico**: The favicon for the application.

- **globals.css**: Global CSS styles for the application.

- **layout.tsx**: The main layout component for the application.

- **page.tsx**: The main entry point for the application pages.

#### /components
This directory contains reusable components used throughout the application. This is where we'll be creating the components in a folder with their respective modular css files if required.

#### /constants
This directory contains constant values used across the application.

#### /lib
This directory contains utility functions and libraries used in the application.

#### /providers
This directory contains context providers for managing application-wide state.

- **TanstackProvider.tsx**: A context provider using TanStack (React Query) for managing server state and caching.

#### /theme
This directory contains theme-related files, such as font definitions and other styling configurations.

- **font.ts**: Contains font definitions and configurations for the application.

#### /types
This directory contains TypeScript type definitions for the api calls across different controllers.
The DTO's are the data transfer objects that you'll be recieving as response. 

- **auth.ts**: Type definitions related to authentication.
- **blog.ts**: Type definitions related to blogs.
- **experience.ts**: Type definitions related to experiences.
- **process.ts**: Type definitions related to processes.
- **user.ts**: Type definitions related to users.

#### .env.prod
Environment variables for the production environment.

#### .env.stage
Environment variables for the staging environment.

#### .gitignore
Specifies files and directories to be ignored by Git.

#### biome.json
Configuration file for the Biome.

### Additional Information

- **React Query**: Used for data fetching and caching.
- **Axios**: Used for making HTTP requests.
- **TypeScript**: Used for type safety and better developer experience.## Git branches flow
**Main Branch:**
- Contains production-ready code.
- Only updated from release and hotfix branches.

**Develop Branch:**
- The main branch for development.
- Features are developed in separate feature branches and merged back into develop when completed.

**Feature Branches:**
- Created from develop for individual features.
- Merged back into develop after the feature is completed and tested.

**Release Branch:**
- Created from develop when preparing for a new release.
- Used for final testing and bug fixing before going live.
- Merged into main and develop after the release is finalized.

**Hotfix Branch:**
- Created from main when an urgent fix is needed in production.
- Merged into main, release, and develop after the fix is applied.

### Tips:
**Feature Branch Naming:**
Use a consistent naming convention like feature/feature-name to keep branches organized.

**Commit Messages:**
Use descriptive commit messages to make it clear what each commit does. This helps when reviewing history.
## Installation

To get started with the project, follow these steps:
- Clone the repository.
- Install dependencies using `npm install` or `yarn install`.
- Set up environment variables by creating `.env` files based on `.env.prod` and `.env.stage`.
- Run the development server using `npm run dev` or `yarn dev`.
