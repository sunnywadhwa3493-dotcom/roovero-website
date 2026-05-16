const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const mockups = [
  { name: '01-calendar', label: 'Content Calendar' },
  { name: '02-approval', label: 'Approval Flow' },
  { name: '03-edit', label: 'Edit Requests' },
  { name: '04-analytics', label: 'Analytics' },
  { name: '05-published', label: 'Published' },
];

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const outputDir = path.join(__dirname, '../public/images/phone-mockups');

  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log('🎬 Generating PNG screenshots from HTML mockups...\n');

  for (const mockup of mockups) {
    const htmlPath = path.join(__dirname, `../public/screenshots/${mockup.name}.html`);
    const outputPath = path.join(outputDir, `${mockup.name}.png`);

    if (!fs.existsSync(htmlPath)) {
      console.log(`⚠️  File not found: ${htmlPath}`);
      continue;
    }

    const page = await browser.newPage();

    // Set viewport to match phone mockup size (375x812px, 2x scale for quality)
    await page.setViewport({
      width: 375,
      height: 812,
      deviceScaleFactor: 2,
    });

    // Navigate to local file
    const fileUrl = `file://${htmlPath}`;
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });

    // Take screenshot
    await page.screenshot({
      path: outputPath,
      fullPage: false, // Capture visible viewport only
      omitBackground: false,
    });

    console.log(`✅ ${mockup.label.padEnd(20)} → ${mockup.name}.png (375×812px @ 2x)`);
    await page.close();
  }

  await browser.close();
  console.log('\n✅ Screenshot generation complete!');
  console.log(`📁 Images saved to: public/images/phone-mockups/`);
  console.log('\n💡 Next: Update parabolic-phones component to use image URLs instead of HTML paths');
})();
