export const getBasketProducts = async () => {
    const res = await fetch('https://watches-db.vercel.app/cart');

    if (!res.ok) {
        throw new Error('Failed to fetch');
    };

    return res.json();
};