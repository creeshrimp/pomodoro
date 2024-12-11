<template>
    <svg class="digit" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px" y="0px" width="256px" height="529px" viewBox="0 0 256 529" enable-background="new 0 0 256 529"
        xml:space="preserve">
        <path :class="{ active: '02356789'.includes(data) }" class="digit-a" fill="#FF5F8D" d="M231,13c0,6.627-5.373,12-12,12H37c-6.627,0-12-5.373-12-12v-1c0-6.627,5.373-12,12-12h182
	c6.627,0,12,5.373,12,12V13z" />
        <path :class="{ active: '01234789'.includes(data) }" class="digit-b" fill="#FF5F8D" d="M244,35c6.627,0,12,5.373,12,12v182c0,6.627-5.373,12-12,12h-1c-6.627,0-12-5.373-12-12V47
	c0-6.627,5.373-12,12-12H244z" />
        <path :class="{ active: '013456789'.includes(data) }" class="digit-c" fill="#FF5F8D" d="M244,290c6.627,0,12,5.373,12,12v182c0,6.628-5.373,12-12,12h-1c-6.627,0-12-5.372-12-12V302
	c0-6.627,5.373-12,12-12H244z" />
        <path :class="{ active: '0456789'.includes(data) }" class="digit-d" fill="#FF5F8D" d="M13,35c6.627,0,12,5.373,12,12v182c0,6.627-5.373,12-12,12h-1c-6.627,0-12-5.373-12-12V47
	c0-6.627,5.373-12,12-12H13z" />
        <path :class="{ active: '0268'.includes(data) }" class="digit-e" fill="#FF5F8D" d="M13,290c6.627,0,12,5.373,12,12v182c0,6.628-5.373,12-12,12h-1c-6.627,0-12-5.372-12-12V302
	c0-6.627,5.373-12,12-12H13z" />
        <path :class="{ active: '2345689'.includes(data) }" class="digit-f" fill="#FF5F8D" d="M231,265c0,6.627-5.373,12-12,12H37c-6.627,0-12-5.373-12-12v-1c0-6.627,5.373-12,12-12h182
	c6.627,0,12,5.373,12,12V265z" />
        <path :class="{ active: '0235689'.includes(data) }" class="digit-g" fill="#FF5F8D" d="M231,517c0,6.627-5.373,12-12,12H37c-6.627,0-12-5.373-12-12v-1c0-6.627,5.373-12,12-12h182
	c6.627,0,12,5.373,12,12V517z" />
        <circle :class="{ active: data === ':' }" fill="#FF5F8D" cx="128" cy="138" r="32" />
        <circle :class="{ active: data === ':' }" fill="#FF5F8D" cx="128" cy="393" r="32" />
    </svg>
</template>

<script setup>
defineProps({
    data: {
        type: String,
        default() {
            return ""
        },
    },
    color: {
        type: String,
        default() {
            return "white"
        },
    }
})
</script>
<style scoped lang="scss">
.digit {
    width: 100px;
    height: 197px;
    margin: 7px;
}

path,
circle {
    fill: transparent;

    &.active {
        // v-bind 把 CSS 的值和 Vue 的變數綁定
        fill: v-bind(color);
    }
}
</style>
<!-- <style scoped lang="sass">
path, circle
    fill: transparent
    &.active
        // v-bind 把 CSS 的值和 Vue 的變數綁定
        fill: v-bind(color)
</style> -->
