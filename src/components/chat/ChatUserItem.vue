<template>
    <div
        class="flex items-center gap-3 px-6 py-3 cursor-default hover:bg-gray-100"
    >
        <div class="relative">
            <app-avatar :name="user.username" :is-online="isOnline" />
        </div>
        <div class="grow">
            <div class="flex items-center gap-1">
                <span
                    v-text="user.username"
                    class="block font-semibold text-base text-gray-600"
                >
                </span>
            </div>
            <div
                v-if="isOnline"
                class="text-sm text-blue-400"
                v-text="$t('online')"
            ></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ChatUserItem',
    props: {
        user: {
            type: Object,
            required: true,
        },
        isOnline: {
            type: Boolean,
            required: true,
        },
    },
}
</script>
