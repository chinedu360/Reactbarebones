# React Redux Toolkit Boilerplate

A barebones React application with the following features pre-configured:

- React (Frontend Library)
- Redux Toolkit (State Management)
- React Router DOM (Client-Side Routing)
- React Icons (Icon Library)
- Tailwind CSS (Utility-First CSS Framework)
- Chakra UI (React UI Library)
- Vite (Build Tool)
- API Layer Integration (Axios, Fetch, etc.)
- Pre-configured Layouts
- Vitest for testing

### Project Overview

This boilerplate provides a solid foundation for building modern web applications using React and associated libraries. It includes commonly used tools and configurations to help you get started quickly and build maintainable, production-ready applications.

### Features

- **React**: The project uses React as the core frontend library to create components and manage the user interface.

- **Redux Toolkit**: State management is handled using Redux Toolkit, a simple and efficient way to manage application state.

- **React Router DOM**: For client-side routing, React Router DOM is pre-configured to enable easy navigation and route handling.

- **React Icons**: Easily add icons to your components from a wide range of icon libraries.

- **Tailwind CSS**: Utilize the utility-first CSS framework, Tailwind CSS, for fast and responsive UI development.

- **Chakra UI**: For more advanced UI components and styling, Chakra UI is included for a consistent and customizable design system.

- **Vite**: This project is configured to use Vite as a build tool, providing fast development and optimized production builds.

- **API Layer Integration**: The project includes a basic setup for integrating with APIs using popular HTTP libraries like Axios, Fetch, etc.

- **Pre-configured Layouts**: Common layouts and styling are provided to help you get started with your project's structure.

### Getting Started

1. **Clone the repository**:

   ```shell
   git clone https://github.com/chinedu360/Reactbarebones.git

   cd Reactbarebones
   ```

2. **Rename folder**:

MacOS/Linux

```shell
mv Reactbarebones Your-preferred-project-name
```

On Windows

```shell
ren Reactbarebones Your-preferred-project-name
```

Navigate to renamed folder

```shell
cd Your-preferred-project-name
```

3. **Install Dependencies**:

   ```shell
   npm install
   ```

Start the development server

```shell
npm run dev
```

Build for Production

```shell
npm run build
```

Run Tests (if applicable)

```shell
    npm run test
```

4. **Removing the old `.git` Directory**:

In other to use git in the project, you have to remove the old `.git` directory

MacOS/Linux

    ```shell
    rm -rf .git
    ```

Windows

    ```shell
    rmdir /s /q .git
    ```

5. **Initialize a New Git Repository**:

   ```shell
   git init
   git add .
   git commit -m "Initial commit"
   ```

### Configure API Layer:

Update the API configurations in the src/api directory to connect to your backend or external services.

### Customize Layout and Components:

Replace or extend the components and styles according to your project's requirements.

**Project Structure**

- `public/` - Contains public assets like HTML files, icons, and more.

- `src/` - Main application source code.

  - `api/` - API layer integration, including services and configurations.

  - `assets/` - Stores images, fonts, and other static assets.

  - `components/` - Houses reusable React components.

  - `configs/` - Configuration files or settings, if applicable.

  - `features/` - Redux Toolkit slices and associated logic.

  - `hooks/` - Custom React hooks, if any.

  - `routes/` - Defines your application's routes and route-specific components.

  - `layouts/` - Pre-configured layouts for consistent styling.

  - `pages/` - Contains page-level components or views.

  - `App.jsx` - The main application component.

  - `index.css` - Global CSS styles.

  - `main.jsx` - Entry point for rendering the React app.

  - `store.js` - Redux store configuration.

- `index.html` - HTML template for the application.

- `package-lock.json` - Lock file for exact dependency versions.

- `package.json` - Project dependencies and scripts.

- `postcss.config.js` - PostCSS configuration, if used for styling.

- `README.md` - The documentation you're currently reading.

- `tailwind.config.js` - Tailwind CSS configuration.

- `vite.config.js` - Vite configuration file.

### Contributing

Contributions are welcome! If you have improvements, bug fixes, or new features to suggest, please submit a pull request.

### License

This project is open-source and available under the MIT License.
