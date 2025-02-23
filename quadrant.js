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

    // Create a tooltip for the description (hidden by default)
    const tooltip = document.createElement('div');
    tooltip.classList.add('tool-tooltip');
    tooltip.textContent = tool.description;
    quadrant.appendChild(tooltip);

    // Show tooltip when mouse enters the tool
    toolElement.addEventListener('mouseenter', () => {
      tooltip.style.display = 'block';
      tooltip.style.left = `${toolElement.getBoundingClientRect().left + 10}px`; // Position to the right of the tool
      tooltip.style.top = `${toolElement.getBoundingClientRect().top - 30}px`; // Position above the tool
    });

    // Hide tooltip when mouse leaves the tool
    toolElement.addEventListener('mouseleave', () => {
      tooltip.style.display = 'none';
    });

    // Append the tool to the quadrant
    quadrant.appendChild(toolElement);
  });
}

// Initialize by loading tools data
loadToolsData();


// Function to show tooltip on hover over the info icon
function showTooltipOnHover() {
  const infoIcon = document.getElementById('info-icon');
  const tooltip = document.createElement('div');
  tooltip.classList.add('tool-tooltip');
  tooltip.textContent = "This is the description of the tool.";

  // Initially hide the tooltip
  tooltip.style.display = 'none';
  document.body.appendChild(tooltip);

  // Hover event to show tooltip
  infoIcon.addEventListener('mouseenter', () => {
    tooltip.style.display = 'block';
    tooltip.style.left = `${infoIcon.getBoundingClientRect().left + 20}px`;  // Adjust horizontal position
    tooltip.style.top = `${infoIcon.getBoundingClientRect().top - 30}px`;  // Position above the icon
  });

  // Hide tooltip when mouse leaves
  infoIcon.addEventListener('mouseleave', () => {
    tooltip.style.display = 'none';
  });
}

// Initialize tooltip on hover
showTooltipOnHover();
