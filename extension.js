// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
var vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "vscode-insert-date" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    // var disposable = vscode.commands.registerCommand('extension.sayHello', function () {
    //     // The code you place here will be executed every time your command is executed

    //     // Display a message box to the user
    //     vscode.window.showInformationMessage('Hello World!');
    // });

    vscode.commands.registerCommand('extension.insertdate', function () {
        vscode.window.activeTextEditor.edit(function (editBuilder) {
            
            //日付を取得して、Date object から文字列にへ変換し dateString に格納
            //0x20 でスペースを追加
            var dt = new Date();
            var dateString = dt.toLocaleString() + "\x20";

            //現在のカーソル位置(Line, character) を取得
            var selection = vscode.window.activeTextEditor.selection;
            var startLine = selection.start.line;
            var startCharacter = selection.start.character;

            //取得した Line と character を引数に vscode.Potion(); を実行して .intert に渡して done!
            editBuilder.insert(new vscode.Position(startLine, startCharacter), dateString);
        });
		// Display a message box to the user
		// vscode.window.showInformationMessage('Edit applied!');
	});

    // context.subscriptions.push(disposable);
}
exports.activate = activate;