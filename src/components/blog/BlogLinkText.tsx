interface BlogLinkProps {
    href: string
    text: string
}

export default function BlogLinkText({ href, text }: BlogLinkProps) {
    return (
        <a href={href} className="font-bold text-[#F6F6F6] hover:border-b border-b-[#F6F6F6] transform duration-100">
            {text}
        </a> 
    )
}