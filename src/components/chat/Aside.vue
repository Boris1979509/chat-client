<template>
    <aside class="shadow z-10 bg-gray-50 bg-white border-r border-gray-300">
        <chats-list />
    </aside>
</template>

<script>
import ChatsList from '@/components/chat/ChatsList.vue'
export default {
    components: { ChatsList },
    name: 'Aside',
    setup() {
        return {}
    },
}
</script>
