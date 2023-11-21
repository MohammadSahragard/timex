export const getRelatedWatches = async (collection) => {
    const res = await fetch(`https://timex-db.vercel.app/watches?collection=${collection}`);

    if (!res.ok) {
        throw new Error('Failed to fetch');
    };

    return res.json();
};