
const fs = require('fs');
const path = require('path');

// Read the corrupted file
const filePath = path.join(__dirname, 'src', 'data', 'duas.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Function to fix the corrupted text
function fixArabic(text) {
  // The text is UTF-8 bytes misinterpreted as Windows-1252
  // So we encode the string as Windows-1252 and then decode as UTF-8
  // But in Node.js, we can use Buffer for this
  try {
    return Buffer.from(text, 'latin1').toString('utf8');
  } catch (e) {
    return text;
  }
}

// Apply the fix to all "arabic" fields in the JSON-like content
// We'll use a regex to match and replace the arabic strings
const regex = /arabic:\s*['"]([^'"]+)['"]/g;
content = content.replace(regex, (match, p1) => {
  const fixed = fixArabic(p1);
  // Escape any backslashes or quotes
  const escaped = fixed.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  return `arabic: '${escaped}'`;
});

// Write the fixed content back
fs.writeFileSync(filePath, content, 'utf8');
console.log('Arabic text fixed successfully!');
