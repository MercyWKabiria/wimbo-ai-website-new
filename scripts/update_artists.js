const fs = require('fs');

// Read the current artists file
const content = fs.readFileSync('./lib/artists.ts', 'utf8');

// Function to add missing fields to Kito Kaya
function updateKitoKaya(content) {
  // Find Kito Kaya's entry and add missing fields
  const kitoStart = content.indexOf("id: '1'");
  if (kitoStart === -1) return content;
  
  const kitoEnd = content.indexOf('},', kitoStart);
  const kitoEntry = content.substring(kitoStart, kitoEnd + 1);
  
  // Check if voiceArchitectureSummary exists
  if (!kitoEntry.includes('voiceArchitectureSummary:')) {
    // Add voiceArchitectureSummary after vocalRange
    const vocalRangeEnd = kitoEntry.indexOf('lowerLimit: \'G2\'');
    const insertPoint = vocalRangeEnd + 5;
    
    const newEntry = kitoEntry.substring(0, insertPoint) + 
`    voiceArchitectureSummary: "Kito's range was specifically shaped for the sonic demands of East African worship — tracks built around the E4–G4 sweet spot will sit naturally in his voice without strain. His upper register brightens convincingly for praise lifts, while his lower chest provides gospel depth in verses.",` +
    kitoEntry.substring(insertPoint);
    
    return content.substring(0, kitoStart) + newEntry + content.substring(kitoEnd + 1);
  }
  
  return content;
}

// Update the file
const updatedContent = updateKitoKaya(content);
fs.writeFileSync('./lib/artists.ts', updatedContent, 'utf8');

console.log('Updated Kito Kaya entry');
