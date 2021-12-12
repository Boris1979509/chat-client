export const useSearchChats = (chats, searchQuery) => {
    if (searchQuery.length) {
        const result = chats.filter((chat) =>
            chat.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        return result.length ? result : chats
    }
    return chats
}
