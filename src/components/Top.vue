<template>
<div>
	<header class="am-topbar am-topbar-inverse admin-header">
	    <div class="am-topbar-brand">
	        <a href="javascript:;" class="tpl-logo">
	            <h2>米瑞科尔资源管理</h2>
	        </a>
	    </div>
	    <div class="am-icon-list tpl-header-nav-hover-ico am-fl am-margin-right">
	    </div>

	    <div class="am-collapse am-topbar-collapse" id="topbar-collapse">
	        <ul class="am-nav am-nav-pills am-topbar-nav am-topbar-right admin-header-list tpl-header-list">
	            <li class="am-dropdown" data-am-dropdown data-am-dropdown-toggle>
	                <a class="am-dropdown-toggle tpl-header-list-link" href="javascript:;">
	                    <span class="tpl-header-list-user-nick">欢迎, admin &nbsp;&nbsp;</span><span class="am-icon-caret-down"></span><span class="tpl-header-list-user-ico"> <img src="src/assets/img/user01.png"></span>
	                </a>
	                <ul class="am-dropdown-content">
	                    <li><a href="set_a.html"><span class="am-icon-cog"></span> 设置</a></li>
	                    <li><a href="#"><span class="am-icon-power-off"></span> 退出</a></li>
	                </ul>
	            </li>
	            <li class="am-hide-sm-only">
	                <a href="javascript:;" id="admin-fullscreen" class="tpl-header-list-link"><span class="am-icon-arrows-alt"></span><span class="admin-fullText">开启全屏</span></a>
	            </li>

	        </ul>
	    </div>
	</header>
</div>
</template>

<script>
export default {
	data:{
		return{
			user:
		}
	}
}
</script>
<style scoped>
</style>
