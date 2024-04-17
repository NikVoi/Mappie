import { IPlace } from '@/Types/Types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../Store'
import { IFavoritesState } from './Types'

const initialState: IFavoritesState = {
	places: JSON.parse(localStorage.getItem('favorites') || '[]'),
}

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		addPlace: (state, action: PayloadAction<IPlace>) => {
			state.places.push(action.payload)
			localStorage.setItem('favorites', JSON.stringify(state.places))
		},
		removePlace: (state, action: PayloadAction<string>) => {
			state.places = state.places.filter(place => place.id !== action.payload)
			localStorage.setItem('favorites', JSON.stringify(state.places))
		},
	},
})

export const { addPlace, removePlace } = favoritesSlice.actions

export const selectFavorites = (state: RootState) => state.favorites.places

export default favoritesSlice.reducer