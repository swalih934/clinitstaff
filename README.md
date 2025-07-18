# ClinicAppoinment


 Clinic Staff Appointment Panel
A responsive React-based staff panel for managing clinic appointments. This internal tool is designed for authorized clinic staff to log in and manage appointments using a calendar interface.

* Staff Login
 Hardcoded login credentials

 Only clinic staff with fixed email/password can access the panel

. Features
 Calendar View to manage appointments (using react-big-calendar)
 Add or edit appointments with:
Patient name
Doctor name
Date & time
 Delete appointments
 LocalStorage for saving appointments (no backend required)

. Responsive design:
Mobile: Day view + Jump to date
Desktop: Month view + "Next Month" button
 Supports Dark Mode / Light Mode
 View all appointments in a list via "Agenda" route

. Tech Stack
React
React Router
React Big Calendar
Bootstrap 5
date-fns (for date handling)
LocalStorage (for data persistence)
