export const addProductToBasket = async (watch) => {
    await fetch('https://timex-db.vercel.app/cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(watch)
    });
};