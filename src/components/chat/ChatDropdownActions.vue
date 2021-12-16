<template>
    <ul class="list-none overflow-hidden py-2">
        <li v-if="selectedChatId">
            <a
                href="#"
                class="transition duration-200 block px-3 py-1 hover:bg-gray-100"
                @click.prevent="
                    $emit('show-info-chat-group-from-dropdown', true)
                "
                v-text="$t('Information about chat group')"
            ></a>
        </li>
        <li v-if="isJoin">
            <a
                href="#"
                class="transition duration-200 block px-3 py-1 hover:bg-gray-100"
                @click.prevent="$emit('leave-chat')"
                v-text="$t('Leave chat')"
            ></a>
        </li>
        <li>
            <a
                href="#"
                class="transition duration-200 block px-3 py-1 hover:bg-gray-100"
                @click.prevent="logout"
                v-text="$t('Logout')"
            ></a>
        </li>
    </ul>
</template>

<script>
import { useAuthLogout } from '@/use/auth/logout'
export default {
    name: 'ChatDropdownActions',
    emits: ['leave-chat', 'show-info-chat-group-from-dropdown'],
    props: {
        isJoin: {
            type: Boolean,
            required: true,
        },
        selectedChatId: {
            type: String,
        },
    },
    setup() {
        return { ...useAuthLogout() }
    },
}
</script>
