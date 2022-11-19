import { createAction, createSlice } from "@reduxjs/toolkit";
import orderBy from "lodash.orderby";
import localStorageService from "../services/localStorage.service";

const matesSlice = createSlice({
    name: "mates",
    initialState: {
        entities: null,
        isLoading: true,
        error: null
    },
    reducers: {
        matesRequested: (state) => {
            state.isLoading = true;
        },
        mateUpdateRequested: (state) => {
            state.isLoading = true;
        },
        matesReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        matesRequestedFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        mateUpdated: (state, action) => {
            const elementIndex = state.entities.findIndex((el) => el._id === action.payload._id);
            state.entities[elementIndex] = {
                ...state.entities[elementIndex],
                ...action.payload
            };
            state.isLoading = false;
        }
    }
});

const { reducer: matesReducer, actions } = matesSlice;
const { matesRequested, matesReceived, matesRequestedFailed, mateUpdateRequested, mateUpdated } =
    actions;

const mateUpdateFailed = createAction("mates/mateUpdateFailed");

export const loadMates = () => async (dispatch) => {
    dispatch(matesRequested);
    try {
        let content = await localStorageService.getMates();
        if (!content) {
            localStorageService.setMates();
            content = await localStorageService.getMates();
        }
        const sortedContent = orderBy(content, ["isFavourite"], ["desc"]);
        dispatch(matesReceived(sortedContent));
    } catch (error) {
        dispatch(matesRequestedFailed(error.message));
    }
};

export const updateMate = (payload) => async (dispatch) => {
    try {
        dispatch(mateUpdateRequested());
        const content = await localStorageService.updateMate(payload);
        dispatch(mateUpdated(content));
    } catch (error) {
        dispatch(mateUpdateFailed(error.message));
    }
};

export const getMates = () => (state) => state.mates.entities;

export const getMateById = (mateId) => (state) => {
    return state.mates.entities ? state.mates.entities.find((m) => +m._id === +mateId) : null;
};
export const getMatesLoadingStatus = () => (state) => state.mates.isLoading;
export default matesReducer;
