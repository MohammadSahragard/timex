export const getCategoryWatches = async (category, sortBy, pageNumber, perPage) => {

    const sortByItems = {
        popular: '&_sort=rate&_order=desc',
        trending: '&_sort=price&_order=desc',
        newest: '',
        price: '&_sort=price'
    };

    const saleCategory = `https://timex-db.vercel.app/sale?${sortByItems[sortBy]}&_page=${pageNumber}&_limit=${perPage}`;
    const otherCategory = `https://timex-db.vercel.app/watches?category=${category}${sortByItems[sortBy]}&_page=${pageNumber}&_limit=${perPage}`;

    const res = await fetch(category === 'Sale' ? saleCategory : otherCategory);

    if (!res.ok) {
        throw new Error('Failed to fetch');
    };

    return res.json();
};