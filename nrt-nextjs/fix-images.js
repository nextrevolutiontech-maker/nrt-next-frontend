const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  if (!fs.existsSync(dir)) return filelist;
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else if (dirFile.endsWith('.tsx') || dirFile.endsWith('.ts')) {
      filelist.push(dirFile);
    }
  });
  return filelist;
};

const componentsDir = path.join(__dirname, 'src', 'components');
const files = walkSync(componentsDir);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Add import if we need to replace img and it's missing
  if (content.includes('<img ') && !content.includes('import Image from "next/image"')) {
    content = content.replace(/(import .*?;?\n)/, '$1import Image from "next/image";\n');
    changed = true;
  }

  if (content.includes('<img ')) {
    content = content.replace(/<img ([^>]+)>/g, (match, attrs) => {
      // Very basic transformation for width/height if missing to satisfy Next.js types
      // For simple avatars, inject width={48} height={48}
      if (!attrs.includes('width=')) {
          if (attrs.includes('w-10') || attrs.includes('w-12')) {
            attrs += ' width={48} height={48}';
          } else if (attrs.includes('w-6')) {
            attrs += ' width={24} height={24}';
          } else {
            attrs += ' width={800} height={600}';
          }
      }
      return `<Image ${attrs} />`;
    });
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Optimized images in: ${file}`);
  }
});
