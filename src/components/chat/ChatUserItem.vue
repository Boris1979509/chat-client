<template>
    <div
        class="
            flex
            items-center
            gap-3
            px-6
            py-3
            cursor-default
            hover:bg-gray-100
        "
    >
        <div
            class="
                flex
                items-center
                justify-center
                bg-red-600
                h-12
                w-12
                rounded-full
                relative
            "
        >
            <span
                class="font-bold text-white"
                v-text="$filters.firstChar(user.username)"
            ></span>
            <transition name="fade">
                <div
                    v-if="isOnline"
                    class="
                        w-3
                        h-3
                        border-2 border-white
                        bottom-0
                        right-0
                        absolute
                        rounded-lg
                        bg-green-400
                    "
                ></div>
            </transition>
        </div>
        <div class="flex-grow">
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
