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
    
    // Add click event to show tool details
    toolElement.addEventListener('click', () => showToolDetails(tool));
    
    // Append the tool to the quadrant
    quadrant.appendChild(toolElement);
  });
}

// Function to show tool details in the right-side panel
function showToolDetails(tool) {
  const toolDetailsContent = document.getElementById('tool-details-content');

  // Clear previous details
  toolDetailsContent.innerHTML = '';

  // Add the tool name
  const name = document.createElement('h3');
  name.textContent = tool.name;
  toolDetailsContent.appendChild(name);

  // Add the tool description
  const description = document.createElement('p');
  description.textContent = tool.description;
  toolDetailsContent.appendChild(description);

  // Add the tool website
  const website = document.createElement('p');
  website.innerHTML = `<strong>Website:</strong> <a href="${tool.website}" target="_blank">${tool.website}</a>`;
  toolDetailsContent.appendChild(website);

  // Add the foundation year
  const foundationYear = document.createElement('p');
  foundationYear.innerHTML = `<strong>Foundation Year:</strong> ${tool.foundationYear}`;
  toolDetailsContent.appendChild(foundationYear);

  // Add the position explanation
  const positionExplanation = document.createElement('p');
  positionExplanation.innerHTML = `<strong>Position Explanation:</strong> ${tool.positionExplanation}`;
  toolDetailsContent.appendChild(positionExplanation);

  // Add whether the tool is open source
  const isOpenSource = document.createElement('p');
  isOpenSource.innerHTML = `<strong>Open Source:</strong> ${tool.isOpenSource ? 'Yes' : 'No'}`;
  toolDetailsContent.appendChild(isOpenSource);
}
// Initialize by loading tools data
loadToolsData();
