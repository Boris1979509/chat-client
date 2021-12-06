<template>
    <ul class="list-none overflow-hidden py-2">
        <li v-if="isJoin">
            <a
                href="#"
                class="
                    transition
                    duration-200
                    block
                    px-3
                    py-1
                    hover:bg-gray-100
                "
                @click.prevent="$emit('leave-chat')"
                v-text="$t('Leave chat')"
            ></a>
        </li>
        <li>
            <a
                href="#"
                class="
                    transition
                    duration-200
                    block
                    px-3
                    py-1
                    hover:bg-gray-100
                "
                @click.prevent="logout"
                v-text="$t('Logout')"
            ></a>
        </li>
    </ul>
</template>

<script>
import store from '@/store'
import router from '@/router'
import { useI18n } from 'vue-i18n'

export default {
    name: 'ChatDropdownActions',
    emits: ['leave-chat'],
    props: {
        isJoin: {
            type: Boolean,
            required: true,
        },
    },
    setup() {
        const { t } = useI18n() // translate

        const logout = async () => {
            await store.dispatch('auth/logout')
            router.push({ name: 'login' })
            store.dispatch(
                'setNotify',
                {
                    type: 'success',
                    message: t('Logout Message'),
                },
                { root: true }
            )
        }

        return { logout }
    },
}
</script>
