// This script can be used to test the dark mode functionality
// You can run it in the browser console

function testDarkModeToggle() {
  console.log('Testing dark mode toggle functionality...');
  
  // Get the current state
  const htmlElement = document.documentElement;
  const isDarkMode = htmlElement.classList.contains('dark');
  const storedTheme = localStorage.getItem('theme');
  
  console.log(`Current state: Dark mode ${isDarkMode ? 'enabled' : 'disabled'}`);
  console.log(`localStorage theme value: ${storedTheme || 'not set'}`);
  
  // Find the theme toggle button
  const toggleButtons = Array.from(document.querySelectorAll('button'))
    .filter(btn => btn.getAttribute('aria-label')?.toLowerCase().includes('mode'));
  
  if (toggleButtons.length === 0) {
    console.error('❌ Theme toggle button not found');
    return;
  }
  
  console.log(`✅ Found ${toggleButtons.length} theme toggle button(s)`);
  const toggleButton = toggleButtons[0];
  
  // Test clicking the toggle button
  console.log('Clicking the toggle button...');
  toggleButton.click();
  
  // Check if the theme changed
  setTimeout(() => {
    const newIsDarkMode = htmlElement.classList.contains('dark');
    const newStoredTheme = localStorage.getItem('theme');
    
    console.log(`New state: Dark mode ${newIsDarkMode ? 'enabled' : 'disabled'}`);
    console.log(`New localStorage theme value: ${newStoredTheme || 'not set'}`);
    
    if (newIsDarkMode !== isDarkMode) {
      console.log('✅ Theme successfully toggled');
    } else {
      console.error('❌ Theme did not toggle');
    }
    
    // Test if CSS variables changed
    const computedStyle = getComputedStyle(document.body);
    const backgroundColor = computedStyle.backgroundColor;
    console.log(`Body background color: ${backgroundColor}`);
    
    // Toggle back to original state
    console.log('Toggling back to original state...');
    toggleButton.click();
    
    setTimeout(() => {
      const finalIsDarkMode = htmlElement.classList.contains('dark');
      console.log(`Final state: Dark mode ${finalIsDarkMode ? 'enabled' : 'disabled'}`);
      
      if (finalIsDarkMode === isDarkMode) {
        console.log('✅ Theme successfully toggled back');
      } else {
        console.error('❌ Theme did not toggle back correctly');
      }
      
      console.log('Dark mode toggle test completed');
    }, 500);
  }, 500);
}

// You can run this function in your browser console to test the dark mode functionality
console.log('To test dark mode functionality, run: testDarkModeToggle()');
