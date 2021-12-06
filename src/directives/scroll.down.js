export default {
    name: 'scroll-down',
    updated(el, binding) {
        if (binding.value === 0) return
        el.scrollTop = el.scrollHeight
    },
}
