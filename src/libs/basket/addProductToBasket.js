export const addProductToBasket = async (watch) => {
    await fetch('https://watches-db.vercel.app/cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(watch)
    });
};