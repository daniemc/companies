<template>
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <router-link :to="({ name: 'home' })" class="brand-link">
      <img :src="imgUrl" alt="company_img" class="brand-image img-circle elevation-3"
           style="opacity: .8">
      <span class="brand-text font-weight-light">Companies</span>
    </router-link>

    <!-- Sidebar -->
    <div class="sidebar os-host os-theme-light os-host-overflow os-host-overflow-y os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-transition">
      <!-- Sidebar Menu -->
      <nav class="mt-3">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <li class="nav-item" v-for="(item, m) in menu" :key="m">
            <router-link class="nav-link" :to="item.url">
                <i :class="`nav-icon ${item.icon}`"></i>
                <p>{{ item.text }}</p>
            </router-link>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
    export default {
        name: 'side-bar-menu',
        data() {
            return {
                imgUrl: window.config.companyImg,
                menu: [
                    { text: 'Companies', url: '/companies', icon: 'fas fa-building' },
                    { text: 'Employees', url: '/employees', icon: 'fas fa-users' },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
