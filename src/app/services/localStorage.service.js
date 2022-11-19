import { MATES_STORAGE } from "../constants/constants";
import matesData from "../mockData/teamMates.json";

export function setMates() {
    localStorage.setItem(MATES_STORAGE, JSON.stringify(matesData));
}

const getMates = () => {
    return new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(JSON.parse(localStorage.getItem(MATES_STORAGE)));
        }, 600);
    });
};

const getMateById = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(
                JSON.parse(localStorage.getItem(MATES_STORAGE)).find((mate) => mate._id === id)
            );
        }, 1000);
    });

const updateMate = (id, data) =>
    new Promise((resolve) => {
        const mates = JSON.parse(localStorage.getItem(MATES_STORAGE));
        const mateIndex = mates.findIndex((m) => m._id === id);
        mates[mateIndex] = { ...mates[mateIndex], ...data };
        localStorage.setItem(MATES_STORAGE, JSON.stringify(mates));
        resolve(mates[mateIndex]);
    });

const localStorageService = {
    setMates,
    getMates,
    getMateById,
    updateMate
};

export default localStorageService;
