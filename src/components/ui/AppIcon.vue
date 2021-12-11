<template>
    <component :is="icon + '-icon'" />
</template>

<script>
import {
    LockOpenIcon,
    ExclamationCircleIcon,
    CheckIcon,
    InformationCircleIcon,
    XIcon,
    CogIcon,
    ArrowLeftIcon,
} from '@heroicons/vue/outline'
import {
    PaperAirplaneIcon,
    UserGroupIcon,
    DotsVerticalIcon,
    MenuIcon,
} from '@heroicons/vue/solid'

export default {
    name: 'AppIcon',
    props: {
        icon: {
            type: String,
            required: true,
        },
    },
    components: {
        LockOpenIcon,
        ExclamationCircleIcon,
        CheckIcon,
        InformationCircleIcon,
        XIcon,
        PaperAirplaneIcon,
        CogIcon,
        UserGroupIcon,
        DotsVerticalIcon,
        MenuIcon,
        ArrowLeftIcon,
    },
}
</script>
