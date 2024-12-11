<template>
    <v-app>
        <v-app-bar>
            <v-container class="d-flex align-center">
                <v-app-bar-title>番茄鐘</v-app-bar-title>
                <v-btn prepend-icon="mdi-home" to="/">首頁</v-btn>
                <v-btn prepend-icon="mdi-format-list-bulleted" to="/list">事項</v-btn>
                <v-btn prepend-icon="mdi-cog" to="/settings">設定</v-btn>
            </v-container>
        </v-app-bar>
        <v-main>
            <!--
                slot 讓HTML標籤內的內容可以顯示在元件內的<slot></slot>插槽中
                子元件內可以用 <slot :Component="something"></slot> 把 something 傳出來
                父元件可以用 <router-view v-slot="slopProps.Component"></router-view> 取得
                這裡使用 v-slot="{ Component }" 為解構的用法
            -->
            <!-- Component 取得當前router-view是哪個Component -->
            <router-view v-slot="{ Component }">
                <!--
                    <component :is="元件或元件名"></component> 動態切換組件
                    keep-alive 保持頁面不被銷毀
                    include 指定要保持的組件
                -->
                <keep-alive include="index">
                    <component :is="Component"></component>
                </keep-alive>
            </router-view>
        </v-main>
    </v-app>
</template>
