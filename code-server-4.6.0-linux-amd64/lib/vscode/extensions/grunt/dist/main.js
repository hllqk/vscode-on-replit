(()=>{"use strict";var e={403:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var o,s,n,i,a,c=r(622),l=r(747),u=Object.prototype.toString;function d(e){return void 0!==e}function f(e){return"[object Number]"===u.call(e)}function g(e){return"[object String]"===u.call(e)}function h(e){return JSON.parse(l.readFileSync(e,"utf8"))}function p(e,t){return a&&(e="［"+e.replace(/[aouei]/g,"$&$&")+"］"),0===t.length?e:e.replace(/\{(\d+)\}/g,(function(e,r){var o=r[0],s=t[o],n=e;return"string"==typeof s?n=s:"number"!=typeof s&&"boolean"!=typeof s&&null!=s||(n=String(s)),n}))}function v(e){return function(t,r){for(var o=[],s=2;s<arguments.length;s++)o[s-2]=arguments[s];return f(t)?t>=e.length?void console.error("Broken localize call found. Index out of bounds. Stacktrace is\n: "+new Error("").stack):p(e[t],o):g(r)?(console.warn("Message "+r+" didn't get externalized correctly."),p(r,o)):void console.error("Broken localize call found. Stacktrace is\n: "+new Error("").stack)}}function k(e,t){for(var r=[],o=2;o<arguments.length;o++)r[o-2]=arguments[o];return p(t,r)}function m(e,t){return n[e]=t,t}function w(e){try{return function(e){var t=h(c.join(e,"nls.metadata.json")),r=Object.create(null);for(var o in t){var s=t[o];r[o]=s.messages}return r}(e)}catch(e){return void console.log("Generating default bundle from meta data failed.",e)}}function b(e,t){var r;if(!0===i.languagePackSupport&&void 0!==i.cacheRoot&&void 0!==i.languagePackId&&void 0!==i.translationsConfigFile&&void 0!==i.translationsConfig)try{r=function(e,t){var r,o,s,n=c.join(i.cacheRoot,e.id+"-"+e.hash+".json"),a=!1,u=!1;try{return r=JSON.parse(l.readFileSync(n,{encoding:"utf8",flag:"r"})),o=n,s=new Date,l.utimes(o,s,s,(function(){})),r}catch(e){if("ENOENT"===e.code)u=!0;else{if(!(e instanceof SyntaxError))throw e;console.log("Syntax error parsing message bundle: "+e.message+"."),l.unlink(n,(function(e){e&&console.error("Deleting corrupted bundle "+n+" failed.")})),a=!0}}if(!(r=function(e,t){var r=i.translationsConfig[e.id];if(r){var o=h(r).contents,s=h(c.join(t,"nls.metadata.json")),n=Object.create(null);for(var a in s){var l=s[a],u=o[e.outDir+"/"+a];if(u){for(var d=[],f=0;f<l.keys.length;f++){var p=l.keys[f],v=u[g(p)?p:p.key];void 0===v&&(v=l.messages[f]),d.push(v)}n[a]=d}else n[a]=l.messages}return n}}(e,t))||a)return r;if(u)try{l.writeFileSync(n,JSON.stringify(r),{encoding:"utf8",flag:"wx"})}catch(e){if("EEXIST"===e.code)return r;throw e}return r}(e,t)}catch(e){console.log("Load or create bundle failed ",e)}if(!r){if(i.languagePackSupport)return w(t);var o=function(e){for(var t=i.locale;t;){var r=c.join(e,"nls.bundle."+t+".json");if(l.existsSync(r))return r;var o=t.lastIndexOf("-");t=o>0?t.substring(0,o):void 0}if(void 0===t&&(r=c.join(e,"nls.bundle.json"),l.existsSync(r)))return r}(t);if(o)try{return h(o)}catch(e){console.log("Loading in the box message bundle failed.",e)}r=w(t)}return r}function S(e){if(!e)return k;var t=c.extname(e);if(t&&(e=e.substr(0,e.length-t.length)),i.messageFormat===o.both||i.messageFormat===o.bundle){var r=function(e){for(var t,r=c.dirname(e);t=c.join(r,"nls.metadata.header.json"),!l.existsSync(t);){var o=c.dirname(r);if(o===r){t=void 0;break}r=o}return t}(e);if(r){var s=c.dirname(r),u=n[s];if(void 0===u)try{var f=JSON.parse(l.readFileSync(r,"utf8"));try{var g=b(f,s);u=m(s,g?{header:f,nlsBundle:g}:null)}catch(e){console.error("Failed to load nls bundle",e),u=m(s,null)}}catch(e){console.error("Failed to read header file",e),u=m(s,null)}if(u){var p=e.substr(s.length+1).replace(/\\/g,"/"),w=u.nlsBundle[p];return void 0===w?(console.error("Messages for file "+e+" not found. See console for details."),function(){return"Messages not found."}):v(w)}}}if(i.messageFormat===o.both||i.messageFormat===o.file)try{var S=h(function(e){var t;if(i.cacheLanguageResolution&&t)t=t;else{if(a||!i.locale)t=".nls.json";else for(var r=i.locale;r;){var o=".nls."+r+".json";if(l.existsSync(e+o)){t=o;break}var s=r.lastIndexOf("-");s>0?r=r.substring(0,s):(t=".nls.json",r=null)}i.cacheLanguageResolution&&(t=t)}return e+t}(e));return Array.isArray(S)?v(S):d(S.messages)&&d(S.keys)?v(S.messages):(console.error("String bundle '"+e+"' uses an unsupported format."),function(){return"File bundle has unsupported format. See console for details"})}catch(e){"ENOENT"!==e.code&&console.error("Failed to load single file bundle",e)}return console.error("Failed to load message bundle for file "+e),function(){return"Failed to load message bundle. See console for details."}}!function(e){e.file="file",e.bundle="bundle",e.both="both"}(o=t.MessageFormat||(t.MessageFormat={})),function(e){e.is=function(e){var t=e;return t&&d(t.key)&&d(t.comment)}}(s||(s={})),function(){if(i={locale:void 0,languagePackSupport:!1,cacheLanguageResolution:!0,messageFormat:o.bundle},g(process.env.VSCODE_NLS_CONFIG))try{var e=JSON.parse(process.env.VSCODE_NLS_CONFIG);if(g(e.locale)&&(i.locale=e.locale.toLowerCase()),(!0===(t=e._languagePackSupport)||!1===t)&&(i.languagePackSupport=e._languagePackSupport),g(e._cacheRoot)&&(i.cacheRoot=e._cacheRoot),g(e._languagePackId)&&(i.languagePackId=e._languagePackId),g(e._translationsConfigFile)){i.translationsConfigFile=e._translationsConfigFile;try{i.translationsConfig=h(i.translationsConfigFile)}catch(t){e._corruptedFile&&l.writeFile(e._corruptedFile,"corrupted","utf8",(function(e){console.error(e)}))}}}catch(e){}var t;a="pseudo"===i.locale,n=Object.create(null)}(),t.loadMessageBundle=S,t.config=function(e){return e&&(g(e.locale)&&(i.locale=e.locale.toLowerCase(),n=Object.create(null)),void 0!==e.messageFormat&&(i.messageFormat=e.messageFormat)),a="pseudo"===i.locale,S}},129:e=>{e.exports=require("child_process")},747:e=>{e.exports=require("fs")},622:e=>{e.exports=require("path")},549:e=>{e.exports=require("vscode")}},t={};function r(o){var s=t[o];if(void 0!==s)return s.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,r),n.exports}var o={};(()=>{var e=o;Object.defineProperty(e,"__esModule",{value:!0}),e.deactivate=e.activate=void 0;const t=r(622),s=r(747),n=r(129),i=r(549),a=r(403).loadMessageBundle(r(622).join(__dirname,"main.ts"));function c(e){return new Promise(((t,r)=>{s.exists(e,(e=>{t(e)}))}))}const l=["build","compile","watch"];function u(e){for(const t of l)if(-1!==e.indexOf(t))return!0;return!1}const d=["test"];function f(e){for(const t of d)if(-1!==e.indexOf(t))return!0;return!1}let g,h;function p(){return g||(g=i.window.createOutputChannel("Grunt Auto Detection")),g}function v(){i.window.showWarningMessage(a(0,null),a(1,null)).then((()=>{p().show(!0)}))}async function k(e){let r;const o=process.platform;return r="win32"===o&&await c(t.join(e,"node_modules",".bin","grunt.cmd"))?t.join(".","node_modules",".bin","grunt.cmd"):"linux"!==o&&"darwin"!==o||!await c(t.join(e,"node_modules",".bin","grunt"))?"grunt":t.join(".","node_modules",".bin","grunt"),r}class m{constructor(e,t){this._workspaceFolder=e,this._gruntCommand=t}get workspaceFolder(){return this._workspaceFolder}isEnabled(){return"on"===i.workspace.getConfiguration("grunt",this._workspaceFolder.uri).get("autoDetect")}start(){const e=t.join(this._workspaceFolder.uri.fsPath,"{node_modules,[Gg]runtfile.js}");this.fileWatcher=i.workspace.createFileSystemWatcher(e),this.fileWatcher.onDidChange((()=>this.promise=void 0)),this.fileWatcher.onDidCreate((()=>this.promise=void 0)),this.fileWatcher.onDidDelete((()=>this.promise=void 0))}async getTasks(){return this.isEnabled()?(this.promise||(this.promise=this.computeTasks()),this.promise):[]}async getTask(e){const t=e.definition,r=t.task;if(r){const e={cwd:this.workspaceFolder.uri.fsPath},o="grunt";return-1===r.indexOf(" ")?new i.Task(t,this.workspaceFolder,r,o,new i.ShellExecution(`${await this._gruntCommand}`,[r,...t.args],e)):new i.Task(t,this.workspaceFolder,r,o,new i.ShellExecution(`${await this._gruntCommand}`,[`"${r}"`,...t.args],e))}}async computeTasks(){const e="file"===this._workspaceFolder.uri.scheme?this._workspaceFolder.uri.fsPath:void 0,r=[];if(!e)return r;if(!await c(t.join(e,"gruntfile.js"))&&!await c(t.join(e,"Gruntfile.js")))return r;const o=`${await this._gruntCommand} --help --no-color`;try{const{stdout:t,stderr:r}=await(s=o,l={cwd:e},new Promise(((e,t)=>{n.exec(s,l,((r,o,s)=>{r&&t({error:r,stdout:o,stderr:s}),e({stdout:o,stderr:s})}))})));r&&(p().appendLine(r),v());const a=[];if(t){const e=t.split(/\r{0,1}\n/);let r=!1,o=!1;for(const t of e)if(0!==t.length)if(r||o){if(r&&!o)if(0===t.indexOf("Tasks run in the order specified"))o=!0;else{const e=/^\s*(\S.*\S)  \S/g.exec(t);if(e&&2===e.length){const t=e[1],r={type:"grunt",task:t},o="grunt",s={cwd:this.workspaceFolder.uri.fsPath},n=-1===t.indexOf(" ")?new i.Task(r,this.workspaceFolder,t,o,new i.ShellExecution(`${await this._gruntCommand} ${t}`,s)):new i.Task(r,this.workspaceFolder,t,o,new i.ShellExecution(`${await this._gruntCommand} "${t}"`,s));a.push(n);const c=t.toLowerCase();u(c)?n.group=i.TaskGroup.Build:f(c)&&(n.group=i.TaskGroup.Test)}}}else 0===t.indexOf("Available tasks")&&(r=!0)}return a}catch(e){const t=p();return e.stderr&&t.appendLine(e.stderr),e.stdout&&t.appendLine(e.stdout),t.appendLine(a(2,null,this.workspaceFolder.name,e.error?e.error.toString():"unknown")),v(),r}var s,l}dispose(){this.promise=void 0,this.fileWatcher&&this.fileWatcher.dispose()}}class w{constructor(){this.detectors=new Map}start(){const e=i.workspace.workspaceFolders;e&&this.updateWorkspaceFolders(e,[]),i.workspace.onDidChangeWorkspaceFolders((e=>this.updateWorkspaceFolders(e.added,e.removed))),i.workspace.onDidChangeConfiguration(this.updateConfiguration,this)}dispose(){this.taskProvider&&(this.taskProvider.dispose(),this.taskProvider=void 0),this.detectors.clear()}updateWorkspaceFolders(e,t){for(const e of t){const t=this.detectors.get(e.uri.toString());t&&(t.dispose(),this.detectors.delete(e.uri.toString()))}for(const t of e){const e=new m(t,k(t.uri.fsPath));this.detectors.set(t.uri.toString(),e),e.isEnabled()&&e.start()}this.updateProvider()}updateConfiguration(){for(const e of this.detectors.values())e.dispose(),this.detectors.delete(e.workspaceFolder.uri.toString());const e=i.workspace.workspaceFolders;if(e)for(const t of e)if(!this.detectors.has(t.uri.toString())){const e=new m(t,k(t.uri.fsPath));this.detectors.set(t.uri.toString(),e),e.isEnabled()&&e.start()}this.updateProvider()}updateProvider(){if(!this.taskProvider&&this.detectors.size>0){const e=this;this.taskProvider=i.tasks.registerTaskProvider("grunt",{provideTasks:()=>e.getTasks(),resolveTask:t=>e.getTask(t)})}else this.taskProvider&&0===this.detectors.size&&(this.taskProvider.dispose(),this.taskProvider=void 0)}getTasks(){return this.computeTasks()}computeTasks(){if(0===this.detectors.size)return Promise.resolve([]);if(1===this.detectors.size)return this.detectors.values().next().value.getTasks();{const e=[];for(const t of this.detectors.values())e.push(t.getTasks().then((e=>e),(()=>[])));return Promise.all(e).then((e=>{const t=[];for(const r of e)r&&r.length>0&&t.push(...r);return t}))}}async getTask(e){if(0!==this.detectors.size){if(1===this.detectors.size)return this.detectors.values().next().value.getTask(e);if(e.scope!==i.TaskScope.Workspace&&e.scope!==i.TaskScope.Global&&e.scope){const t=this.detectors.get(e.scope.uri.toString());if(t)return t.getTask(e)}}}}e.activate=function(e){h=new w,h.start()},e.deactivate=function(){h.dispose()}})();var s=exports;for(var n in o)s[n]=o[n];o.__esModule&&Object.defineProperty(s,"__esModule",{value:!0})})();
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/2062a59ca1a586d8a6e7bf483841085a94c440a4/extensions/grunt/dist/main.js.map