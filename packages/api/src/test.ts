const { nodeFileTrace } = require('@vercel/nft');
const files = ['./src/index.ts'];

(async () => {
  const { fileList, reasons } = await nodeFileTrace(files);

  console.log(fileList, reasons);
})()
