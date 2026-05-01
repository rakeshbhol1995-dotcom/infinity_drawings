const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../src');

const replacements = [
    { regex: /\bbg-black\b/g, replace: 'bg-white' },
    { regex: /\btext-white\b/g, replace: 'text-black' },
    { regex: /\bbg-zinc-950\b/g, replace: 'bg-gray-50' },
    { regex: /\bbg-zinc-900\b/g, replace: 'bg-gray-100' },
    { regex: /\bbg-neutral-950\b/g, replace: 'bg-gray-50' },
    { regex: /\bbg-neutral-900\b/g, replace: 'bg-gray-100' },
    { regex: /\btext-white\/10\b/g, replace: 'text-black/10' },
    { regex: /\btext-white\/20\b/g, replace: 'text-black/20' },
    { regex: /\btext-white\/30\b/g, replace: 'text-black/30' },
    { regex: /\btext-white\/40\b/g, replace: 'text-black/40' },
    { regex: /\btext-white\/50\b/g, replace: 'text-black/50' },
    { regex: /\btext-white\/60\b/g, replace: 'text-black/60' },
    { regex: /\btext-white\/80\b/g, replace: 'text-black/80' },
    { regex: /\bborder-white\/5\b/g, replace: 'border-black/5' },
    { regex: /\bborder-white\/10\b/g, replace: 'border-black/10' },
    { regex: /\bborder-white\/20\b/g, replace: 'border-black/20' },
    { regex: /\bfrom-black\b/g, replace: 'from-white' },
    { regex: /\bto-black\b/g, replace: 'to-white' },
    { regex: /\bvia-black\b/g, replace: 'via-white' }
];

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        if (fs.statSync(dirPath).isDirectory()) {
            walkDir(dirPath, callback);
        } else {
            callback(dirPath);
        }
    });
}

walkDir(srcDir, (filePath) => {
    if (filePath.endsWith('.tsx') || filePath.endsWith('.css')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let newContent = content;
        
        // Skip over image overlays and certain blocks?
        // Actually, let's just do it globally, it usually creates a "light" version that's mostly acceptable.
        // Or we can manually revert the few broken ones later.
        
        replacements.forEach(({regex, replace}) => {
            newContent = newContent.replace(regex, replace);
        });
        
        // Fix up body text in globals.css
        if (filePath.endsWith('globals.css')) {
            newContent = newContent.replace(/radial-gradient\(circle at 50% 10%, #151515 0%, #000000 100%\)/g, 'radial-gradient(circle at 50% 10%, #ffffff 0%, #f3f4f6 100%)');
        }

        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log('Updated', filePath);
        }
    }
});
