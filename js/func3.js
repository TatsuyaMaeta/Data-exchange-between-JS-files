// このJavaScriptのふぁいるは同じディレクトリにあるsubfunc1.jsを読み込んでいます。
// 読み込んだものを使用して関数を実行しています

// import subFuncText from "./subfunc1.js"; //これが必要になります
import subFuncObject from "./subfunc1.js";

console.log(subFuncObject);

let func = () => alert(subFuncObject.txt);

// htmlファイルでidがbtnのタグにクリックイベントをつける。
// どんなイベントか→5行目のfunc関数を実行する(アロー関数)
document.getElementById("btn").addEventListener("click", func);

console.log("func3のファイルです");

// export default { func };
