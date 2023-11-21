export const getWatches = async () => {
    const res = await fetch('https://timex-db.vercel.app/watches');

    if (!res.ok) {
        throw new Error('Failed to fetch');
    };

    return res.json();
};