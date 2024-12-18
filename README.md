The Odin Project To-Do List App

Overview

This is a simple To-Do List Application built as part of The Odin Project curriculum. The app allows users to create and manage projects, and within each project, users can organize tasks (to-dos). All data is stored locally using the browser’s local storage, ensuring that your projects and tasks are saved between sessions.

Features
	•	Projects Management:
	•	Create and delete projects.
	•	Projects are independent containers for tasks, helping you keep things organized.
	•	To-Do Management:
	•	Add, edit, and delete tasks (to-dos) within a project.
	•	Include key details for each task, such as:
	•	Title
	•	Description
	•	Due Date
	•	Priority Level (e.g., low, medium, high)
	•	Completion Status
	•	Mark tasks as completed.
	•	Local Storage:
	•	All projects and their tasks are stored in the browser’s local storage, so your data persists even after refreshing the page or closing the browser.
	•	Clean and Intuitive UI:
	•	A user-friendly interface for easily managing projects and tasks.


Usage

Adding a Project
	1. Enter project name in the top left corner.	
    2. Click the “Add Project” button.

Adding To-Dos
	1.	Select a project from the sidebar.
	2.	Click the "Create To-Do” button.
	3.	Fill out the form with the task’s details (title, description, due date, priority, etc.).
	4.	Save the to-do by clicking the "Add to do" button. It will appear under the selected project.

Managing Tasks
	•	Click on the To Do list button
	•	Mark as Completed: Check off the task when it is finished.
	•	Delete a To-Do: Remove a task you no longer need.

Local Storage

All user data is saved in local storage. This means:
	•	Projects and tasks are stored in the browser, and no external database or server is required.
	•	Data persists across browser sessions but is unique to the browser and device.

To reset the app, you can clear the browser’s local storage:
	1.	Open your browser’s Developer Tools (usually F12).
	2.	Navigate to the Application tab.
	3.	Clear the local storage for this site.


Built With
	•	HTML5: Structure of the app.
	•	CSS3: Styling for a clean and modern user interface.
	•	JavaScript (ES6): Application logic, including DOM manipulation and local storage handling.
