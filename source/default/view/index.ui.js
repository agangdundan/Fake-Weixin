/*******************************************************************************
 * Author : and
 ******************************************************************************/
var viewshower = ui("viewshower");
var page = sm("do_Page");

// 为viewshower增加4个子页面
viewshower.addViews([ {
	id : "chats",// 页面的标示
	path : "source://view/chats/index.ui"// 页面的路径
}, {
	id : "contacts",
	path : "source://view/contacts/index.ui"
}, {
	id : "discover",
	path : "source://view/discover/index.ui"
}, {
	id : "me",
	path : "source://view/me/index.ui"
} ]);
// 初始化先显示第一个页面
viewshower.showView("chats");

var button1 = ui("do_Button_1");
button1.on("touch", function() {
	viewshower.showView("chats");
});

var button2 = ui("do_Button_2");
button2.on("touch", function() {
	viewshower.showView("contacts");
});

var button3 = ui("do_Button_3");
button3.on("touch", function() {
	viewshower.showView("discover");
});

var button4 = ui("do_Button_4");
button4.on("touch", function() {
	viewshower.showView("me");
});
