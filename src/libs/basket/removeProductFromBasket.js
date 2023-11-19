export const removeProductFromBasket = async (watchId) => {
    await fetch(`https://watches-db.vercel.app/cart/${watchId}`, { method: 'DELETE' });
};