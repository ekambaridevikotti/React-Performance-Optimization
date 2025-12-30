# React Performance Optimization using useMemo and useCallback

## 📌 Description
This project demonstrates performance optimization in React using `useMemo` and `useCallback`.
It avoids unnecessary recalculations and re-renders in a product listing application.

## 🚀 Features
- Displays list of products
- Calculates total price efficiently
- Counter button
- Optimized rendering behavior

## 🧠 Optimization Techniques
- `useMemo` is used to memoize total price calculation
- `useCallback` is used to memoize event handler functions

## 📂 Folder Structure
src/
 ├── components/
 │    └── ProductList.jsx
 ├── App.jsx
 ├── index.js
 └── styles.css

## 🔄 Expected Outcome
- Counter updates do NOT recalculate total price
- ProductList does NOT re-render unnecessarily

## ▶ How to Run
1. Clone the repository
2. Run `npm install`
3. Run `npm start`

## 🛠 Technologies Used
- React
- JavaScript
- useMemo
- useCallback
