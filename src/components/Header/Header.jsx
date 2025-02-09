import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex items-center justify-between border-b-2 pb-5'>
            <h1 className='text-red-500 text-2xl md:text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;