<template>
    <teleport to="body">
        <transition name="fade">
            <div
                v-show="state"
                class="opacity-50 fixed inset-0 z-20 bg-black"
            ></div>
        </transition>
        <transition name="fade">
            <div
                v-show="state"
                class="overflow-x-hidden overflow-y-auto fixed inset-0 z-30"
            >
                <div
                    @click.self="hideModal"
                    class="relative flex flex-col items-center justify-center min-h-full"
                >
                    <div
                        class="max-w-lg border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none pb-6"
                    >
                        <div
                            class="flex items-center justify-between p-2 border-b border-solid border-gray-200 rounded-t gap-4"
                        >
                            <div class="text-lg ml-3 font-semibold">
                                {{ title }}
                            </div>
                            <app-button-close @close="hideModal" />
                        </div>
                        <!--body-->
                        <div class="relative flex-auto">
                            <slot />
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </teleport>
</template>

<script>
export default {
    name: 'AppModal',
    emits: ['update:state'],
    props: {
        state: {
            type: Boolean,
            default: false,
        },
        title: String,
    },
    setup(_, { emit }) {
        const hideModal = () => {
            emit('update:state', false)
        }
        return { hideModal }
    },
}
</script>
