(()=>{"use strict";var e={800:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.config=t.loadMessageBundle=t.localize=t.format=t.setPseudo=t.isPseudo=t.isDefined=t.BundleFormat=t.MessageFormat=void 0;var o,r,i,a=n(926);function s(e){return void 0!==e}function c(e,n){return t.isPseudo&&(e="［"+e.replace(/[aouei]/g,"$&$&")+"］"),0===n.length?e:e.replace(/\{(\d+)\}/g,(function(e,t){var o=t[0],r=n[o],i=e;return"string"==typeof r?i=r:"number"!=typeof r&&"boolean"!=typeof r&&null!=r||(i=String(r)),i}))}(i=t.MessageFormat||(t.MessageFormat={})).file="file",i.bundle="bundle",i.both="both",(r=t.BundleFormat||(t.BundleFormat={})).standalone="standalone",r.languagePack="languagePack",function(e){e.is=function(e){var t=e;return t&&s(t.key)&&s(t.comment)}}(o||(o={})),t.isDefined=s,t.isPseudo=!1,t.setPseudo=function(e){t.isPseudo=e},t.format=c,t.localize=function(e,t){for(var n=[],o=2;o<arguments.length;o++)n[o-2]=arguments[o];return c(t,n)},t.loadMessageBundle=function(e){return a.default().loadMessageBundle(e)},t.config=function(e){return a.default().config(e)}},926:(e,t)=>{var n;function o(){if(void 0===n)throw new Error("No runtime abstraction layer installed");return n}Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.install=function(e){if(void 0===e)throw new Error("No runtime abstraction layer provided");n=e}}(o||(o={})),t.default=o},472:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.config=t.loadMessageBundle=void 0;var o=n(622),r=n(747),i=n(926),a=n(800),s=n(800);Object.defineProperty(t,"MessageFormat",{enumerable:!0,get:function(){return s.MessageFormat}}),Object.defineProperty(t,"BundleFormat",{enumerable:!0,get:function(){return s.BundleFormat}});var c,l,u=Object.prototype.toString;function d(e){return"[object Number]"===u.call(e)}function g(e){return"[object String]"===u.call(e)}function h(e){return JSON.parse(r.readFileSync(e,"utf8"))}function f(e){return function(t,n){for(var o=[],r=2;r<arguments.length;r++)o[r-2]=arguments[r];return d(t)?t>=e.length?void console.error("Broken localize call found. Index out of bounds. Stacktrace is\n: "+new Error("").stack):a.format(e[t],o):g(n)?(console.warn("Message "+n+" didn't get externalized correctly."),a.format(n,o)):void console.error("Broken localize call found. Stacktrace is\n: "+new Error("").stack)}}function m(e,t){return c[e]=t,t}function p(e){try{return function(e){var t=h(o.join(e,"nls.metadata.json")),n=Object.create(null);for(var r in t){var i=t[r];n[r]=i.messages}return n}(e)}catch(e){return void console.log("Generating default bundle from meta data failed.",e)}}function w(e,t){var n;if(!0===l.languagePackSupport&&void 0!==l.cacheRoot&&void 0!==l.languagePackId&&void 0!==l.translationsConfigFile&&void 0!==l.translationsConfig)try{n=function(e,t){var n,i,a,s=o.join(l.cacheRoot,e.id+"-"+e.hash+".json"),c=!1,u=!1;try{return n=JSON.parse(r.readFileSync(s,{encoding:"utf8",flag:"r"})),i=s,a=new Date,r.utimes(i,a,a,(function(){})),n}catch(e){if("ENOENT"===e.code)u=!0;else{if(!(e instanceof SyntaxError))throw e;console.log("Syntax error parsing message bundle: "+e.message+"."),r.unlink(s,(function(e){e&&console.error("Deleting corrupted bundle "+s+" failed.")})),c=!0}}if(!(n=function(e,t){var n=l.translationsConfig[e.id];if(n){var r=h(n).contents,i=h(o.join(t,"nls.metadata.json")),a=Object.create(null);for(var s in i){var c=i[s],u=r[e.outDir+"/"+s];if(u){for(var d=[],f=0;f<c.keys.length;f++){var m=c.keys[f],p=u[g(m)?m:m.key];void 0===p&&(p=c.messages[f]),d.push(p)}a[s]=d}else a[s]=c.messages}return a}}(e,t))||c)return n;if(u)try{r.writeFileSync(s,JSON.stringify(n),{encoding:"utf8",flag:"wx"})}catch(e){if("EEXIST"===e.code)return n;throw e}return n}(e,t)}catch(e){console.log("Load or create bundle failed ",e)}if(!n){if(l.languagePackSupport)return p(t);var i=function(e){for(var t=l.language;t;){var n=o.join(e,"nls.bundle."+t+".json");if(r.existsSync(n))return n;var i=t.lastIndexOf("-");t=i>0?t.substring(0,i):void 0}if(void 0===t&&(n=o.join(e,"nls.bundle.json"),r.existsSync(n)))return n}(t);if(i)try{return h(i)}catch(e){console.log("Loading in the box message bundle failed.",e)}n=p(t)}return n}function v(e){if(!e)return a.localize;var t=o.extname(e);if(t&&(e=e.substr(0,e.length-t.length)),l.messageFormat===a.MessageFormat.both||l.messageFormat===a.MessageFormat.bundle){var n=function(e){for(var t,n=o.dirname(e);t=o.join(n,"nls.metadata.header.json"),!r.existsSync(t);){var i=o.dirname(n);if(i===n){t=void 0;break}n=i}return t}(e);if(n){var i=o.dirname(n),s=c[i];if(void 0===s)try{var u=JSON.parse(r.readFileSync(n,"utf8"));try{var d=w(u,i);s=m(i,d?{header:u,nlsBundle:d}:null)}catch(e){console.error("Failed to load nls bundle",e),s=m(i,null)}}catch(e){console.error("Failed to read header file",e),s=m(i,null)}if(s){var g=e.substr(i.length+1).replace(/\\/g,"/"),p=s.nlsBundle[g];return void 0===p?(console.error("Messages for file "+e+" not found. See console for details."),function(){return"Messages not found."}):f(p)}}}if(l.messageFormat===a.MessageFormat.both||l.messageFormat===a.MessageFormat.file)try{var v=h(function(e){var t;if(l.cacheLanguageResolution&&t)t=t;else{if(a.isPseudo||!l.language)t=".nls.json";else for(var n=l.language;n;){var o=".nls."+n+".json";if(r.existsSync(e+o)){t=o;break}var i=n.lastIndexOf("-");i>0?n=n.substring(0,i):(t=".nls.json",n=null)}l.cacheLanguageResolution&&(t=t)}return e+t}(e));return Array.isArray(v)?f(v):a.isDefined(v.messages)&&a.isDefined(v.keys)?f(v.messages):(console.error("String bundle '"+e+"' uses an unsupported format."),function(){return"File bundle has unsupported format. See console for details"})}catch(e){"ENOENT"!==e.code&&console.error("Failed to load single file bundle",e)}return console.error("Failed to load message bundle for file "+e),function(){return"Failed to load message bundle. See console for details."}}function C(e){return e&&(g(e.locale)&&(l.locale=e.locale.toLowerCase(),l.language=l.locale,c=Object.create(null)),void 0!==e.messageFormat&&(l.messageFormat=e.messageFormat),e.bundleFormat===a.BundleFormat.standalone&&!0===l.languagePackSupport&&(l.languagePackSupport=!1)),a.setPseudo("pseudo"===l.locale),v}!function(){if(l={locale:void 0,language:void 0,languagePackSupport:!1,cacheLanguageResolution:!0,messageFormat:a.MessageFormat.bundle},g(process.env.VSCODE_NLS_CONFIG))try{var e=JSON.parse(process.env.VSCODE_NLS_CONFIG),t=void 0;if(e.availableLanguages){var n=e.availableLanguages["*"];g(n)&&(t=n)}if(g(e.locale)&&(l.locale=e.locale.toLowerCase()),void 0===t?l.language=l.locale:"en"!==t&&(l.language=t),function(e){return!0===e||!1===e}(e._languagePackSupport)&&(l.languagePackSupport=e._languagePackSupport),g(e._cacheRoot)&&(l.cacheRoot=e._cacheRoot),g(e._languagePackId)&&(l.languagePackId=e._languagePackId),g(e._translationsConfigFile)){l.translationsConfigFile=e._translationsConfigFile;try{l.translationsConfig=h(l.translationsConfigFile)}catch(t){if(e._corruptedFile){var i=o.dirname(e._corruptedFile);r.exists(i,(function(t){t&&r.writeFile(e._corruptedFile,"corrupted","utf8",(function(e){console.error(e)}))}))}}}}catch(e){}a.setPseudo("pseudo"===l.locale),c=Object.create(null)}(),t.loadMessageBundle=v,t.config=C,i.default.install(Object.freeze({loadMessageBundle:v,config:C}))},78:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=n(549),r=(0,n(472).loadMessageBundle)();t.default=class{constructor(e){this.tracker=e.createTracker("codelens")}begin(e){this.config=e,this.config.enableCodeLens&&this.registerCodeLensProvider()}configurationUpdated(e){!1===e.enableCodeLens&&this.codeLensRegistrationHandle?(this.codeLensRegistrationHandle.dispose(),this.codeLensRegistrationHandle=null):!0!==e.enableCodeLens||this.codeLensRegistrationHandle||this.registerCodeLensProvider(),this.config=e}dispose(){this.codeLensRegistrationHandle&&(this.codeLensRegistrationHandle.dispose(),this.codeLensRegistrationHandle=null)}async provideCodeLenses(e,t){if(!this.config||!this.config.enableCodeLens)return null;const n=await this.tracker.getConflicts(e),i=n?.length??0;if(o.commands.executeCommand("setContext","mergeConflictsCount",i),!i)return null;const a=[];return n.forEach((e=>{const t={command:"merge-conflict.accept.current",title:r("acceptCurrentChange","Accept Current Change"),arguments:["known-conflict",e]},n={command:"merge-conflict.accept.incoming",title:r("acceptIncomingChange","Accept Incoming Change"),arguments:["known-conflict",e]},i={command:"merge-conflict.accept.both",title:r("acceptBothChanges","Accept Both Changes"),arguments:["known-conflict",e]},s={command:"merge-conflict.compare",title:r("compareChanges","Compare Changes"),arguments:[e]};a.push(new o.CodeLens(e.range,t),new o.CodeLens(e.range.with(e.range.start.with({character:e.range.start.character+1})),n),new o.CodeLens(e.range.with(e.range.start.with({character:e.range.start.character+2})),i),new o.CodeLens(e.range.with(e.range.start.with({character:e.range.start.character+3})),s))})),a}registerCodeLensProvider(){this.codeLensRegistrationHandle=o.languages.registerCodeLensProvider([{scheme:"file"},{scheme:"vscode-vfs"},{scheme:"untitled"},{scheme:"vscode-userdata"}],this)}}},30:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=n(549),r=n(986),i=(0,n(472).loadMessageBundle)();var a;!function(e){e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards"}(a||(a={})),t.default=class{constructor(e){this.disposables=[],this.tracker=e.createTracker("commands")}begin(){this.disposables.push(this.registerTextEditorCommand("merge-conflict.accept.current",this.acceptCurrent),this.registerTextEditorCommand("merge-conflict.accept.incoming",this.acceptIncoming),this.registerTextEditorCommand("merge-conflict.accept.selection",this.acceptSelection),this.registerTextEditorCommand("merge-conflict.accept.both",this.acceptBoth),this.registerTextEditorCommand("merge-conflict.accept.all-current",this.acceptAllCurrent,this.acceptAllCurrentResources),this.registerTextEditorCommand("merge-conflict.accept.all-incoming",this.acceptAllIncoming,this.acceptAllIncomingResources),this.registerTextEditorCommand("merge-conflict.accept.all-both",this.acceptAllBoth),this.registerTextEditorCommand("merge-conflict.next",this.navigateNext),this.registerTextEditorCommand("merge-conflict.previous",this.navigatePrevious),this.registerTextEditorCommand("merge-conflict.compare",this.compare))}registerTextEditorCommand(e,t,n){return o.commands.registerCommand(e,((...e)=>{if(n&&e.length&&e.every((e=>e&&e.resourceUri)))return n.call(this,e.map((e=>e.resourceUri)));const r=o.window.activeTextEditor;return r&&t.call(this,r,...e)}))}acceptCurrent(e,...t){return this.accept(0,e,...t)}acceptIncoming(e,...t){return this.accept(1,e,...t)}acceptBoth(e,...t){return this.accept(2,e,...t)}acceptAllCurrent(e){return this.acceptAll(0,e)}acceptAllIncoming(e){return this.acceptAll(1,e)}acceptAllCurrentResources(e){return this.acceptAllResources(0,e)}acceptAllIncomingResources(e){return this.acceptAllResources(1,e)}acceptAllBoth(e){return this.acceptAll(2,e)}async compare(e,t){if(!t&&!(t=await this.findConflictContainingSelection(e)))return void o.window.showWarningMessage(i("cursorNotInConflict","Editor cursor is not within a merge conflict"));const n=await this.tracker.getConflicts(e.document);if(!n)return void o.window.showWarningMessage(i("cursorNotInConflict","Editor cursor is not within a merge conflict"));const a=e.document.uri.scheme;let s=t.current.content;const c=n.map((e=>[e.current.content,e.range])),l=n.map((e=>[e.incoming.content,e.range])),u=e.document.uri.with({scheme:r.default.scheme,query:JSON.stringify({scheme:a,range:s,ranges:c})});s=t.incoming.content;const d=u.with({query:JSON.stringify({scheme:a,ranges:l})});let g=0;for(const e of n){if(e.range.isEqual(t.range))break;g+=e.range.end.line-e.range.start.line-(e.incoming.content.end.line-e.incoming.content.start.line)}const h=new o.Range(t.range.start.line-g,t.range.start.character,t.range.start.line-g,t.range.start.character),f=e.document.uri.path,m=f.substring(f.lastIndexOf("/")+1),p=i("compareChangesTitle","{0}: Current Changes ↔ Incoming Changes",m),w=o.workspace.getConfiguration("merge-conflict").get("diffViewPosition"),v={viewColumn:"Beside"===w?o.ViewColumn.Beside:o.ViewColumn.Active,selection:h};"Below"===w&&await o.commands.executeCommand("workbench.action.newGroupBelow"),await o.commands.executeCommand("vscode.diff",u,d,p,v)}navigateNext(e){return this.navigate(e,a.Forwards)}navigatePrevious(e){return this.navigate(e,a.Backwards)}async acceptSelection(e){const t=await this.findConflictContainingSelection(e);if(!t)return void o.window.showWarningMessage(i("cursorNotInConflict","Editor cursor is not within a merge conflict"));let n,r=t.splitter;if(t.commonAncestors.length>0&&(r=t.commonAncestors[0].header),e.selection.active.isBefore(r.start))n=0;else{if(!e.selection.active.isAfter(t.splitter.end))return e.selection.active.isBefore(t.splitter.start)?void o.window.showWarningMessage(i("cursorOnCommonAncestorsRange",'Editor cursor is within the common ancestors block, please move it to either the "current" or "incoming" block')):void o.window.showWarningMessage(i("cursorOnSplitterRange",'Editor cursor is within the merge conflict splitter, please move it to either the "current" or "incoming" block'));n=1}this.tracker.forget(e.document),t.commitEdit(n,e)}dispose(){this.disposables.forEach((e=>e.dispose())),this.disposables=[]}async navigate(e,t){const n=await this.findConflictForNavigation(e,t);if(n)n.canNavigate?n.conflict&&(e.selection=new o.Selection(n.conflict.range.start,n.conflict.range.start),e.revealRange(n.conflict.range,o.TextEditorRevealType.Default)):o.window.showWarningMessage(i("noOtherConflictsInThisFile","No other merge conflicts within this file"));else{if(o.workspace.getConfiguration("merge-conflict").get("autoNavigateNextConflict.enabled"))return;o.window.showWarningMessage(i("noConflicts","No merge conflicts found in this file"))}}async accept(e,t,...n){let r;r="known-conflict"===n[0]?n[1]:await this.findConflictContainingSelection(t),r?(this.tracker.forget(t.document),r.commitEdit(e,t),o.workspace.getConfiguration("merge-conflict").get("autoNavigateNextConflict.enabled")&&this.navigateNext(t)):o.window.showWarningMessage(i("cursorNotInConflict","Editor cursor is not within a merge conflict"))}async acceptAll(e,t){const n=await this.tracker.getConflicts(t.document);n&&0!==n.length?(this.tracker.forget(t.document),await t.edit((o=>n.forEach((n=>{n.applyEdit(e,t.document,o)}))))):o.window.showWarningMessage(i("noConflicts","No merge conflicts found in this file"))}async acceptAllResources(e,t){const n=await Promise.all(t.map((e=>o.workspace.openTextDocument(e)))),r=new o.WorkspaceEdit;for(const t of n){const n=await this.tracker.getConflicts(t);n&&0!==n.length&&(this.tracker.forget(t),n.forEach((n=>{n.applyEdit(e,t,{replace:(e,n)=>r.replace(t.uri,e,n)})})))}o.workspace.applyEdit(r)}async findConflictContainingSelection(e,t){if(t||(t=await this.tracker.getConflicts(e.document)),!t||0===t.length)return null;for(const n of t)if(n.range.contains(e.selection.active))return n;return null}async findConflictForNavigation(e,t,n){if(n||(n=await this.tracker.getConflicts(e.document)),!n||0===n.length)return null;const o=e.selection.active;if(1===n.length)return n[0].range.contains(o)?{canNavigate:!1}:{canNavigate:!0,conflict:n[0]};let r,i,s;if(t===a.Forwards)r=e=>o.isBefore(e.range.start),i=()=>n[0],s=n;else{if(t!==a.Backwards)throw new Error(`Unsupported direction ${t}`);r=e=>o.isAfter(e.range.start),i=()=>n[n.length-1],s=n.slice().reverse()}for(const e of s)if(r(e)&&!e.range.contains(o))return{canNavigate:!0,conflict:e};return{canNavigate:!0,conflict:i()}}}},986:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=n(549);class r{constructor(e){this.context=e}begin(){this.context.subscriptions.push(o.workspace.registerTextDocumentContentProvider(r.scheme,this))}dispose(){}async provideTextDocumentContent(e){try{const{scheme:t,ranges:n}=JSON.parse(e.query),r=await o.workspace.openTextDocument(e.with({scheme:t,query:""}));let i="",a=new o.Position(0,0);n.forEach((e=>{const[t,n]=e,[s,c]=t,[l,u]=n;i+=r.getText(new o.Range(a.line,a.character,l.line,l.character)),i+=r.getText(new o.Range(s.line,s.character,c.line,c.character)),a=new o.Position(u.line,u.character)}));const s=r.lineAt(r.lineCount-1).range.end;return i+=r.getText(new o.Range(a.line,a.character,s.line,s.character)),i}catch(e){return await o.window.showErrorMessage("Unable to show comparison"),null}}}t.default=r,r.scheme="merge-conflict.conflict-diff"},286:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Delayer=void 0,t.Delayer=class{constructor(e){this.defaultDelay=e,this.timeout=null,this.completionPromise=null,this.onSuccess=null,this.task=null}trigger(e,t=this.defaultDelay){return this.task=e,t>=0&&this.cancelTimeout(),this.completionPromise||(this.completionPromise=new Promise((e=>{this.onSuccess=e})).then((()=>{this.completionPromise=null,this.onSuccess=null;const e=this.task();return this.task=null,e}))),(t>=0||null===this.timeout)&&(this.timeout=setTimeout((()=>{this.timeout=null,this.onSuccess(void 0)}),t>=0?t:this.defaultDelay)),this.completionPromise}forceDelivery(){if(!this.completionPromise)return null;this.cancelTimeout();const e=this.completionPromise;return this.onSuccess(void 0),e}isTriggered(){return null!==this.timeout}cancel(){this.cancelTimeout(),this.completionPromise=null}cancelTimeout(){null!==this.timeout&&(clearTimeout(this.timeout),this.timeout=null)}}},807:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.DocumentMergeConflict=void 0,t.DocumentMergeConflict=class{constructor(e){this.range=e.range,this.current=e.current,this.incoming=e.incoming,this.commonAncestors=e.commonAncestors,this.splitter=e.splitter}commitEdit(e,t,n){return n?(this.applyEdit(e,t.document,n),Promise.resolve(!0)):t.edit((n=>this.applyEdit(e,t.document,n)))}applyEdit(e,t,n){if(0===e){const e=t.getText(this.current.content);this.replaceRangeWithContent(e,n)}else if(1===e){const e=t.getText(this.incoming.content);this.replaceRangeWithContent(e,n)}else if(2===e){const e=t.getText(this.current.content),o=t.getText(this.incoming.content);n.replace(this.range,e.concat(o))}}replaceRangeWithContent(e,t){this.isNewlineOnly(e)?t.replace(this.range,""):t.replace(this.range,e)}isNewlineOnly(e){return"\n"===e||"\r\n"===e}}},387:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=n(53),r=n(286);class i{constructor(e,t){this.origins=new Set,this.origins.add(t),this.delayTask=new r.Delayer(e)}addOrigin(e){this.origins.add(e)}hasOrigin(e){return this.origins.has(e)}}class a{constructor(e,t){this.parent=e,this.origin=t}getConflicts(e){return this.parent.getConflicts(e,this.origin)}isPending(e){return this.parent.isPending(e,this.origin)}forget(e){this.parent.forget(e)}}t.default=class{constructor(){this.cache=new Map,this.delayExpireTime=0}getConflicts(e,t){const n=this.getCacheKey(e);if(!n)return Promise.resolve(this.getConflictsOrEmpty(e,[t]));let o=this.cache.get(n);return o?o.addOrigin(t):(o=new i(this.delayExpireTime,t),this.cache.set(n,o)),o.delayTask.trigger((()=>{const t=this.getConflictsOrEmpty(e,Array.from(o.origins));return this.cache?.delete(n),t}))}isPending(e,t){if(!e)return!1;const n=this.getCacheKey(e);if(!n)return!1;const o=this.cache.get(n);return!!o&&o.hasOrigin(t)}createTracker(e){return new a(this,e)}forget(e){const t=this.getCacheKey(e);t&&this.cache.delete(t)}dispose(){this.cache.clear()}getConflictsOrEmpty(e,t){return o.MergeConflictParser.containsConflict(e)?o.MergeConflictParser.scanDocument(e):[]}getCacheKey(e){return e.uri?e.uri.toString():null}}},53:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MergeConflictParser=void 0;const o=n(549),r=n(807),i="<<<<<<<",a="|||||||",s=">>>>>>>";class c{static scanDocument(e){let t=null;const n=[];for(let o=0;o<e.lineCount;o++){const r=e.lineAt(o);if(r&&!r.isEmptyOrWhitespace)if(r.text.startsWith(i)){if(null!==t){t=null;break}t={startHeader:r,commonAncestors:[]}}else if(t&&!t.splitter&&r.text.startsWith(a))t.commonAncestors.push(r);else if(t&&!t.splitter&&"======="===r.text)t.splitter=r;else if(t&&r.text.startsWith(s)){t.endFooter=r;const o=c.scanItemTolMergeConflictDescriptor(e,t);null!==o&&n.push(o),t=null}}return n.filter(Boolean).map((e=>new r.DocumentMergeConflict(e)))}static scanItemTolMergeConflictDescriptor(e,t){if(!t.startHeader||!t.splitter||!t.endFooter)return null;const n=t.commonAncestors[0]||t.splitter;return{current:{header:t.startHeader.range,decoratorContent:new o.Range(t.startHeader.rangeIncludingLineBreak.end,c.shiftBackOneCharacter(e,n.range.start,t.startHeader.rangeIncludingLineBreak.end)),content:new o.Range(t.startHeader.rangeIncludingLineBreak.end,n.range.start),name:t.startHeader.text.substring(i.length+1)},commonAncestors:t.commonAncestors.map(((n,r,i)=>{const s=i[r+1]||t.splitter;return{header:n.range,decoratorContent:new o.Range(n.rangeIncludingLineBreak.end,c.shiftBackOneCharacter(e,s.range.start,n.rangeIncludingLineBreak.end)),content:new o.Range(n.rangeIncludingLineBreak.end,s.range.start),name:n.text.substring(a.length+1)}})),splitter:t.splitter.range,incoming:{header:t.endFooter.range,decoratorContent:new o.Range(t.splitter.rangeIncludingLineBreak.end,c.shiftBackOneCharacter(e,t.endFooter.range.start,t.splitter.rangeIncludingLineBreak.end)),content:new o.Range(t.splitter.rangeIncludingLineBreak.end,t.endFooter.range.start),name:t.endFooter.text.substring(s.length+1)},range:new o.Range(t.startHeader.range.start,t.endFooter.rangeIncludingLineBreak.end)}}static containsConflict(e){if(!e)return!1;const t=e.getText();return t.includes(i)&&t.includes(s)}static shiftBackOneCharacter(e,t,n){if(t.isEqual(n))return t;let r=t.line,i=t.character-1;return i<0&&(r--,i=e.lineAt(r).range.end.character),new o.Position(r,i)}}t.MergeConflictParser=c},330:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=n(549),r=(0,n(472).loadMessageBundle)();t.default=class{constructor(e,t){this.context=e,this.decorations={},this.decorationUsesWholeLine=!0,this.updating=new Map,this.tracker=t.createTracker("decorator")}begin(e){this.config=e,this.registerDecorationTypes(e),o.window.visibleTextEditors.forEach((e=>this.applyDecorations(e))),o.workspace.onDidOpenTextDocument((e=>{this.applyDecorationsFromEvent(e)}),null,this.context.subscriptions),o.workspace.onDidChangeTextDocument((e=>{this.applyDecorationsFromEvent(e.document)}),null,this.context.subscriptions),o.window.onDidChangeVisibleTextEditors((e=>{e.forEach((e=>this.applyDecorations(e)))}),null,this.context.subscriptions)}configurationUpdated(e){this.config=e,this.registerDecorationTypes(e),o.window.visibleTextEditors.forEach((e=>{this.removeDecorations(e),this.applyDecorations(e)}))}registerDecorationTypes(e){Object.keys(this.decorations).forEach((e=>this.decorations[e].dispose())),this.decorations={},e.enableDecorations&&e.enableEditorOverview&&((e.enableDecorations||e.enableEditorOverview)&&(this.decorations["current.content"]=o.window.createTextEditorDecorationType(this.generateBlockRenderOptions("merge.currentContentBackground","editorOverviewRuler.currentContentForeground",e)),this.decorations["incoming.content"]=o.window.createTextEditorDecorationType(this.generateBlockRenderOptions("merge.incomingContentBackground","editorOverviewRuler.incomingContentForeground",e)),this.decorations["commonAncestors.content"]=o.window.createTextEditorDecorationType(this.generateBlockRenderOptions("merge.commonContentBackground","editorOverviewRuler.commonContentForeground",e))),e.enableDecorations&&(this.decorations["current.header"]=o.window.createTextEditorDecorationType({isWholeLine:this.decorationUsesWholeLine,backgroundColor:new o.ThemeColor("merge.currentHeaderBackground"),color:new o.ThemeColor("editor.foreground"),outlineStyle:"solid",outlineWidth:"1pt",outlineColor:new o.ThemeColor("merge.border"),after:{contentText:" "+r("currentChange","(Current Change)"),color:new o.ThemeColor("descriptionForeground")}}),this.decorations["commonAncestors.header"]=o.window.createTextEditorDecorationType({isWholeLine:this.decorationUsesWholeLine,backgroundColor:new o.ThemeColor("merge.commonHeaderBackground"),color:new o.ThemeColor("editor.foreground"),outlineStyle:"solid",outlineWidth:"1pt",outlineColor:new o.ThemeColor("merge.border")}),this.decorations.splitter=o.window.createTextEditorDecorationType({color:new o.ThemeColor("editor.foreground"),outlineStyle:"solid",outlineWidth:"1pt",outlineColor:new o.ThemeColor("merge.border"),isWholeLine:this.decorationUsesWholeLine}),this.decorations["incoming.header"]=o.window.createTextEditorDecorationType({backgroundColor:new o.ThemeColor("merge.incomingHeaderBackground"),color:new o.ThemeColor("editor.foreground"),outlineStyle:"solid",outlineWidth:"1pt",outlineColor:new o.ThemeColor("merge.border"),isWholeLine:this.decorationUsesWholeLine,after:{contentText:" "+r("incomingChange","(Incoming Change)"),color:new o.ThemeColor("descriptionForeground")}})))}dispose(){Object.keys(this.decorations).forEach((e=>{this.decorations[e].dispose()})),this.decorations={}}generateBlockRenderOptions(e,t,n){const r={};return n.enableDecorations&&(r.backgroundColor=new o.ThemeColor(e),r.isWholeLine=this.decorationUsesWholeLine),n.enableEditorOverview&&(r.overviewRulerColor=new o.ThemeColor(t),r.overviewRulerLane=o.OverviewRulerLane.Full),r}applyDecorationsFromEvent(e){for(const t of o.window.visibleTextEditors)t.document===e&&this.applyDecorations(t)}async applyDecorations(e){if(e&&e.document&&this.config&&(this.config.enableDecorations||this.config.enableEditorOverview)&&!this.updating.get(e))try{this.updating.set(e,!0);const t=await this.tracker.getConflicts(e.document);if(-1===o.window.visibleTextEditors.indexOf(e))return;if(0===t.length)return void this.removeDecorations(e);const n={},r=(e,t)=>{n[e]=n[e]||[],n[e].push(t)};t.forEach((e=>{e.current.decoratorContent.isEmpty||r("current.content",e.current.decoratorContent),e.incoming.decoratorContent.isEmpty||r("incoming.content",e.incoming.decoratorContent),e.commonAncestors.forEach((e=>{e.decoratorContent.isEmpty||r("commonAncestors.content",e.decoratorContent)})),this.config.enableDecorations&&(r("current.header",e.current.header),r("splitter",e.splitter),r("incoming.header",e.incoming.header),e.commonAncestors.forEach((e=>{r("commonAncestors.header",e.header)})))})),Object.keys(n).forEach((t=>{const o=this.decorations[t];o&&e.setDecorations(o,n[t])}))}finally{this.updating.delete(e)}}removeDecorations(e){Object.keys(this.decorations).forEach((t=>{const n=this.decorations[t];n&&e.setDecorations(n,[])}))}}},574:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=n(549),r=n(387),i=n(78),a=n(30),s=n(986),c=n(330);t.default=class{constructor(e){this.context=e,this.services=[]}begin(){const e=this.createExtensionConfiguration(),t=new r.default;this.services.push(t,new a.default(t),new i.default(t),new s.default(this.context),new c.default(this.context,t)),this.services.forEach((t=>{t.begin&&t.begin instanceof Function&&t.begin(e)})),o.workspace.onDidChangeConfiguration((()=>{this.services.forEach((e=>{e.configurationUpdated&&e.configurationUpdated instanceof Function&&e.configurationUpdated(this.createExtensionConfiguration())}))}))}createExtensionConfiguration(){if(o.workspace.getConfiguration("git").get("mergeEditor"))return{enableCodeLens:!1,enableDecorations:!1,enableEditorOverview:!1};const e=o.workspace.getConfiguration("merge-conflict"),t=e.get("codeLens.enabled",!0),n=e.get("decorators.enabled",!0);return{enableCodeLens:t,enableDecorations:n,enableEditorOverview:n}}dispose(){this.services.forEach((e=>e.dispose())),this.services=[]}}},747:e=>{e.exports=require("fs")},622:e=>{e.exports=require("path")},549:e=>{e.exports=require("vscode")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}var o={};(()=>{var e=o;Object.defineProperty(e,"__esModule",{value:!0}),e.deactivate=e.activate=void 0;const t=n(574);e.activate=function(e){const n=new t.default(e);n.begin(),e.subscriptions.push(n)},e.deactivate=function(){}})();var r=exports;for(var i in o)r[i]=o[i];o.__esModule&&Object.defineProperty(r,"__esModule",{value:!0})})();
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/2062a59ca1a586d8a6e7bf483841085a94c440a4/extensions/merge-conflict/dist/mergeConflictMain.js.map