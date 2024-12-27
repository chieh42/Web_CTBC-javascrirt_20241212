console.log('這是外部的JavaScript');

// 變數variable
// 儲存網站內的資料 例如 顏色 字體大小 元素 使用者資料 等等

// 變數語法
// let 變數名稱

// 變數名稱命名習慣(守則)
// 1. 不能使用數字開頭
// 2. 不能使用空格 test 1
// 3. 不能使用全形符號 @
// 4. 不能使用中文命名
// 5. 保留字(有作用的關鍵字)if let

// 建議命名方式(駝峰式命名法)
// 多個單字構成
// 開頭使用小寫
// 單字相連字首大寫
// 用有意義的名稱命名

let test=40;
let fontColor='#f63';

// 取得變數 get
console.log(test);
console.log(fontColor);

// 設定變數 set
test=47;
console.log(test);

// 資料類型
let varNumber=1.5; // 數字
let varString="test"; // 字串
let varBool=true; // 布林(true or false)

console.log(varNumber);
console.log(varString);
console.log(varBool);

// typeof獲得資料類型
console.log(typeof varNumber);
console.log(typeof varString);

// 變數運算
// 加減乘除餘**
console.log(10+3);
console.log(10-3);
console.log(10*3);
console.log(10/3);
console.log(10%3); //10除以3的餘數
console.log(10**3); //10的3次方

// 指定運算子(指定符號=)
// 1+2=3數學內的等號 左右兩邊一定相等 由左邊到右邊運算
// =指定 左右兩邊不一定相等 由右邊到左邊運算
let numberTest = 99+1;
console.log(numberTest);
numberTest++;
console.log(numberTest);
numberTest--;
console.log(numberTest);
numberTest += 10;        //適用於+-*%
console.log(numberTest);
numberTest -= 10;
console.log(numberTest);

console.log("%c比較運算子","color:gold");
// > < >= <= == !=(執行結果為布林值)
console.log(100>1);
console.log(100<1);
console.log(100>=1);
console.log(100<=1);
console.log(100==1);
console.log(100!=1);
console.log(100===1); //等於f
console.log(100!==1); //不等於t

// ==與===的差別(嚴格比較 數值與類型都要相同)
let varNumber10=10;
let varString10="10";

console.log(varNumber10==varString10); //結果true
console.log(varNumber10===varString10); //結果false

console.log("%c判斷式","color:gold");
// 判斷式語法
// if(布林值){布林值等於true執行此區塊block}
if(true){
    console.log("這裡是判斷式");
}

var score = 100;
// if要在最上方
// else if 無限次數
// else 要在最下方
if(score>=60){
    console.log("及格");
}
else if(score>=50){
    console.log("補考");
}
else{
    console.log("你被當了");
}

// 練習:判斷式
var hp = 100;
if(hp>=60){
    console.log("安全");
}
else if(hp>0){
    console.log("警告");
}
else{
    console.log("死亡");
}

console.log("%c迴圈","color:gold");
// 迴圈語法:
// for(起始值;條件;遞增或遞減)
for(let index=0;index<10;index++){
    console.log("迴圈");
}

// 變數
let letCount=1;
letCount=2;
letCount=3;
// const 常數
const constCount=1;
//  constCount=2; //產生錯誤 原因:常數不可更改

// 不可重新定義
// let letCount=10; //產生錯誤 原因:重複宣告
// const constCount=10; //產生錯誤 原因:重複宣告

// 常數命名習慣會使用全大寫並使用底線區隔
const PI=3.14159;
const WEB_FONT_SIZE=24;

// 變數var(variable)
var varCount=1;
varCount=123; //可重複賦予值
var varCount=3; //可重新定義(不建議)
console.log(varCount);

// 作用域 Scope{}
// let與const的作用域都在{}區塊內
{
    let letTest=1;
    const constTest=1;
    var varTest=1;
    console.log("let:",letTest);
    console.log("const:",constTest);
    console.log("var:",varTest);
}

// console.log("let:",letTest);      //錯誤:超出作用域
// console.log("const:",constTest);  //錯誤:超出作用域
console.log("var:",varTest);         //只有var可以超出作用域

console.log("%cfunction 函式 方法或功能","color:gold");
// 函式語法
// function 函式名稱(){}
function logLine(){
    console.log("%c---我是分隔線---","color:gold");
}

// 函式需要被呼叫:函式名稱()
logLine();
logLine();
logLine();
logLine();
logLine();

// 對照組(比較不適合的寫法)
function logLineRed(){
    console.log("%c---我是分隔線---","color:red");
}

function logLineGreen(){
    console.log("%c---我是分隔線---","color:green");
}

logLineRed();
logLineGreen();

// 城市要注意的事情 思考未來的維護性 擴充性 可讀性

// 比較適合的寫法
// function 函式名稱(參數1,參數2,...){
function logLineWithColor(color){
    console.log("%c---我是分隔線---",`color:${color}`);
}

logLineWithColor("red");
logLineWithColor("green");
logLineWithColor("blue");

// 參數的預設值
function logLineWithColor(color="black"){
    console.log("%c---我是分隔線---",`color:${color}`);
}

logLineWithColor("red");
// 不給參數會直接使用預設值
logLineWithColor();

console.log("%c表達式函式","color:gold");

// 表達式函式語法
// 會比較常使用
const print =function(color="red"){
    console.log("%c測試",`color:${color}`);
}

// 變數名稱(參數)
print("green");
print("gray");

const printMessage=function(color="red",message="這是預設文字"){
    console.log(`%c${message}`,`color:${color}`);
}

printMessage();
printMessage("green");
printMessage("green","這是測試文字");
// 想要使用預設顏色 文字要使用"訊息"index.html
printMessage("這是測試文字");                 //錯誤
printMessage(undefined,"這是測試文字");       //正確結果

console.log("%c函式回傳值","color:gold");

// 有傳回值的函式 必須使用一個return關鍵字將值傳回
function double(number){
    return number*2;
}

// 使用方法一 用變數將傳回值儲存
const result=double(10);
console.log(result);

// 使用方法二 直接將傳回函式當作數值使用
console.log(double(7));

// 表達式傳回函式
// 平方函式
const square=function(number){
    return number*number;
}

console.log(square(5));

// 提升hosting
// 在定義函數以前就能夠呼叫
// 一般函式會提升
console.log("一般函式:",Math.floor(BMI(60,1.68)));
// 表達式函式不會提升 不能在定義以前呼叫(相對安全)
// console.log("表達式函式:",Math.floor(BmiExpression(60,1.68)));
// console.log("箭頭函式:",Math.floor(bmiArrow(60,1.68)));


// 練習題
// BMI=體重/身高^2
// 一般函式
function BMI(weight,height){
    return weight/square(height);
}
console.log(BMI(60,1.68));
console.log(BMI(70,1.83));

// 表達函式
const BmiExpression=function(weight,height){
    return weight/square(height);
}
// Math.floor可以去掉小數點
console.log(Math.floor(BmiExpression(60,1.68)));
console.log(Math.floor(BmiExpression(70,1.83)));

// 箭頭函式 =>
const bmiArrow=(weight,height)=>{
    return weight/square(height);
}

console.log(Math.floor(bmiArrow(60,1.68)));
console.log(Math.floor(bmiArrow(70,1.83)));