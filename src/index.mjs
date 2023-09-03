// const val5 = ["dog","cat"];
// val5[0] = "death";
// console.log(val5);

/*
テンプレート文字列
*/

// const name = "じゃｋ";
// const age = 28;
// const message = `私の名前は${name}です。\n年齢は${age}歳です`; 
// console.log(message);

/**
 * アロー関数
 */
// const func1 = function(str){
//     return str;
// }
// console.log(func1("func1です。"));
// const func2 = (str) => str;
// console.log(func2("func2です。"));

// const func3 = (num1,num2) =>{
//     return num1 + num2;
// };
// console.log(func3(2,10));

/**
 * 分割代入
 */

// const myProfile = {
//     name: "じゃけぇ",
//     age: 11,
// };

// const message1 = `名前は${myProfile.name}。\n 年齢は${myProfile.age}です。`
// console.log(message1);

// const {name,age} = myProfile;
// const message2 = `名前は${name}。\n 年齢は${age}です。`
// console.log(message2);

// const myProfile = ["jake","90"];
// const [name,age] = myProfile;
// const message3 = `名前は${name}。\n年齢は${age}です。`;
// console.log(name);

/**
 * デフォルト値引数
 */

// const sayHello = (name="ゲスト") =>{
//     console.log(`こんんいちは${name}さん.`);
// }
// sayHello();

/**
 * スプレッド構文
 */

// const arr1 = [1,2,3,4];
// // console.log(...arr1);
// const sumFunc = () => {
//     let sum = 0;
//     for(let i=0;i <= arguments.length;i++){
//         sum += i;
//     }
//     return sum;
// }
// console.log(sumFunc(...arr1));
// const arr2 = [1,2,3,4,5];
// const [num1,num2,...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// const arr4 = [10,20];
// const arr5 = [30,40];
// const arr6 = [[...arr4],[...arr5]];
// console.log(arr6);

/**
 * map/filter
 */
const nameArr = ["田中","山田","じゃけぇ"];
// const nameArr2 = nameArr.map((name)=>{
//     return name;
// });

// console.log(nameArr2);
// nameArr.map((name,index)=>console.log(`${index + 1}番目は${name}です`));

// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num,index)=>{
//     return index % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name)=>{
//     if (name === "じゃけぇ"){
//         return name;
//     }else{
//         return `${name}さん`;
//     }
// });
// console.log(newNameArr);

/**
 * 三項演算子
//  */
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : "数値を入力してください。";
// console.log(formattedNum);

// const checkSum = (num1,num2) =>{
//     return num1 + num2 > 100 ? '100を超えています!!' : "許容範囲内です。";
// }

// console.log(checkSum(10,10000));

/**
 * 論理演算子の本当の意味を知ろう
 */

// const flag1 = true;
// const flag2 = false;

// if(flag1 || flag2){
//     console.log("1か2はtrueになります。");
// }

// ||は左側がfalseの場合右側を返す
// const num = 100;
// const fee = num || "金額未設定です。";
// console.log(fee);

// ||は左側がtrueの場合右側を返す
const num2 = null;
const fee2 = num2 && "何か設定されました.";
console.log(fee2);