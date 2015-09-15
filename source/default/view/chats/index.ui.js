//related to index.ui
var storage = sm("do_Storage");
var listdata = mm("do_ListData");
var listview = ui("listview");
var json_path = "data://chats/chat.json";//本地缓存的数据

if (storage.fileExist(json_path)) {
	storage.readFile(json_path, function(data, e) {
		//deviceone.print(JSON.stringify(data));
		listdata.addData(data);
		listview.bindItems(listdata);
		listview.refreshItems();
	})
}

var page = sm("do_Page");
page.on("loaded",function(){
	//这个页面加载完显示出来后触发这个事件
	//我们可以在这个事件里去获取最新的网络数据，来更新listview和data/chats/chat.json
});



