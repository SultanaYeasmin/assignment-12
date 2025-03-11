

const Container = ({children}) => {
    return (
        <div className='max-w-[1800px] mx-auto px-2 md:px-5 lg:px-10'>
            {children}
        </div>
    );
};

export default Container;