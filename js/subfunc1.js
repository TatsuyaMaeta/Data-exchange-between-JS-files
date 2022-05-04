// このファイルは直接htmlファイルに呼び出されることはなく、
// func3.jsに呼び出されて使用されています

const txt = "subfuncのファイルの変数です";
let testBool = true;
let hoge = f1_greeting();
let a = { name: "john", age: 23 };
let arr = { txt, testBool, a};

alert(`func3に読み込ませているsubfunc1のアラートを実行しています。${hoge}`);

console.log("subfunc1のファイルです");
//func3にいく変数

// export defaultすることでモジュールにデータを渡している
// その時は1つのオブジェクトにして渡すこと
// 既に変数のobjにしているものでもいいし、
// exportする時点でオブジェクトにしている書き方でもどちらでも大丈夫

// export default arr;
export default { txt, testBool, a };
