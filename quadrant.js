// Function to load tools data from an external JSON file
function loadToolsData() {
  fetch('tools.json')  // Assuming tools.json is the filename
    .then(response => response.json())
    .then(data => createTools(data.tools))  // Pass the tools array to the createTools function
    .catch(error => console.error('Error loading tools data:', error));
}

// Function to create and place tools on the quadrant
function createTools(toolsData) {
  const quadrant = document.getElementById('quadrant');
  toolsData.forEach(tool => {
    const toolElement = document.createElement('div');
    toolElement.classList.add('tool');
    toolElement.textContent = tool.name;
    
    // Positioning the tool based on x and y percentages
    toolElement.style.left = `${tool.x}%`;
    toolElement.style.top = `${tool.y}%`;
    
    // Create a tooltip for the description
    const tooltip = document.createElement('div');
    tooltip.classList.add('tool-tooltip');
    tooltip.textContent = tool.description;
    tooltip.style.display = 'none';  // Hide tooltip initially
    
    // Append tooltip to the quadrant
    quadrant.appendChild(tooltip);

    // Toggle tooltip visibility on click
    toolElement.addEventListener('click', () => {
      // Toggle the tooltip visibility
      if (tooltip.style.display === 'none') {
        tooltip.style.display = 'block'; // Show tooltip
        // Position the tooltip near the tool
        tooltip.style.left = `calc(${tool.x}% - 50%)`;  // Center it horizontally above the tool
        tooltip.style.top = `calc(${tool.y}% - 20px)`; // Position it slightly above the tool
      } else {
        tooltip.style.display = 'none';  // Hide tooltip
      }
    });

    // Append the tool to the quadrant
    quadrant.appendChild(toolElement);
  });
}

// Initialize by loading tools data
loadToolsData();
