const Rate = ({ value }) => {

    const stars = ['1', '2', '3', '4', '5'];


    return (
        <section className='flex gap-1'>
            {
                stars.map(star => <i key={star + 'h4l'} className={`${star <= value ? 'fa' : 'far'} fa-star text-primary`}></i>)
            }
        </section>
    );
};


export default Rate;