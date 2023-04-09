import { useCounterStoreWithOut } from "../../../store"

const useStore = useCounterStoreWithOut();

export const counter = useStore.count