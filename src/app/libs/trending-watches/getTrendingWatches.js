export const getTrendingWatches = async () => {
    const res = await fetch('https://watches-db.vercel.app/trending');

    if (!res.ok) {
        throw new Error('Failed to fetch');
    };

    return res.json();
};