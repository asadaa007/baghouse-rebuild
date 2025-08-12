# Frost Emission Admin Panel

## Overview
The admin panel provides a comprehensive content management system for the Frost Emission website. It's accessible at `/react-admin` and allows you to manage services, careers, content, and contact inquiries.

## Features

### 🏠 Dashboard
- Overview statistics (services, careers, inquiries, activity)
- Quick action buttons for common tasks
- Recent activity feed

### 🔧 Services Management
- Add, edit, and delete service offerings
- Manage service categories, descriptions, and images
- Set service status (active/inactive)
- Organize services by category

### 💼 Careers Management
- Create and manage job postings
- Add detailed job requirements
- Set job type, location, and salary information
- Manage application status

### 📝 Content Management
- Edit website content by page
- Update titles, descriptions, and contact information
- Manage hero sections, CTAs, and general content
- Export/import content functionality

### 📧 Contact Management
- View and manage contact form submissions
- Track inquiry status (new, read, replied, closed)
- Reply to inquiries via email
- Filter inquiries by status

## Access
Navigate to `https://yourdomain.com/react-admin` to access the admin panel.

## Navigation
The admin panel includes a sidebar with the following sections:
- **Dashboard**: Overview and quick actions
- **Services**: Manage service offerings
- **Careers**: Manage job postings
- **Content**: Edit website content
- **Contact**: Manage inquiries

## Data Management
Currently, the admin panel uses local state management. For production use, consider:
- Implementing a backend API
- Adding user authentication
- Setting up a database
- Adding data persistence

## Security Considerations
- Add authentication/authorization
- Implement role-based access control
- Secure API endpoints
- Add input validation and sanitization

## Future Enhancements
- User management system
- File upload functionality
- Analytics and reporting
- Email notifications
- Backup and restore functionality
- Multi-language support

## Technical Stack
- React 19
- TypeScript
- Tailwind CSS
- React Router DOM
- Vite

## Development
To run the admin panel locally:
```bash
npm run dev
```
Then navigate to `http://localhost:5173/react-admin`
