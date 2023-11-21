export const getProductReviews = async () => {
    const res = await fetch('https://timex-db.vercel.app/reviews');

    if (!res.ok) {
        throw new Error('Failed to fetch');
    };

    return res.json();
};