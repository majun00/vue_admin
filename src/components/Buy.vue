<template>
<div>
	<div class="tpl-content-wrapper">
            <ol class="am-breadcrumb">
                <li><router-link to="/" class="am-icon-home">首页</router-link></li>
                <li class="am-active"> 购货记录表</li>
            </ol>
            <div class="tpl-portlet-components">
                <div class="portlet-title">
                    <div class="caption font-green bold">
                        <span class=""></span> 购货记录表
                    </div>
                    

                </div>
                <div class="tpl-block">
                    <div class="am-g" style="font-size: 14px;">
                        <form action="">
                            <div class="am-u-sm-12 am-u-md-3">
                                <div class="am-form-group">
                                    <div class="tpl-portlet-input tpl-fz-ml">
                                        <div class="portlet-input input-small input-inline">
                                            <div class="input-icon right">
                                                <i class="am-icon-search"></i>
                                                <input type="text" class="form-control form-control-solid" style="float: left;" placeholder="搜索..."> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="am-u-sm-12 am-u-md-1" style="padding-top: 5px;">
                                <span>时间 :</span>
                            </div>
                            <div class="am-u-sm-12 am-u-md-2">
                                  <div class="am-form-group am-form-icon">
                                    <i class="am-icon-calendar"></i>
                                    <input type="date" class="am-form-field" placeholder="日期" style="font-size: 14px;height: 32px;">
                                  </div>
                            </div>
                            <div class="am-u-sm-12 am-u-md-1" style="padding-top: 5px;">
                                <span> -- </span>
                            </div>
                            <div class="am-u-sm-12 am-u-md-2">
                                <div class="am-form-group am-form-icon">
                                  <i class="am-icon-calendar"></i>
                                  <input type="date" class="am-form-field" placeholder="日期" style="font-size: 14px;height: 32px;">
                                </div>
                            </div>
                            <div class="am-u-sm-12 am-u-md-3">
                                <div class="am-btn-toolbar">
                                    <div class="am-btn-group am-btn-group-xs">
                                        <button type="button" class="am-btn am-btn-default am-btn-secondary"><span class="am-icon-save"></span> 查询</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="am-g otable">
                        <div class="am-u-sm-12">
                            <form class="am-form" style="background: #f1f1f1;border: 1px solid #e8e8e8">
                                <table class="am-table am-table-striped am-table-hover table-main">
                                    <thead>
                                        <tr>
                                            <th class="table-check"><input type="checkbox" class="tpl-table-fz-check"></th>
                                            <th class="table-id"></th>
                                            <th class="table-title">单据日期</th>
                                            <th class="table-date am-hide-sm-only">单据编号</th>
                                            <th class="table-date am-hide-sm-only">供应商</th>
                                            <th class="table-date am-hide-sm-only">购货金额</th>
                                            <th class="table-date am-hide-sm-only">优惠后金额</th>
                                            <th class="table-date am-hide-sm-only">已付款</th>
                                            <th class="table-date am-hide-sm-only">付款状态</th>
                                            <th class="table-date am-hide-sm-only">制单人</th>
                                            <th class="table-set">操作</th>
                                            <th class="table-date am-hide-sm-only">备注</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><input type="checkbox"></td>
                                            <td style="width: 20px">1</td>
                                            <td>1</td>
                                            <td>1</td>
                                            <td class="am-hide-sm-only">1</td>
                                            <td class="am-hide-sm-only">1</td>
                                            <td class="am-hide-sm-only">1</td>
                                            <td class="am-hide-sm-only">1</td>
                                            <td class="am-hide-sm-only">1</td>
                                            <td class="am-hide-sm-only">1</td>
                                            <td style="width: 90px">
                                                <div class="am-btn-toolbar">
                                                    <div class="am-btn-group am-btn-group-xs">
                                                        <router-link  to="/buydetail"  style="height: 37px;padding-top: 10px;" class="am-btn am-btn-default am-btn-xs am-text-secondary table_edit"><span class="am-icon-pencil-square-o"></span></router-link>
                                                        <!-- <button class="am-btn am-btn-default am-btn-xs am-hide-sm-only"><span class="am-icon-copy"></span> 复制</button>
 -->                                                        <button style="height: 37px" class="am-btn am-btn-default am-btn-xs am-text-danger am-hide-sm-only table_delete"><span class="am-icon-trash-o"></span></button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="am-hide-sm-only" style="">1</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <router-link to="/buydetail" class="am-btn am-btn-default am-btn-warning" style="color: #fff"><span class="am-icon-archive"></span> 新增</router-link>

                                <div class="am-cf">
                                    <div class="" style="padding-left: 35%;margin-top: 100px;">
                                        <ul class="am-pagination tpl-pagination">
                                            <li class="am-disabled"><a href="#">«</a></li>
                                            <li class="am-active"><a href="#">1</a></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#">4</a></li>
                                            <li><a href="#">5</a></li>
                                            <li><a href="#">»</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <hr>
                            </form>
                        </div>

                        
                    </div>
                </div>
                <div class="tpl-alert"></div>
            </div>
        </div>
</div>
</template>

<script>
export default {
  // name: 'header',
  data () {
    return { }
  }
}
</script>

<style scoped>

</style>