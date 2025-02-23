# AI Tools Quadrant

This project visualizes AI tools using a quadrant-based layout, inspired by the **Gartner Magic Quadrant**. The quadrant categorizes AI tools based on two key factors:
1. **Ability to Execute**
2. **Completeness of Vision**

Each tool is positioned in the quadrant based on these factors. The goal is to give users a quick overview of the landscape of AI tools, helping them to evaluate options based on the tool's execution capability and vision completeness.

---

## Features

- **Interactive Quadrant Display**: Visualizes AI tools in a quadrant layout.
- **Tool Details Panel**: Click on any tool to view detailed information, including:
  - Tool name
  - Description
  - Website (clickable link)
  - Foundation year
  - Explanation of why the tool is positioned where it is
  - Whether the tool is open source (Yes/No)
- **Quadrant Categories**:
  - **Leaders**: Tools with high execution ability and vision completeness.
  - **Challengers**: Tools with high execution ability but lower vision completeness.
  - **Visionaries**: Tools with high vision completeness but lower execution ability.
  - **Niche Players**: Tools with lower execution ability and vision completeness.
- **Axis Labels**:
  - **X-Axis**: Ability to Execute
  - **Y-Axis**: Completeness of Vision
- **Footnote**: A small note at the bottom of the page saying "Inspired by Gartner Magic Quadrant."

---

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

---

## Project Structure

The project is organized as follows:

ai-tools-quadrant/
├── index.html # Main HTML file for the quadrant and tool details
├── styles.css # Stylesheet for the quadrant, tools, and tool details panel
├── quadrant.js # JavaScript file to load and position tools
├── tools.json # JSON file containing the list of tools and their details
├── README.md # Project overview and instructions

## Customizing Tools

To add or modify the tools displayed in the quadrant, edit the `tools.json` file. Each tool should have the following properties:
- `name`: The name of the tool.
- `description`: A short description of the tool.
- `x`: The percentage position on the x-axis (Ability to Execute).
- `y`: The percentage position on the y-axis (Completeness of Vision).
- `website`: The official website of the tool (URL).
- `foundationYear`: The year the tool was founded.
- `positionExplanation`: A brief explanation of why the tool is positioned where it is.
- `isOpenSource`: A boolean value (`true` or `false`) indicating whether the tool is open source.

### Example Tool Entry

```json
{
  "name": "ChatGPT",
  "x": 90,
  "y": 10,
  "description": "A conversational AI model by OpenAI.",
  "website": "https://openai.com/chatgpt",
  "foundationYear": 2015,
  "positionExplanation": "Positioned as a leader due to its advanced conversational capabilities and widespread adoption.",
  "isOpenSource": false
}