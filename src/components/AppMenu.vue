<template>
<div>
	<div class="tpl-left-nav tpl-left-nav-hover">
            <div class="tpl-left-nav-list">
                <ul class="tpl-left-nav-menu omenu">
                    <li class="tpl-left-nav-item">
                    	<router-link to="/" class="nav-link active">
                            <i class="am-icon-home"></i>
                            <span>首页</span>
                        </router-link>
                    </li>

                    <li class="tpl-left-nav-item">
                        <a href="javascript:;" class="nav-link tpl-left-nav-link-list">
                            <i class="am-icon-shopping-cart"></i>
                            <span>购货</span>
                            <i class="am-icon-angle-right tpl-left-nav-more-ico am-fr am-margin-right"></i>
                        </a>
                        <ul class="tpl-left-nav-sub-menu">
                            <li>
                            	<router-link to="/buy">
                                    <i class="am-icon-angle-right"></i>
                                    <span>购货</span>
                                </router-link>

                                <router-link to="/rebuy">
                                    <i class="am-icon-angle-right"></i>
                                    <span>购货退货</span>
                                </router-link>
                            </li>
                        </ul>
                    </li>

                    <li class="tpl-left-nav-item">
                        <a href="javascript:;" class="nav-link tpl-left-nav-link-list">
                            <i class="am-icon-truck"></i>
                            <span>销货</span>
                            <i class="am-icon-angle-right tpl-left-nav-more-ico am-fr am-margin-right"></i>
                        </a>
                        <ul class="tpl-left-nav-sub-menu">
                            <li>
                                <router-link to="/sale">
                                    <i class="am-icon-angle-right"></i>
                                    <span>销货</span>
                                </router-link>

                                <router-link to="/resale">
                                    <i class="am-icon-angle-right"></i>
                                    <span>销货退货</span>
                                </router-link>

                            </li>
                        </ul>
                    </li>

                    <li class="tpl-left-nav-item">
                        <a href="javascript:;" class="nav-link tpl-left-nav-link-list">
                            <i class="am-icon-cube"></i>
                            <span>仓库</span>
                            <i class="am-icon-angle-right tpl-left-nav-more-ico am-fr am-margin-right"></i>
                        </a>
                        <ul class="tpl-left-nav-sub-menu">
                            <li>
                                <router-link to="/cka">
                                    <i class="am-icon-angle-right"></i>
                                    <span>调拨</span>
                                </router-link>

                                <router-link to="/ckb">
                                    <i class="am-icon-angle-right"></i>
                                    <span>盘点</span>
                                </router-link>

                                <router-link to="/ckc">
                                    <i class="am-icon-angle-right"></i>
                                    <span>其他入库</span>
                                </router-link>

                                <router-link to="/ckd">
                                    <i class="am-icon-angle-right"></i>
                                    <span>其他出库</span>
                                </router-link>

                                <router-link to="/cke">
                                    <i class="am-icon-angle-right"></i>
                                    <span>成本调整</span>
                                </router-link>
                            </li>
                        </ul>
                    </li>

                    <li class="tpl-left-nav-item">
                        <a href="javascript:;" class="nav-link tpl-left-nav-link-list">
                            <i class="am-icon-dollar"> </i>
                            <span>&nbsp;&nbsp;资金</span>
                            <i class="am-icon-angle-right tpl-left-nav-more-ico am-fr am-margin-right"></i>
                        </a>
                        <ul class="tpl-left-nav-sub-menu">
                            <li>
                                <router-link to="/moneya">
                                    <i class="am-icon-angle-right"></i>
                                    <span>收款</span>
                                </router-link>

                                <router-link to="/moneyb">
                                    <i class="am-icon-angle-right"></i>
                                    <span>付款</span>
                                </router-link>

                                <router-link to="/moneyc">
                                    <i class="am-icon-angle-right"></i>
                                    <span>其他收入</span>
                                </router-link>

                                <router-link to="/moneyd">
                                    <i class="am-icon-angle-right"></i>
                                    <span>其他支出</span>
                                </router-link>
                            </li>
                        </ul>
                    </li>

                    <li class="tpl-left-nav-item">
                        <a href="javascript:;" class="nav-link tpl-left-nav-link-list">
                            <i class="am-icon-table"></i>
                            <span>报表</span>
                            <i class="am-icon-angle-right tpl-left-nav-more-ico am-fr am-margin-right"></i>
                        </a>
                        <ul class="tpl-left-nav-sub-menu">
                            <li>
                                <router-link to="/tablea">
                                    <i class="am-icon-angle-right"></i>
                                    <span>采购报表</span>
                                </router-link>

                                <router-link to="/tableb">
                                    <i class="am-icon-angle-right"></i>
                                    <span>销售报表</span>
                                </router-link>

                                <router-link to="/tablec">
                                    <i class="am-icon-angle-right"></i>
                                    <span>仓存报表</span>
                                </router-link>

                                <router-link to="/tabled">
                                    <i class="am-icon-angle-right"></i>
                                    <span>资金报表</span>
                                </router-link>
                            </li>
                        </ul>
                    </li>

                    <li class="tpl-left-nav-item">
                        <a href="javascript:;" class="nav-link tpl-left-nav-link-list">
                            <i class="am-icon-cog"></i>
                            <span>设置</span>
                            <i class="am-icon-angle-right tpl-left-nav-more-ico am-fr am-margin-right"></i>
                        </a>
                        <ul class="tpl-left-nav-sub-menu">
                            <li>
                                <router-link to="/seta">
                                    <i class="am-icon-angle-right"></i>
                                    <span>账户设置</span>
                                </router-link>

                                <router-link to="/setb">
                                    <i class="am-icon-angle-right"></i>
                                    <span>商品管理</span>
                                </router-link>

                                <router-link to="/setc">
                                    <i class="am-icon-angle-right"></i>
                                    <span>供应商管理</span>
                                </router-link>

                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
</div>
</template>

<script>
export default {
  // name: 'header',
  data () {
    return {}
  }
}
</script>

<style scoped>

</style>