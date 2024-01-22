import { configureStore } from "@reduxjs/toolkit"

import todoSlices from "./slices/todoSlices"

const data = ["", "", ""]

const store = configureStore({
    reducer: {
        todoSlices,
    },
})

export default store
