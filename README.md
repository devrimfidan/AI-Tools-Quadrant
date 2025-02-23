# AI Tools Quadrant

This project visualizes AI tools using a quadrant-based layout, inspired by the **Gartner Magic Quadrant**. The quadrant categorizes AI tools based on two key factors:
1. **Ability to Execute**
2. **Completeness of Vision**

Each tool is positioned in the quadrant based on these factors. The goal is to give users a quick overview of the landscape of AI tools, helping them to evaluate options based on the tool's execution capability and vision completeness.

## Features

- Interactive quadrant display of various AI tools.
- Tools are represented by clickable names that display more information about each tool.
- The quadrant includes four categories:
  - **Leaders**
  - **Challengers**
  - **Visionaries**
  - **Niche Players**
  
- **Ability to Execute** and **Completeness of Vision** are the two axes that determine where a tool is placed.

## Getting Started

Follow the steps below to run the project locally.

### Prerequisites

- A modern browser (Chrome, Firefox, Safari, etc.)
- Basic knowledge of HTML, CSS, and JavaScript

### Installation

1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/yourusername/ai-tools-quadrant.git
    ```

2. Open the `index.html` file in your browser.

### Structure

- `index.html`: The main HTML structure for the quadrant.
- `styles.css`: The stylesheet to style the quadrant and the tools.
- `quadrant.js`: The JavaScript file to load and position the tools based on data from a JSON file.

### Customizing Tools

To add or modify the tools displayed in the quadrant, simply edit the `tools.json` file. Each tool should have the following properties:
- `name`: The name of the tool.
- `description`: A short description of the tool.
- `x`: The percentage position on the x-axis (Ability to Execute).
- `y`: The percentage position on the y-axis (Completeness of Vision).

Example:
```json
[
  {
    "name": "AI Tool 1",
    "description": "A powerful AI tool for data analysis.",
    "x": 50,
    "y": 70
  },
  {
    "name": "AI Tool 2",
    "description": "An AI tool for natural language processing.",
    "x": 80,
    "y": 60
  }
]
