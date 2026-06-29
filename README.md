# Private Property Rental Application 

A fully responsive, modern web platform designed for renting private properties, rooms, farmhouses, cabins, and tents. This project is built using **React.js**, **React Router Dom**, and styled cleanly to offer an excellent user experience for property discovery.

---

##  Features

- **Dynamic Navigation:** Beautifully categorized views for Houses, Rooms, Cabins, Farmhouses, and Tents via an interactive, modern Navbar.
- **Dynamic Property Listing:** A functional listing page where owners can upload multiple property images with real-time local previews using `URL.createObjectURL`.
- **Global State Management:** Uses the React Context API (`UserContext`) to share application and form state seamlessly across different views without prop drilling.
- **Mobile Responsive Layout:** Features a fully adaptive mobile Hamburger menu with smooth interactions.
- **Secure Form Controls:** Handled standard form validation behaviors using custom handlers and `e.preventDefault()`.

---

##  Tech Stack

- **Frontend Framework:** React.js (Vite)
- **Styling:** CSS3 / Custom Layouts (Tailwind ready architecture)
- **Routing:** React Router Dom (`BrowserRouter`, `Routes`, `Route`, `NavLink`)
- **State Management:** React Context API
- **Icons:** React Icons (`react-icons`)

---

##  Project Structure

```text
src/
├── assets/          # Static media like logos and placeholder images
├── components/      # UI Components (Navbar, Home, Contact)
│   ├── Contact/     # Contact page & Support Form
│   ├── Context/     # UserContext provider for global state
│   ├── Listing/     # Property onboarding/Add Listing form
│   ├── Navbar/      # Top navigation & responsive Hamburger menu
│   └── [Categories] # Category specific components (Houses, Tents, Rooms, etc.)
├── App.jsx          # Central routing manager and layout architecture
└── main.jsx         # App entry point with Context and Router wrappers