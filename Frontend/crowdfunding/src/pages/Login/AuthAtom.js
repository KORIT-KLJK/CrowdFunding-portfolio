import { atom } from 'recoil';

export const refreshState = atom({
    key: "refreshState",
    default: true
});

export const authenticatedState = atom({
    key: "authenticatedState",
    default: false  // 기본값
});   // 상태 하나하나를 atom으로 본다