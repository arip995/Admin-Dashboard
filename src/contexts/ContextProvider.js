import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();
const initialState = {
	chat: false,
	cart: false,
	userProfile: false,
	notification: false,
};

const userData = JSON.parse(localStorage.getItem('user'));
console.log(userData);
export const ContextProvider = ({ children }) => {
	const [activeMenu, setActiveMenu] = useState(true);
	const [isClicked, setIsClicked] = useState(initialState);
	const [screenSize, setScreenSize] = useState(undefined);
	const [currentColor, setCurrentColor] = useState('#03C9D7');
	const [currentMode, setCurrentMode] = useState('Light');
	const [themeSettings, setThemeSettings] = useState(false);
	const [user, setUser] = useState(userData);

	const handleClick = (clicked) => {
		setIsClicked({ ...initialState, [clicked]: true });
	};

	const setMode = (mode) => {
		console.log(mode);
		setCurrentMode(mode);
		localStorage.setItem('themeMode', mode);
	};

	const setColor = (color) => {
		setCurrentColor(color);
		localStorage.setItem('themeColor', color);
	};

	return (
		<StateContext.Provider
			value={{
				activeMenu,
				setActiveMenu,
				isClicked,
				setIsClicked,
				handleClick,
				screenSize,
				setScreenSize,
				currentColor,
				setCurrentColor,
				currentMode,
				setCurrentMode,
				setMode,
				setColor,
				themeSettings,
				setThemeSettings,
				user,
				setUser,
			}}
		>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
