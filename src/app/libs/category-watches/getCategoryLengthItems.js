export const getCategoryLengthItems = async (category) => {

    const saleCategory = `https://watches-db.vercel.app/sale`;
    const otherCategory = `https://watches-db.vercel.app/watches?category=${category}`;

    const res = await fetch(category === 'Sale' ? saleCategory : otherCategory);

    if (!res.ok) {
        throw new Error('Failed to fetch');
    };

    return res.json();
};