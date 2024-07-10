// 変数numに1以上の正の数を代入
let num = 15; // 例として15を使用

// 3と5の倍数の場合
if (num % 3 === 0 && num % 5 === 0) {
    console.log("3と5の倍数です");
}
// 3の倍数の場合
else if (num % 3 === 0) {
    console.log("3の倍数です");
}
// 5の倍数の場合
else if (num % 5 === 0) {
    console.log("5の倍数です");
}
// 上記いずれでもない場合
else {
    console.log(num);
}