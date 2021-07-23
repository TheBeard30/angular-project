import {NgxMonacoEditorConfig} from "ngx-monaco-editor";
import {SqlMonarch} from "../model/sql-config.model";
declare const monaco: any;


export const monacoConfig: NgxMonacoEditorConfig = {
  baseUrl: './assets',
  onMonacoLoad: () => {
    const sqlMonarch = new SqlMonarch();
    //设置自定义语言名称
    monaco.languages.register({ id : 'mySql' });
    //注册自定义语言详细配置
    monaco.languages.setMonarchTokensProvider('mySql', sqlMonarch.language);

    //自定义注册主题样式及配置
    monaco.editor.defineTheme('myTheme', {
      base: 'vs-dark',
      inherit: true,
      //自定义文本样式
      rules: [
        { token: 'lihaoxun', foreground: 'FF69B4', fontStyle: 'italic', underline: true}
      ]

    } as any);
    // 切换主题
    monaco.editor.setTheme('myTheme');

    const legend = {
      tokenTypes: ['lihaoxun'],
      tokenModifiers: []
    };

    //设置语意标注
    monaco.languages.registerDocumentSemanticTokensProvider('mySql', {  //注册一个语意令牌
      getLegend: () => {
        return legend;
      },
      provideDocumentSemanticTokens: (model, lastResultId, token) => {
        const lines = model.getLinesContent();
        const data = [];
        let prevLine = 0;
        let prevChar = 0;
        for (let i = 0; i < lines.length; i++) {
          let line = lines[i].split(/\s+/);
          for (let match of line) {
            let type = legend.tokenTypes.indexOf(match);
            if (type === -1) {
              continue;
            }
            let matchIndex = lines[i].indexOf(match);
            data.push(
              i - prevLine,
              prevLine === i ? matchIndex - prevChar : matchIndex,
              match.length,
              type,
              6
            );
            prevLine = i;
            prevChar = matchIndex;
          }
        }
        return {
          data: new Uint32Array(data),
          resultId: null
        } as any;
      },
      releaseDocumentSemanticTokens: function (resultId: any) { }

    });

    const list = [];

    sqlMonarch.language.keywords.forEach(word => {
      const suggestion = {
        label: word,
        kind: monaco.languages.CompletionItemKind.Text,
        insertText: word
      };
      list.push(suggestion);
    });


    monaco.languages.registerCompletionItemProvider('mySql', {
      provideCompletionItems: () => {
        let suggestions = [...list];
        return { suggestions: suggestions };
      }
    });




  }
};
