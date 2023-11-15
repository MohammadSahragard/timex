export const getSearchedWatches = async ({query}) => {
    const res = await fetch(`https://watches-db.vercel.app/watches?q=${query}`);

    if (!res.ok) {
        throw new Error ('Failed to fetch');
    };

    return res.json();
};