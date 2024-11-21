import {create} from 'zustand';

type Service = {
  name: string;
  price: number;
};

type StoreState = {
  selectedServices: Service[];
  fullName: string;
  phoneNumber: string;
  collectionMethod: string;
  deliveryMethod: string;
  setSelectedServices: (services: Service[]) => void;
  setFullName: (name: string) => void;
  setPhoneNumber: (number: string) => void;
  setCollectionMethod: (method: string) => void;
  setDeliveryMethod: (method: string) => void;
};

export const useStore = create<StoreState>((set) => ({
  selectedServices: [],
  fullName: '',
  phoneNumber: '',
  collectionMethod: '',
  deliveryMethod: '',
  setSelectedServices: (services) => set({ selectedServices: services }),
  setFullName: (name) => set({ fullName: name }),
  setPhoneNumber: (number) => set({ phoneNumber: number }),
  setCollectionMethod: (method) => set({ collectionMethod: method }),
  setDeliveryMethod: (method) => set({ deliveryMethod: method }),
}));
