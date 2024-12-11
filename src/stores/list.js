import { defineStore } from 'pinia'

const time = parseInt(import.meta.env.VITE_TIME)
const timeBreak = parseInt(import.meta.env.VITE_TIME_BREAK)

export const useListStore = defineStore('list', {
    state: () => ({
        items: [],
        id: 1,
        timeleft: time, // 剩餘倒數時間
        break: false, // 是否在休息時間
        finishedItems: [], // 已完成事項
        current: '', // 目前倒數事項
    }),
    actions: {
        addItem(value) {
            this.items.push({
                id: this.id++,
                text: value,
                edit: false,
                model: value,
            })
        },
        findIndexById(id) {
            return this.items.findIndex((item) => item.id === id)
        },
        delItem(id) {
            const i = this.findIndexById(id)
            this.items.splice(i, 1)
        },
        editItem(id) {
            const i = this.findIndexById(id)
            this.items[i].edit = true
        },
        confirmEditItem(id) {
            const i = this.findIndexById(id)
            this.items[i].text = this.items[i].model
            this.items[i].edit = false
        },
        cancelEditItem(id) {
            const i = this.findIndexById(id)
            this.items[i].edit = false
        },
        setCurrentItem() {
            // 拿出第一個東西設定為當前
            this.current = this.break ? '休息一下' : this.items.shift().text
        },
        countdown() {
            this.timeleft--
        },
        setFinishItem() {
            this.finishedItems.push({
                id: this.id++,
                text: this.current,
            })
            this.current = ''
            if (this.items.length > 0) {
                this.break = !this.break
            }
            this.timeleft = this.break ? timeBreak : time
        },
        delFinishedItem(id) {
            const i = this.finishedItems.findIndex((item) => item.id === id)
            this.finishedItems.splice(i, 1)
        },
    },
    // pinan persist 套件，幫你自動同步到 localStorage
    persist: {
        key: 'pomodoro-list',
    },
})
