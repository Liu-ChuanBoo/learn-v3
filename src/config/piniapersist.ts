import { PersistedStateOptions } from "pinia-plugin-persistedstate";
/**
 * @description 持久化
 * key 存储到持久化的name
 * paths  需要持久化的name
 */

const piniaPersistConfig = (key: string, paths?: string[]) => {
    const persist: PersistedStateOptions = {
        key,
        storage: localStorage,
        paths
    }
    return persist
}
export default piniaPersistConfig