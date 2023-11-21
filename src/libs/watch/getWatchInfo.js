export const getWatchInfo = async (id) => {
    const res = await fetch(`https://timex-db.vercel.app/watches/${id}`);

    if (!res.ok) {
        throw new Error('Failed to fetch');
    };

    return res.json();
};