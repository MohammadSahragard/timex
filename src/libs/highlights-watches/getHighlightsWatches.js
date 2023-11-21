export const getHighlightsWatches = async () => {
    const [menWatches, womenWatches] = await Promise.all([
        fetch('https://timex-db.vercel.app/watches?category=Men&_sort=price&_order=desc&_end=4').then(response => response.json()),
        fetch('https://timex-db.vercel.app/watches?category=Women&_sort=price&_order=desc&_end=4').then(response => response.json()),
    ]);

    return {
        menWatches,
        womenWatches
    };
};