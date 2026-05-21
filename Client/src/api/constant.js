const urlBase = import.meta.env.VITE_API_URL

// Users
export const register = urlBase + 'users/register'
export const login = urlBase + 'users/login'
export const forgotPassword = urlBase + 'users/forgotPassword'
export const resetPassword = urlBase + 'users/resetPassword'
export const getcurrentuser = urlBase + 'users/get-current-user'
export const getAllDonorsOfOrg = urlBase + 'users/get-all-donors'
export const getAllHospOfOrg = urlBase + 'users/get-all-hospitals'
export const getAllOrgForDonor = urlBase + 'users/get-all-org-for-donor'
export const getAllOrgForHospital = urlBase + 'users/get-all-org-for-hospital'

// Inventory
export const addInventory = urlBase + 'inventory/addInventory'
export const getInventory = urlBase + 'inventory/getInventory'
export const getInventoryWithFilters = urlBase + 'inventory/getInventory-filter'

// Dashboard
export const getAllBloodData = urlBase + 'dashboard/bloodGroup-data-all'
