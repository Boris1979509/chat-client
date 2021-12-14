<template>
    <div class="p-3 border-b border-gray-200">
        <div class="flex">
            <app-avatar :name="user.username" :classes="['h-12', 'w-12']" />
        </div>
        <div class="mt-3 space-y-1">
            <div class="text-md font-semibold">
                {{ user.username }}
            </div>
            <div class="text-sm">
                <div>
                    <span class="font-semibold">{{ $t('Email') }}:</span>
                    {{ user.email }}
                </div>
                <div>
                    <span class="font-semibold">{{ $t('Age') }}:</span>
                    {{ user.age }}
                </div>
                <div>
                    <span class="font-semibold">{{ $t('Gender') }}:</span>
                    {{ $t($filters.ucFirst(user.gender)) }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UserInfo',
    props: {
        user: {
            type: Object,
            required: true,
        },
    },
}
</script>
