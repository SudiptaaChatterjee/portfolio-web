const fs = require('fs');
const path = require('path');
const https = require('https');
const { execSync } = require('child_process');

const fontUrl = 'https://dl.dafont.com/dl/?f=zenitha_classic';
const outputDir = path.join(__dirname, '../public/fonts');
const zipPath = path.join(outputDir, 'zenitha.zip');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

console.log('Downloading font...');
const file = fs.createWriteStream(zipPath);

https.get(fontUrl, (response) => {
    response.pipe(file);

    file.on('finish', () => {
        file.close();
        console.log('Download completed.');

        try {
            console.log('Extracting...');
            // Try using tar (available on Windows 10+)
            execSync(`tar -xf "${zipPath}" -C "${outputDir}"`);
            console.log('Extraction completed.');

            // Rename if necessary (we need to find the ttf/otf)
            const files = fs.readdirSync(outputDir);
            const fontFile = files.find(f => f.endsWith('.ttf') || f.endsWith('.otf'));

            if (fontFile) {
                const extension = path.extname(fontFile);
                const newPath = path.join(outputDir, 'Zenitha-Classic' + extension);
                fs.renameSync(path.join(outputDir, fontFile), newPath);
                console.log(`Renamed ${fontFile} to Zenitha-Classic${extension}`);
            } else {
                console.error('No font file found in zip.');
            }

            // Cleanup
            fs.unlinkSync(zipPath);

        } catch (e) {
            console.error('Extraction failed:', e.message);
            console.log('Please extract manually.');
        }
    });
}).on('error', (err) => {
    fs.unlink(zipPath);
    console.error('Download error:', err.message);
});
