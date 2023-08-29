// src/render_map.ts
function renderMap(canvas, popBinData, opts) {
  console.log("Rendering map x", canvas.width, canvas.height);
  const ctx = canvas.getContext("2d");
  const imageData = ctx.createImageData(opts.mapPixelW, opts.mapPixelH);
  if (popBinData.length !== imageData.width * imageData.height) {
    throw new Error("Not same length");
  }
  const popColorRgb = [240, 34, 156, 140];
  for (let iPix = 0; iPix < popBinData.length; iPix++) {
    if (popBinData[iPix] === 255) {
      continue;
    }
    const iImgData = iPix * 4;
    imageData.data[iImgData + 0] = popColorRgb[0];
    imageData.data[iImgData + 1] = popColorRgb[1];
    imageData.data[iImgData + 2] = popColorRgb[2];
    imageData.data[iImgData + 3] = popBinData[iPix];
  }
  ctx.putImageData(imageData, opts.mapPixelPad, opts.mapPixelPad);
}
export {
  renderMap
};
