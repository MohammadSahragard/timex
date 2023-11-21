export const removeProductFromBasket = async (watchId) => {
    await fetch(`https://timex-db.vercel.app/cart/${watchId}`, { method: 'DELETE' });
};