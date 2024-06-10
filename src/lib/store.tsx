import { create } from 'zustand';
import { devtools } from 'zustand/middleware';


// Define the shape of the store's state

interface StoreState {
  headerData?: any;
  setHeaderData: (headerData: any) => void;
  footerData?: any;
  setFooterData: (footerData: any) => void;
  navIsOpen: boolean;
  setNavIsOpen: (toggle: boolean) => void;
  lenis?: any;
  setLenis: (lenis: any) => void;
  overflow: boolean;
  setOverflow: (overflow: boolean) => void;
  triggerTransition: string;
  setTriggerTransition: (triggerTransition: string) => void;
  thresholds: Record<string, any>;
  addThreshold: (params: { id: string; value: any }) => void;
  introOut: boolean;
  setIntroOut: (introOut: boolean) => void;
}

// Create the store using the defined state and actions
export const useStore = create<StoreState>()(
  devtools((set) => ({
  headerData: undefined,
  setHeaderData: (headerData) => set({ headerData }),
  footerData: undefined,
  setFooterData: (footerData) => set({ footerData }),
  navIsOpen: false,
  setNavIsOpen: (toggle) => set({ navIsOpen: toggle, overflow: !toggle }),
  lenis: undefined,
  setLenis: (lenis) => set({ lenis }),
  overflow: true,
  setOverflow: (overflow) => set({ overflow }),
  triggerTransition: '',
  setTriggerTransition: (triggerTransition) => set({ triggerTransition }),
  thresholds: {},
  addThreshold: ({ id, value }) => {
    //const thresholds = { ...get().thresholds };
    //thresholds[id] = value;
    //set({ thresholds });
  },
  introOut: false,
  //decrement: () => set((state) => ({ count: state.count - 1 })),
  setIntroOut: (introOut) => set({introOut}),
}))
)