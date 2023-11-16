export const getCategoryWatches = async (category, sortBy) => {

    const sortByItems = {
        popular: '&_sort=rate&_order=desc',
        trending: '&_sort=price&_order=desc',
        newest: '',
        price: '&_sort=price'
    };


    const res = await fetch(`https://watches-db.vercel.app/watches?category=${category}${sortByItems[sortBy]}`);

    if (!res.ok) {
        throw new Error('Failed to fetch');
    };

    return res.json();
};