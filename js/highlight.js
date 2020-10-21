console.log("before codemirror")
var editor = CodeMirror.fromTextArea(document.getElementById("generated-code"), {
    mode: {
        name: "python",
        version: 3,
        singleLineStringErrors: false
    },
    lineNumbers: true,
    indentUnit: 4,
    matchBrackets: true
});
console.log("after codemirror")
$("#generated-code").text(editor.getValue());