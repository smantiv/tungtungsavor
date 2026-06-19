# 🍽️ Tung Tung Savor - Restaurant Management System

A multi-role web application for managing restaurant operations, from customer ordering to kitchen coordination. Built with vanilla HTML, CSS, and JavaScript.

## 📋 Project Overview

Tung Tung Savor is a comprehensive restaurant management platform that demonstrates proficiency in **frontend web development** and **user experience design**. The system supports four distinct user roles, each with tailored interfaces and functionalities.

### Roles Supported

- **Cliente (Customer)** 🍔
  - Browse the complete menu
  - Filter and search dishes by category and name
  - Place orders
  - Make reservations

- **Mesero (Waiter)** 🧑‍🍳
  - Manage tables and customer seating
  - Take and track customer orders
  - Update order status

- **Cocina (Kitchen)** 🍳
  - View incoming orders in real-time
  - Track preparation status
  - Update dish completion status

- **Admin** 🛠️
  - System configuration
  - Overall control and monitoring
  - Access to all management features

## 🛠️ Technologies Used

- **HTML5** - Semantic markup and page structure
- **CSS3** - Responsive design with modern styling
  - Flexbox and Grid layouts
  - Responsive navigation
  - Card-based UI components
- **JavaScript (Vanilla)** - Dynamic functionality without dependencies
  - DOM manipulation
  - Event handling
  - Real-time filtering and search

## ✨ Key Features

### Multi-Role Architecture
Separate, optimized interfaces for each user type with role-specific navigation and functionality.

### Dynamic Menu System
- Real-time search functionality across menu items
- Category-based filtering (Entradas, Platos Fuertes, Postres)
- Responsive menu card layout with images and pricing
- Automatic section visibility based on filter results

### Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interface elements

### Clean Code Organization
- Modular file structure (HTML, CSS, JavaScript separated)
- Semantic HTML elements
- Clear, well-commented JavaScript code
- Consistent naming conventions

## 📁 Project Structure

```
tungtungsavor/
├── html/                    # HTML pages for each role
│   ├── index.html          # Role selection landing page
│   ├── cliente.html        # Customer interface
│   ├── menu.html           # Menu browsing and ordering
│   ├── pedido.html         # Order management (waiter view)
│   ├── reserva.html        # Reservation system
│   ├── cocina.html         # Kitchen dashboard
│   └── admin.html          # Admin panel
├── css/
│   └── styles.css          # Main stylesheet (14.7 KB)
├── Js/
│   ├── Menu.js             # Menu filtering and search logic
│   ├── Pedido.js           # Order management functionality
│   └── Reserva.js          # Reservation handling
└── img/                    # Assets and images
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No backend server required (can run locally)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/smantiv/tungtungsavor.git
cd tungtungsavor
```

2. Open the application:
   - Navigate to the `html` folder
   - Open `index.html` in your web browser
   - Or use a local web server:
     ```bash
     python -m http.server 8000
     # Then visit http://localhost:8000/html/index.html
     ```

## 💡 Key Implementation Details

### Menu Filtering System
The menu system uses an efficient filtering approach that:
- Listens to both search input and category select changes
- Dynamically shows/hides dishes based on two criteria: text match and category
- Only displays category sections that have visible items
- Provides instant feedback with no page reload

**Example:** The JavaScript validates both text content and category classes:
```javascript
const coincideTexto = textoCard.includes(texto);
const coincideCategoria = 
  categoriaSeleccionada === "todas" || 
  card.classList.contains(categoriaSeleccionada);
```

### Responsive Navigation
- Adaptive layout using CSS Flexbox
- Contextual navigation based on user role
- Logo that links back to role selection

### User Experience Enhancements
- SVG icons for profile and search (scalable, easy to style)
- Clear visual hierarchy with pricing displays
- Accessible form elements with proper labeling
- Footer with branding and project attribution

## 📚 Skills Demonstrated

✅ **Frontend Web Development**
- HTML5 semantic markup
- CSS3 responsive design patterns
- Vanilla JavaScript DOM manipulation

✅ **User Interface Design**
- Multi-role system architecture
- Intuitive navigation patterns
- Card-based component design
- Visual hierarchy and typography

✅ **Code Organization**
- Modular file structure
- Separation of concerns (HTML/CSS/JS)
- Consistent naming conventions
- Clear code comments for maintainability

✅ **Interactive Features**
- Real-time search and filtering
- Dynamic content visibility
- Event-driven programming
- State management through DOM

✅ **Professional Development Practices**
- Responsive design methodology
- Accessibility considerations (semantic HTML, alt text)
- Cross-browser compatibility
- Code scalability

## 🎓 Academic Context

This is a Systems Engineering academic project created in 2026, demonstrating comprehensive frontend development skills in a practical, real-world scenario.

## 🔮 Future Enhancements

Potential additions for production deployment:
- Backend API integration for data persistence
- Database integration (orders, menus, reservations)
- User authentication and session management
- Real-time updates using WebSockets
- Advanced analytics dashboard for admin
- Payment processing integration
- Mobile app version

## 📝 License

This project is created for educational purposes.

---

**Author:** Sebastián Mantilla Villalobos  
**Created:** February 2026  
**GitHub:** [@smantiv](https://github.com/smantiv)
