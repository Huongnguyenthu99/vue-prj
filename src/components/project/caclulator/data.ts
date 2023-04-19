import { useCounterStoreWithOut } from "../../../store/module/store";


const useStore = useCounterStoreWithOut();

export const counter = useStore.count