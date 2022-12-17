const Image = ({ res }) => {
    return (
        <a href={res.urls.regular} target="_blank" rel='noreferrer'>
            <img className='h-64 w-full object-cover rounded-lg shadow-md'
                src={res.urls.small} alt={res.alt_description} />
        </a>
    )
}

export default Image