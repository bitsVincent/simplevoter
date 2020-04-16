### 关于 UI 界面美化
您只需要操作两个文件：`vote.js`和`votepage.html`.
根据JSON动态生成表单的主逻辑是读取json内的表单数据，再直接以元素形式添加到对应位置，详见：

# 在 vote.js中
`var htmlstr ="<input type='checkbox' class='_selections' value=s"+i+" />"+infos+"<br>"`
`$("#voteform").append(htmlstr);`

`type`属性和`class`属性的`_selections`不可更改，其他属性均可以更改。
标签不可更改，请在属性中自行添加你的美化代码
# 在 votepage.html中
在`<div id="voteform>`下的元素均会由vote.js生成，故要全体美化可以考虑加载这个div上。
下方的submit按钮除了`onclick`属性不可更改之外，其他随便改。

