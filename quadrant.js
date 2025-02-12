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
      
      quadrant.appendChild(toolElement);
    });
  }
  
  // Initialize by loading tools data
  loadToolsData();
  