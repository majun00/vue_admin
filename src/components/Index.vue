<template>
<div>
	<div class="tpl-content-wrapper">
            <ol class="am-breadcrumb">
                <li><router-link to="/" class="am-icon-home">首页</router-link></li>
                <!-- <li class="am-active">内容</li> -->
            </ol>
            <div class="row">
                <div class="am-u-md-12 am-u-sm-12 row-mb">
                    <div class="tpl-portlet">

                        <div class="tpl-portlet-title">
                            <div class="tpl-portlet-input">
                                <div class="portlet-input input-small input-inline">
                                    <div class="input-icon right">
                                        <i class="am-icon-search"></i>
                                        <input type="text" class="form-control form-control-solid" placeholder="搜索..."> </div>
                                </div>
                            </div>
                        </div>

                        <div class="am-g">
                          <div class="am-u-sm-10">
                              <!-- <div class="am-g index_lis">
                                <ul class="am-cf">
                                    <li>
                                        <p>库存总量: <span>1,398.00</span></p>
                                        <p>库存成本: <span>1,398.00</span></p>
                                    </li>
                                    <li>
                                        <p>现金: <span>1,398.00</span></p>
                                        <p>银行存款: <span>1,398.00</span></p>
                                    </li>
                                    <li>
                                        <p>客户存款: <span>1,398.00</span></p>
                                        <p>供应商欠款: <span>1,398.00</span></p>
                                    </li>
                                    <li>
                                        <p>销售收入(本月): <span>1,398.00</span></p>
                                        <p>商品毛利(本月): <span>1,398.00</span></p>
                                    </li>
                                    <li>
                                        <p>采购金额(本月): <span>1,398.00</span></p>
                                        <p>商品肿瘤(本月): <span>1,398.00</span></p>
                                    </li>
                                </ul>
                              </div> -->

                                <div class="am-g index_imgs">
                                  <div class="am-u-sm-3">
                                    <router-link to="/buy">
                                        <img src="../assets/img/1.png" alt="">
                                        <p>采购入库</p>
                                    </router-link>
                                  </div>
                                  <div class="am-u-sm-3">
                                    <router-link to="/sale">
                                        <img src="../assets/img/2.png" alt="">
                                        <p>销货出库</p>
                                    </router-link>
                                  </div>
                                  <div class="am-u-sm-3">
                                    <router-link to="/cka">
                                        <img src="../assets/img/3.png" alt="">
                                        <p>仓库调拨</p>
                                    </router-link>
                                  </div>
                                  <div class="am-u-sm-3">
                                    <router-link to="/ckb">
                                        <img src="../assets/img/4.png" alt="">
                                        <p>库存盘点</p>
                                    </router-link>
                                  </div>
                                </div>
                                <div class="am-g index_imgs">
                                  <div class="am-u-sm-3">
                                    <router-link to="/ckc">
                                        <img src="../assets/img/5.png" alt="">
                                        <p>其他入库</p>
                                    </router-link>
                                  </div>
                                  <div class="am-u-sm-3">
                                    <router-link to="/ckd">
                                        <img src="../assets/img/6.png" alt="">
                                        <p>其他进库</p>
                                    </router-link>
                                  </div>
                                  <div class="am-u-sm-3">
                                    <router-link to="/cke">
                                        <img src="../assets/img/7.png" alt="">
                                        <p>成本调整</p>
                                    </router-link>
                                  </div>
                                  <div class="am-u-sm-3">
                                    <router-link to="/seta">
                                        <img src="../assets/img/8.png" alt="">
                                        <p>账户设置</p>
                                    </router-link>
                                  </div>
                                </div>
                          </div>
                          <div class="am-u-sm-2">
                                <ul class="am-nav">
                                  <li class="am-active"><a href="javascript:;">快速查看</a></li>
                                  <li><router-link to="/setb">商品管理</router-link></li>
                                  <li><router-link to="/setc">供应商管理</router-link></li>
                                  <li><router-link to="/sale">销售记录</router-link></li>
                                  <li><router-link to="/buy">采购记录</router-link></li>
                                  <li><router-link to="/moneya">收款记录</router-link></li>
                                  <li><router-link to="/moneyb">付款记录</router-link></li>
                                  <li><router-link to="/sale/detail">销售明细表</router-link></li>
                                  <li><router-link to="/buy/detail">采购明细表</router-link></li>
                                  <li><router-link to="/cka">调拨记录</router-link></li>
                                </ul>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>
</template>

<script>
export default {
  // name: 'Index',
  data () {
    return {}
  }
}
</script>

<style scoped>

</style>