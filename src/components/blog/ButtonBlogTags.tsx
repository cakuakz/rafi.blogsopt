interface TagProps {
    tag: string
    isSelected: boolean
    onTagClick: (tag: string) => void
    className?: string
}

const ButtonBlogTags: React.FC<TagProps> = ({ tag, isSelected, onTagClick, className }) => {
    return ( 
        <button
            onClick={() => onTagClick(tag)}
            className={`py-2 px-3 ml-4 rounded-full bg-[#272727] text-[#7E7E7E] hover:text-[#F6F6F6] transition duration-300 cursor-pointer ${
                isSelected ? 'text-[#F6F6F6] outline-none bg-[#2E2F2F]' : 'opacity-50'} ${className}`}
        >
            <p className="font-normal text-sm">{tag}</p>
        </button>
    );
}
 
export default ButtonBlogTags;