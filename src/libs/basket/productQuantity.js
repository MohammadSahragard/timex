export const increaseQuantity = async (id, quantity) => {
    await fetch(`https://timex-db.vercel.app/cart/${id}`, {
        method: 'PATCH',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ quantity: quantity + 1 })
    });
};

export const decreaseQuantity = async (id, quantity) => {
    await fetch(`https://timex-db.vercel.app/cart/${id}`, {
        method: 'PATCH',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ quantity: quantity - 1 })
    });
};