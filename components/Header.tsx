import Link from 'next/link'

const Header = () => {
  return (
    <div className="flex gap-10 bg-black h-[70px] items-center px-8">
      <Link href="/welcome" className="text-white text-xl hover:underline">
        Home
      </Link>
      <Link href="/navigation" className="text-white text-xl hover:underline">
        About
      </Link>
      <Link href="/navigation/links" className="text-white text-xl hover:underline">
        Logo
      </Link>
    </div>
  )
}

export default Header
