import { AtomEffect, DefaultValue } from "recoil";

export const localStorageEffect: (key: string) => AtomEffect<any> =
  (key: string) =>
  ({ setSelf, onSet }) => {
    setSelf(() => {
      let savedValue = localStorage.getItem(key);
      savedValue =
        savedValue != null ? JSON.parse(savedValue) : new DefaultValue(); // Abort initialization if no value was stored
      return savedValue;
    });

    onSet((newValue: any) => {
      if (newValue instanceof DefaultValue) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(newValue));
      }
    });
  };
