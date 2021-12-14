import { ref, onMounted } from 'vue'

export const useSidebar = () => {
    const isMobileSidebarOpen = ref(false)
    const isSidebarOpen = ref(false)
    const isSidebarSettingsOpen = ref(false)

    const openMobileSidebar = () => {
        isMobileSidebarOpen.value = true
    }
    const openSidebarSettings = () => {
        if (isMobileSidebarOpen.value) {
            isMobileSidebarOpen.value = false
        }
        isSidebarSettingsOpen.value = true
    }

    const toggleSidebar = () => {
        if (window.innerWidth >= 1024) {
            isSidebarOpen.value = !isSidebarOpen.value
        } else {
            openMobileSidebar()
        }
    }
    const closeMobileSidebar = () => {
        isMobileSidebarOpen.value = false
    }
    const closeSidebarSettings = () => {
        isSidebarSettingsOpen.value = false
    }

    onMounted(() => {
        onResize()
        window.addEventListener('resize', onResize)
    })
    const onResize = () => {
        if (window.innerWidth < 768 || window.innerWidth < 1024) {
            isSidebarOpen.value = false
        } else {
            isSidebarOpen.value = true
            closeMobileSidebar()
        }
    }
    return {
        isMobileSidebarOpen,
        isSidebarOpen,
        isSidebarSettingsOpen,
        openMobileSidebar,
        toggleSidebar,
        closeMobileSidebar,
        closeSidebarSettings,
        openSidebarSettings,
        onResize,
    }
}
