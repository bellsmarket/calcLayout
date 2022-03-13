px = process.argv[2];

const spW = 640;
const spSideSpace = 36;
const spSpace = spSideSpace * 2;
const spRatio = (spSideSpace/spW) *100;

const spInner = spW - (spSideSpace * 2 );




// const doubleWidth = spWidth * 2;
// const doubleSide = spSideSpace * 2;
// const doubleInnder = doubleWidth - (doubleSide * 2);


const ch =(number, digit = 3) => {
  return number.toFixed(digit);
}

const aiToPhoto = (targetPx) => {
  cmt('ウィンドウ', spW);
  c('');
  showLayout();
  show640(targetPx);
};


const showLayout = () => {
  // 640px(AI)
  const allPx = unit(spSideSpace) +  ' | ' + unit(spInner)  + ' | '  + unit(spSideSpace);

  cmt("レイアウト", allPx, "");
  cmt('全体余白', spSpace);
  cmt('片側余白', spSideSpace);
  cmt('余白Ratio', spRatio, "%");
  c('');
};

const show640 = (targetPx) => {
  const targetRatio = ch((targetPx / spInner) *100);
  const blank = spInner - targetPx;
  const blankRatio = ch((blank / spInner) * 100);

  cmt('画像サイズ', targetPx, "px");
  cmt('画像割合', targetRatio, "%");
  cmt('画像余白', blank, "px");
  cmt('画像余白割合', blankRatio, "%");
  c('');
};













const cmt = (text, px, unit="px") => {
  c(text + '\t==>\t'+ px + unit);
};
const unit = (num, unit="px") => {
  return num + unit;
};

const c = (number) => {
  console.log(number);
};





const main = () => {

  if(px && px <640 ) {
    aiToPhoto(px);
  } else {
    console.log('Input is not Exisist!!!!!!!!!');
  }
  return true;
}
main();



const sp = {
  width: 640,
  sideSpace: 20,
  // space: this.sideSpace *2,
  // inner: this.width - this.space,
  // get getSpace() {
  //   return this.sidespace * 2;
  // },
  //
  // space: getSpace()
};
