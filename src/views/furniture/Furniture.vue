<template>
  <section class="furniture">
    <nav>
      <ul class="furniture-ul clear">
        <li>
          <a href="#" class="chair on" data-index="1">椅</a>
        </li>
        <li>
          <a href="#" class="desk" data-index="2">桌</a>
        </li>
        <li>
          <a href="#" class="bed" data-index="3">床</a>
        </li>
        <li>
          <a href="#" class="wardrobe" data-index="5">柜</a>
        </li>
        <li>
          <a href="#" class="teaTable" data-index="4">几</a>
        </li>
        <li>
          <a href="#" class="soft" data-index="12">沙发</a>
        </li>
      </ul>
    </nav>
    <!-- 标题 -->
    <furnitureHeaderIcon></furnitureHeaderIcon>
    <!-- 分页 -->
    <div class="pagning clear"></div>
  </section>
</template>

<script>
import furnitureHeaderIcon from "@/components/furniture/FurnitureHeaderIcon.vue";
export default {
  name: "furnitureHeaderIcon",
  components:{
      furnitureHeaderIcon
  }
};
</script>
<style scoped>
/* 二级导航 */
.furniture-ul {
  padding: 40px 0px 50px;
  width: 980px;
  margin: 0 auto;
}
.furniture-ul li {
  cursor: pointer;
  display: inline-block;
  width: 10%;
  text-align: center;
  min-width: 55px;
  margin-right: 50px;
}
.furniture-ul li:nth-child(1) {
  margin-left: 50px;
}
.furniture-ul li a {
  display: inline-block;
  width: 98px;
  font-size: 18px;
  color: #111;
  text-decoration: none;
  text-transform: uppercase;
}
.furniture-ul li > .on {
  color: #cd9a7c;
}
/* 商品分类 */
.f-category {
  width: auto;
  margin: 0 auto 1px;
  line-height: 1;
}
/* 图标*/
.furniture-title {
  text-align: center;
  margin-bottom: 65px;
}
.furniture-icon {
  margin-bottom: 15px;
}
.f-icon {
  display: inline-block;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: contain;
  vertical-align: middle;
}
.f-icon-kitchen {
  width: 47px;
  height: 46px;
}
.f-icon-kitchen img {
  width: 47px;
  height: 46px;
}
/* 标题 */
.title {
  font-size: 16px;
  margin-bottom: 15px;
  color: #666;
}
.f-font-t {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
/* 图片 */
@media (max-width: 1400px) {
  .f-image-cell {
    width: 260px;
    height: 260px;
    margin: 0 20px 25px 0;
  }
}
/* 商品显示框 */
.furniture-cell {
  display: flex;
  justify-content: space-between;

  width: 1149px;
  margin: 0 auto;
}
/* 左侧商品图片大小 */
.left_box {
  font-size: 0;
  float: left;
}
.left_box img {
  width: 540px;
  height: 540px;
  display: block;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
  position: relative;
  background-color: #f7f7f7;
}
.left-image-cell {
  width: 540px;
  height: 540px;
  display: inline-block;
  position: relative;
}
/*右侧侧商品图片大小 */
.right_box {
  font-size: 0;
  float: right;
  width: 540px;
  height: 555px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.right_box img {
  width: 260px;
  height: 260px;
  display: inline-block;
  position: relative;
}
.right-image-cell {
  width: 260px;
  height: 260px;
  display: inline-block;
  font-size: 0;
  position: relative;
}
.right-image-cell img {
  display: inline-block;
  width: 260px;
  height: 260px;
  position: relative;
}
.f-cell-overlay .title {
  font-size: 16px;
  margin-bottom: 6px;
  color: #000;
}
.f-cell-overlay {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 15px 0;
  text-align: center;
  visibility: hidden;
  background-color: hsla(0, 0%, 100%, 0.5);
}
.price {
  font-size: 12px;
}
/* 详情hover */
.left-image-cell:hover .f-cell-overlay {
  visibility: visible;
}
.right-image-cell:hover .f-cell-overlay {
  visibility: visible;
}
/* 分页样式 */
.pagning {
  width: 1149px;
  margin: 0 auto;
  padding: 40px;
  text-align: right;
}
.pagning button {
  cursor: pointer;
  width: 33px;
  height: 33px;

  border: 1px solid white;
  outline: none;
  margin: 0 5px;
  /*  float:right; */
}
.styles {
  background: #adadad;
}
</style>

