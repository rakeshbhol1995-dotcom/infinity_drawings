const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../src');

const replacements = [
    { regex: /\bbg-white\b/g, replace: 'bg-black' },
    { regex: /\btext-black\b/g, replace: 'text-white' },
    { regex: /\bbg-gray-50\b/g, replace: 'bg-zinc-950' },
    { regex: /\bbg-gray-100\b/g, replace: 'bg-zinc-900' },
    { regex: /\btext-black\/10\b/g, replace: 'text-white/10' },
    { regex: /\btext-black\/20\b/g, replace: 'text-white/20' },
    { regex: /\btext-black\/30\b/g, replace: 'text-white/30' },
    { regex: /\btext-black\/40\b/g, replace: 'text-white/40' },
    { regex: /\btext-black\/50\b/g, replace: 'text-white/50' },
    { regex: /\btext-black\/60\b/g, replace: 'text-white/60' },
    { regex: /\btext-black\/80\b/g, replace: 'text-white/80' },
    { regex: /\bborder-black\/5\b/g, replace: 'border-white/5' },
    { regex: /\bborder-black\/10\b/g, replace: 'border-white/10' },
    { regex: /\bborder-black\/20\b/g, replace: 'border-white/20' },
    { regex: /\bfrom-white\b/g, replace: 'from-black' },
    { regex: /\bto-white\b/g, replace: 'to-black' },
    { regex: /\bvia-white\b/g, replace: 'via-black' }
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
        
        replacements.forEach(({regex, replace}) => {
            newContent = newContent.replace(regex, replace);
        });
        
        // Fix up body text in globals.css
        if (filePath.endsWith('globals.css')) {
            newContent = newContent.replace(/radial-gradient\(circle at 50% 10%, #ffffff 0%, #f3f4f6 100%\)/g, 'radial-gradient(circle at 50% 10%, #151515 0%, #000000 100%)');
        }

        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log('Updated', filePath);
        }
    }
});
